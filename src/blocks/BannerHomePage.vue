<template>
  <section class="section__banner container">
    <div class="banner__title">
      <h1>Пусть ваш дом будет уникальным</h1>
      <p>Существует много вариаций Lorem Ipsum, которые можно использовать</p>
      <BannerButtonComponent />
    </div>
  </section>
</template>

<script>
import BannerButtonComponent from '../components/BannerButtonComponent.vue'

export default {
  name: 'BannerHomePage',

  components: {
    BannerButtonComponent
  }
}
</script>

<style scoped>
.section__banner {
  background-image: url('/home/Banner_1.png');
  background-repeat: no-repeat;
  background-position: center;
  height: 758px;
  object-fit: cover;
  display: flex;
  align-items: center;
}
.banner__title {
  margin-left: 54px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
}
.banner__title h1 {
  text-align: left;
  width: 615px;
  font-family: var(--font-DM);
  font-size: 65px;
}
.banner__title p {
  margin-top: 18px;
  width: 434px;
  text-align: left;
  line-height: 150%;
  color: #4d5053;
}
</style>
