<template>
  <section class="section__project container">
    <div class="project__title">
      <h2>Следите за нашими проектами</h2>
      <p>Хорошо известно, что читатель будет отвлекаться <br />на читабельный контент страницы</p>
    </div>
    <CartsComponent />
  </section>
</template>

<script>
import CartsComponent from '../blocks/CartsComponent.vue'

export default {
  name: 'ProjectHomePage',
  components: { CartsComponent }
}
</script>

<style scoped>
.section__project {
  margin-top: 96px;
}
.project__title h2 {
  font-family: var(--font-DM);
  font-weight: 400;
  font-size: 50px;
  letter-spacing: 0.02em;
}
.project__title p {
  line-height: 150%;
  text-align: center;
  color: #4d5053;
}
.project__carts {
  margin-top: 93px;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);
  gap: 99px;
}
.project__carts h3 {
  font-family: var(--font-DM);
  font-size: 25px;
  letter-spacing: 0.02em;
}
.project__carts p {
  margin-top: 4px;
  line-height: 150%;
  color: #4d5053;
}
.cart__about {
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.cart__about h3 {
  text-align: left;
  font-family: var(--font-DM);
  font-size: 25px;
  letter-spacing: 0.02em;
}
.cart__about p {
  text-align: left;
  line-height: 150%;
  color: #4d5053;
}
.button__next {
  cursor: pointer;
  width: 70px;
  height: 70px;
  border-radius: 100%;
  background-color: #f4f0ec;
  border: 1px solid #f4f0ec;
  transition: all 0.3s;
}
.button__next::after {
  content: url('/icon/Vector_carts.svg');
}
.button__next:hover {
  background-color: #fff;
}
</style>
