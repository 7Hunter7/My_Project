<template>
  <RouterLink to="/blog_detalies">
    <button class="item__data__button"></button>
  </RouterLink>
</template>

<script>
export default {
  name: 'BlogButtonComponent'
}
</script>

<style scoped>
.item__data__button {
  cursor: pointer;
  width: 53px;
  height: 53px;
  border-radius: 100%;
  background-color: #f4f0ec;
  border: 1px solid #f4f0ec;
  transition: all 0.3s;
}
.item__data__button::after {
  content: url('/icon/Vector_small.svg');
}
.item__data__button:hover {
  background-color: #fff;
}
</style>
