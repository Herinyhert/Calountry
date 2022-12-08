<template>
  <div>
    <DetailNameGroup :detailGroup="this.detailGroup" />
    <DetailGroup :users="this.detailGroup.users" />
    <v-row style="margin-left:30%; margin-top:-100px">
        <div class="d-flex" style="width:80%">
          <GroupCalendar
            :group="this.detailGroup"
            class="calendar"
          ></GroupCalendar>
        </div>
      </v-row>
  </div>
</template>

<script>
import GroupCalendar from "@/components/groups/GroupCalendar.vue";
import DetailGroup from "@/components/groups/DetailGroup.vue";
import DetailNameGroup from "@/components/groups/DetailNameGroup.vue";
import { getDetailGroup } from "../../../services/group/group";

export default {
  name: "GroupView",
  components: { DetailGroup, DetailNameGroup, GroupCalendar },
  data() {
    return {
      groupId: null,
      detailGroup: {
        id: "",
        name: "",
        created_at: "",
        start_date: "",
        end_date: "",
        users: [],
      },
    };
  },
  mounted() {
    this.groupId = this.$route.params.id;
    getDetailGroup(this.groupId).then((res) => {
      this.detailGroup = res[0];
    });
  },
};
</script>

<style lang="scss" scoped>
.calendar {
  height: 100vh;
}
</style>
