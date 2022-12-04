<template>
  <div>
    <h2>Name:{{ this.detailGroup.name }}</h2>
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
