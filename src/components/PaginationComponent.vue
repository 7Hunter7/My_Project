<template>
  <div class="blog__pagination">
    <div class="pagination__tab active" @click="toggleTab($event)">01</div>
    <div class="pagination__tab" @click="toggleTab($event)">02</div>
    <div class="pagination__tab" @click="toggleTab($event)">03</div>
    <div class="pagination__tab end_tab" @click="toggleTab($event)"></div>
  </div>
</template>

<script>
export default {
  name: 'PaginationComponent',
  data() {
    return {}
  },
  methods: {
    toggleTab(event) {
      const allTabs = document.querySelectorAll('.pagination__tab')
      allTabs.forEach(function (elem) {
        elem.classList.remove('active')
      })
      event.target.classList.add('active')

      const setTabValue = event.target.textContent
      console.log(setTabValue)
      this.$emit('setTabNow', setTabValue)
    }
  }
}
</script>

<style scoped>
.blog__pagination {
  margin-top: 51px;
  display: flex;
  flex-direction: row;
  place-content: center;
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
  font-family: var(--font-Jost);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  text-transform: capitalize;
  color: #292f36;
}
.active {
  background-color: #f4f0ec;
  border: none;
}
.end_tab::after {
  content: url('/icon/Vector_small.svg');
}
</style>
