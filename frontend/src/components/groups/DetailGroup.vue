<template>
  <div>
    <h1>aqui estaremos viendo toda la informacion de los grupos</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped></style>
