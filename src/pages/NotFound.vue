<template>
  <HeaderComponent />
  <section class="error__section">
    <div class="error__info">
      <h1>404</h1>
      <p>Приносим извинения, но страница, которую вы искали, не найдена</p>
      <ButtonToHome />
    </div>
    <div class="error__img">
      <img src="/error_404.png" alt="404" />
    </div>
  </section>
</template>

<script>
import HeaderComponent from '../blocks/HeaderComponent.vue'
import ButtonToHome from '../components/ButtonToHome.vue'

export default {
  name: 'NotFound',
  components: {
    HeaderComponent,
    ButtonToHome
  }
}
</script>

<style scoped>
.error__section {
  margin-top: 45px;
  display: flex;
  flex-direction: row;
  gap: 75px;
}
.error__info {
  padding-left: calc(50% - 600px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
}
.error__info h1 {
  font-family: var(--font-DM);
  font-weight: 400;
  font-size: 250px;
  text-align: left;
  color: #cda274;
  line-height: 140px;
}
.error__info p {
  margin-top: 15px;
  font-family: var(--font-DM);
  font-weight: 400;
  font-size: 35px;
  line-height: 150%;
  text-align: left;
}
.error__img img {
  max-width: 913px;
  max-height: 1042px;
}
</style>
