<template>
  <div class="blog__pagination">
    <div class="pagination__tab active_tab">01</div>
    <div class="pagination__tab">02</div>
    <div class="pagination__tab">03</div>
    <div class="pagination__tab end_tab"></div>
  </div>
</template>

<script>
export default {
  name: 'PaginationComponent'
}
</script>

<style scoped>
.blog__pagination {
  margin-top: 51px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 200px;
}
.pagination__tab {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 53px;
  height: 53px;
  border-radius: 100%;
  background-color: #fff;
  border: 1px solid #cda274;
  font-family: 'Jost', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  text-transform: capitalize;
  color: #292f36;
}
.active_tab {
  background-color: #f4f0ec;
  border: none;
}
.end_tab::after {
  content: url('../assets/icon/Vector_small.svg');
}
</style>
