<template>
  <div class="project__carts container">
    <div class="project__cart" v-for="cart in carts" :key="cart.id" :carts="carts">
      <div class="cart__img">
        <img :src="cart.imgUrl" :alt="cart.imgAlt" />
      </div>
      <div class="cart__about">
        <div class="cart__title">
          <h3>{{ cart.title }}</h3>
          <p>{{ cart.text }}</p>
        </div>
        <CartButtonComponent />
      </div>
    </div>
  </div>
</template>

<script>
import CartButtonComponent from '../components/CartButtonComponent.vue'

export default {
  name: 'CartsComponent',
  components: { CartButtonComponent },
  date() {
    return {
      carts: [
        {
          id: 1,
          imgUrl: '../assets/home/Project_1.png',
          imgAlt: 'Project_1',
          title: 'Современная кухня',
          text: 'Декор / Планировка'
        },
        {
          id: 2,
          imgUrl: '../assets/home/Project_2.png',
          imgAlt: 'Project_2',
          title: 'Современная кухня',
          text: 'Декор / Планировка'
        },
        {
          id: 3,
          imgUrl: '../assets/home/Project_3.png',
          imgAlt: 'Project_3',
          title: 'Современная кухня',
          text: 'Декор / Планировка'
        },
        {
          id: 4,
          imgUrl: '../assets/home/Project_4.png',
          imgAlt: 'Project_4',
          title: 'Современная кухня',
          text: 'Декор / Планировка'
        }
      ]
    }
  }
}
</script>

<style scoped>
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
</style>
