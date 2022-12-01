<template>
  <div>
    <DetailNameGroup :detailGroup="this.detailGroup" />
    <DetailGroup :users="this.detailGroup.users" />
  </div>
</template>

<script>
import DetailGroup from "@/components/groups/DetailGroup.vue";
import DetailNameGroup from "@/components/groups/DetailNameGroup.vue";
import { getDetailGroup } from "../../../services/group/group";

export default {
  name: "GroupView",
  components: { DetailGroup, DetailNameGroup },
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

<style lang="scss" scoped></style>
