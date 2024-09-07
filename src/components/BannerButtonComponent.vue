<template>
  <RouterLink :to="{ path: 'project' }">
    <button class="banner__btn-start">Начать</button>
  </RouterLink>
</template>

<script>
export default {
  name: 'BannerButtonComponent'
}
</script>

<style scoped>
.banner__btn-start {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  border-radius: 18px;
  padding: 26px 49px 26px 48px;
  width: 182px;
  height: 75px;
  box-shadow: 0 10px 20px 0 rgba(192, 192, 192, 0.35);
  background: #292f36;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 0.02em;
  color: #fff;
  cursor: pointer;
}
.banner__btn-start::after {
  content: url('/icon/Next.svg');
  margin-top: 10px;
}
</style>
