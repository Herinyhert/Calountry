<template>
  <div>
    <div class="d-flex">
      <GroupCalendar :group="this.detailGroup" class="calendar"></GroupCalendar>
    </div>
  </div>
</template>

<script>
import GroupCalendar from "@/components/groups/GroupCalendar.vue";
import { getDetailGroup } from "../../../services/group/group";

export default {
  name: "GroupView",
  components: { GroupCalendar },
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
