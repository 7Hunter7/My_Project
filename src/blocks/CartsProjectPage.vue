<template>
  <div class="project__carts">
    <div class="project__cart" v-for="cart in cartList" :key="cart.id">
      <div class="cart__img" :class="{ liked: cart.isLiked }" @click="toggleLiked($event)">
        <img :src="cart.imgUrl" :alt="cart.imgAlt" />
      </div>
      <div class="cart__about">
        <div class="cart__title">
          <h3>{{ cart.title }}</h3>
          <p>Декор&nbsp;/&nbsp;Планировка</p>
        </div>
        <CartButtonComponent />
      </div>
    </div>
  </div>
</template>

<script>
import CartButtonComponent from '../components/CartButtonComponent.vue'

export default {
  name: 'CartsProjectPage',
  components: { CartButtonComponent },
  // принимаем значения выбранной категории из родительского компонента
  props: {
    cartList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    toggleLiked(event) {
      event.target.parentNode.classList.toggle('liked')
    }
  }
}
</script>

<style scoped>
.project__carts {
  margin-top: 93px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, auto);
  gap: 29px;
}
.cart__img {
  position: relative;
}
.cart__img img {
  max-width: 585px;
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
.liked::before {
  position: absolute;
  content: url('/icon/Star.svg');
  top: 0px;
  right: 0px;
}
</style>
