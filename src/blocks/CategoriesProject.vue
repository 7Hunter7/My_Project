<template>
  <section class="categories container">
    <div class="category" v-for="item in categoryList" :key="item.id">
      <button class="category__button" @click="toggleCategories(item.category, $event)">
        {{ item.categoryName }}
      </button>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CategoriesProject',
  data() {
    return {
      setCategory: ''
    }
  },
  created() {
    this.setCategory = 'Bedroom'
    const categoryNow = this.setCategory
    this.$emit('setCategoryNow', categoryNow)
  },
  mounted() {
    const allCategories = document.querySelectorAll('.category__button')
    allCategories.forEach(function (elem) {
      if (elem.textContent === 'Спальня') {
        elem.classList.add('active')
      }
    })
  },
  computed: { ...mapState(['categoryList']) },
  methods: {
    toggleCategories(category, event) {
      this.setCategory = category
      const allCategories = document.querySelectorAll('.category__button')
      allCategories.forEach(function (elem) {
        elem.classList.remove('active')
      })
      event.target.classList.toggle('active')

      //Cоздаем событие изменения выбранной категории
      const categoryNow = this.setCategory
      this.$emit('setCategoryNow', categoryNow)
    }
  }
}
</script>

<style scoped>
.categories {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  border: 1px solid #cda274;
  border-radius: 18px;
  width: 830px;
  height: 75px;
}
.category {
  display: flex;
  place-content: center;
}
.category__button {
  border-radius: 18px;
  padding: 25px;
  width: 207px;
  height: 72px;
  background-color: #fff;
  border: none;
  transition: all 0.3s;
}
.category p {
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 0.02em;
}
.active {
  background-color: #cda274;
  color: #fff;
}
</style>
