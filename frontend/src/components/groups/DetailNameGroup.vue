<template>
  <div>
    <h2 style="margin-left:50%;color:#2784ff">Grupo:  {{ this.detailGroup.name }}</h2>
  </div>
</template>

<script>
export default {
  name: "DetailNameGroup",
  props: {
    detailGroup: { type: Object },
  },
};
</script>

<style lang="scss" scoped></style>
