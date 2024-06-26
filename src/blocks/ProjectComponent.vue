<template>
  <section class="section__project container">
    <div class="project__title">
      <h2>Следите за нашими проектами</h2>
      <p>Хорошо известно, что читатель будет отвлекаться <br />на читабельный контент страницы</p>
    </div>
    <div class="project__carts container">
      <div class="project__cart">
        <div class="cart__img">
          <img src="./img/Home/Project_1.png" alt="Project_1" />
        </div>
        <div class="cart__about">
          <div class="cart__title">
            <h3>Современная кухня</h3>
            <p>Декор / Планировка</p>
          </div>
          <div class="cart__button">
            <button class="button__next"></button>
          </div>
        </div>
      </div>
      <div class="project__cart">
        <div class="cart__img">
          <img src="./img/Home/Project_2.png" alt="Project_2" />
        </div>
        <div class="cart__about">
          <div class="cart__title">
            <h3>Современная кухня</h3>
            <p>Декор / Планировка</p>
          </div>
          <div class="cart__button">
            <button class="button__next"></button>
          </div>
        </div>
      </div>
      <div class="project__cart">
        <div class="cart__img">
          <img src="./img/Home/Project_3.png" alt="Project_3" />
        </div>
        <div class="cart__about">
          <div class="cart__title">
            <h3>Современная кухня</h3>
            <p>Декор / Планировка</p>
          </div>
          <div class="cart__button">
            <button class="button__next"></button>
          </div>
        </div>
      </div>
      <div class="project__cart">
        <div class="cart__img">
          <img src="./img/Home/Project_4.png" alt="Project_4" />
        </div>
        <div class="cart__about">
          <div class="cart__title">
            <h3>Современная кухня</h3>
            <p>Декор / Планировка</p>
          </div>
          <div class="cart__button">
            <button class="button__next"></button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectComponent'
}
</script>

<style scoped>
.section__project {
  margin-top: 96px;
}
.project__title h2 {
  font-family: 'DM Serif Display', sans-serif;
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
  font-family: 'DM Serif Display', sans-serif;
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
  font-family: 'DM Serif Display', sans-serif;
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
  content: url(./img/All/Vector_carts.svg);
}
.button__next:hover {
  background-color: #fff;
}
</style>
