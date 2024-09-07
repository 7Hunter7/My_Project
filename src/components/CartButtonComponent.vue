<template>
  <div class="cart__button">
    <RouterLink :to="{ path: 'project_detalies' }">
      <button class="button__next"></button>
    </RouterLink>
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
  content: url('/icon/Vector_carts.svg');
}
button:hover {
  background-color: #fff;
}
</style>
