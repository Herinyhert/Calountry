<template>
  <v-row>
    <v-col>
      <v-sheet>
        <div class="d-flex">
          <v-btn
            fab
            text
            small
            color="grey darken-2"
            @click="$refs.calendar.prev()"
          >
            <v-icon small> mdi-chevron-left </v-icon>
          </v-btn>
          <v-btn
            fab
            text
            small
            color="grey darken-2"
            @click="$refs.calendar.next()"
          >
            <v-icon small> mdi-chevron-right </v-icon>
          </v-btn>
          <p>Clandario del Equipo de:</p>
        </div>
        <v-calendar
          ref="calendar"
          v-model="value"
          color="primary"
          type="week"
          :events="events"
          :event-color="getEventColor"
          :event-height="44"
          :first-interval="6"
          :interval-count="17"
          :interval-height="44"
          :scroll-timed-events="true"
          :weekdays="[1, 2, 3, 4, 5]"
          @change="getEvents"
          @mousedown:event="startDrag"
          @mousedown:time="startTime"
          @mouseup:time="(arg) => endDrag(arg, 'end')"
          @mouseleave.native="cancelDrag"
          @click:event="clickEvent"
          @contextmenu:time="rigthClick"
        >
          <template v-slot:event="prop">
            <div
              v-if="prop.timed"
              class="v-event-drag-bottom"
              @mousedown.stop="extendBottom(prop.event)"
            ></div>
            <div class="v-event-draggable">
              <component
                @click:event="clickEvent"
                class="event-item"
                :is="{ render: prop.eventSummary }"
              ></component>
            </div>
          </template>
        </v-calendar>
      </v-sheet>
    </v-col>
    <EventInput
      v-if="this.modals.eventModal"
      :delete="this.delete"
      @save:event="handdleSave"
    ></EventInput>
  </v-row>
</template>
<script>
import { mapMutations, mapState } from "vuex";
import EventInput from "./EventInput.vue";
import { getMyEvents, createEventFn } from "@/services/events/events";
export default {
  props: {
    group: {
      type: Object,
    },
  },
  data: () => ({
    textName: "",
    textDesc: "",
    delete: false,
    value: "",
    eventClicked: {},
    events: [],
    colors: [
      "#2196F3",
      "#3F51B5",
      "#673AB7",
      "#00BCD4",
      "#4CAF50",
      "#FF9800",
      "#757575",
    ],
    dragEvent: null,
    dragStart: null,
    createEvent: null,
    createStart: null,
    extendOriginal: null,
  }),
  created() {
    getMyEvents().then((res) => {
      this.events = res.map((x) => ({
        ...x,
        start: new Date(x.start),
        end: new Date(x.end),
      }));
    });
  },
  computed: {
    ...mapState(["auth", "modals"]),
  },
  methods: {
    ...mapMutations({
      setEvent: "modals/setEvent",
      setEventValues: "modals/setEventValues",
    }),

    async handdleSave(data) {
      if (data.action == "save") {
        this.createEvent.name = data.name;
        this.createEvent.description = data.description;

        const res = await createEventFn({
          ...this.createEvent,
          end: new Date(this.createEvent.end),
          start: new Date(this.createEvent.start),
        });
        this.createEvent.id = res.id;
        res && this.events.push({ ...this.createEvent });
        this.clearCurretEvent();
        return;
      }

      if (data.action == "delete") {
        getMyEvents().then((res) => {
          this.events = res.map((x) => ({
            ...x,
            start: new Date(x.start),
            end: new Date(x.end),
          }));
        });
        this.setEventValues({ name: "", description: "", id: "" });
        return;
      }
    },

    cickcc() {},
    rigthClick() {},
    clickEvent(prop) {
      if (!prop) return;
      this.textName = prop.event.name;
      this.textDesc = prop.event.description;
      this.delete = true;
      this.setEventValues({
        name: prop.event.name,
        description: prop.event.description,
        id: prop.event.id,
      });
      this.setEvent(true);
    },
    deleteEvent(e) {
      e.canceluble = true;
      e.stopPropagation();
    },
    //default
    startDrag({ event, timed }) {
      if (event && timed) {
        this.dragEvent = event;
        this.dragTime = null;
        this.extendOriginal = null;
      }
    },
    startTime(tms) {
      const mouse = this.toTime(tms);
      if (this.dragEvent && this.dragTime === null) {
        const start = this.dragEvent.start;
        this.dragTime = mouse - start;
      } else {
        this.createStart = this.roundTime(mouse);
        this.createEvent = {
          name: "",
          color: this.rndElement(this.colors),
          start: this.createStart,
          end: this.createStart + 60 * 1000 * 15,
          timed: true,
        };

        this.delete = false;
      }
    },
    clearCurretEvent() {
      this.createEvent.name = "";
      this.createEvent.color = "";
      this.createEvent.start = "";
      this.createEvent.end = "";
      this.createEvent.description;
    },
    extendBottom(event) {
      this.createEvent = event;
      this.createStart = event.start;
      this.extendOriginal = event.end;
    },

    endDrag() {
      this.dragTime = null;
      this.dragEvent = null;
      this.createStart = null;
      this.extendOriginal = null;

      this.setEvent(true);
    },
    cancelDrag() {
      if (this.createEvent) {
        if (this.extendOriginal) {
          this.createEvent.end = this.extendOriginal;
        } else {
          const i = this.events.indexOf(this.createEvent);
          if (i !== -1) {
            this.events.splice(i, 1);
          }
        }
      }

      this.createStart = null;
      this.dragTime = null;
      this.dragEvent = null;
    },
    roundTime(time, down = true) {
      const roundTo = 30; // minutes
      const roundDownTime = roundTo * 60 * 1000;
      return down
        ? time - (time % roundDownTime)
        : time + (roundDownTime - (time % roundDownTime));
    },
    toTime(tms) {
      return new Date(
        tms.year,
        tms.month - 1,
        tms.day,
        tms.hour,
        tms.minute
      ).getTime();
    },
    getEventColor(event) {
      const rgb = parseInt(event.color.substring(1), 16);
      const r = (rgb >> 16) & 255;
      const g = (rgb >> 8) & 255;
      const b = (rgb >> 0) & 255;
      return event === this.dragEvent
        ? `rgba(${r}, ${g}, ${b}, 0.7)`
        : event === this.createEvent
        ? `rgba(${r}, ${g}, ${b}, 0.7)`
        : event.color;
    },
    getEvents() {},
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    },
    rndElement(arr) {
      return arr[this.rnd(0, arr.length - 1)];
    },
  },
  components: { EventInput },
};
</script>

<style scoped lang="scss">
.event-close {
  position: absolute;
  right: 0;
}

.event-item {
  font-size: 1rem;
  text-align: center;
}
</style>
