<template>
  <div class="cart__button">
    <button class="button__next"></button>
  </div>
</template>

<script>
export default {
  name: 'CartButtonComponent'
}
</script>

<style scoped>
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
  content: url('../assets/icon/Vector_carts.svg');
}
</style>
