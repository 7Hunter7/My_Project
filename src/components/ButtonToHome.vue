<template>
  <RouterLink :to="{ path: '/' }">
    <button class="btn__home">Домой</button>
  </RouterLink>
</template>

<script>
export default {
  name: 'ButtonToHome'
}
</script>

<style scoped>
.btn__home {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-top: 23px;
  border-radius: 18px;
  padding: 26px 54px;
  width: 192px;
  height: 75px;
  box-shadow: 0 10px 20px 0 rgba(192, 192, 192, 0.35);
  background: #292f36;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 0.02em;
  color: #fff;
  cursor: pointer;
}
.btn__home::after {
  content: url('/icon/Next.svg');
}
</style>
