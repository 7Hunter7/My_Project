<template>
  <section class="categories container">
    <div class="category" v-for="item in categories" :key="item.id">
      <button class="category__button" @click="toggleCategories(item.category, $event)">
        {{ item.categoryName }}
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CategoriesProject',
  data() {
    return {
      setCategory: '',
      categories: [
        { id: 1, category: 'Bathroom', categoryName: 'Ванная комната' },
        { id: 2, category: 'Bedroom', categoryName: 'Спальня' },
        { id: 3, category: 'Kitchen', categoryName: 'Кухня' },
        { id: 4, category: 'Lounge', categoryName: 'Гостиная' }
      ]
    }
  },
  created() {
    this.setCategory = 'Bedroom'
    console.log(this.setCategory)
    const categoryNow = this.setCategory
    console.log(categoryNow)
    this.$emit('setCategoryNow', categoryNow)
  },
  methods: {
    toggleCategories(category, event) {
      this.setCategory = category
      event.target.classList.toggle('active')
      setTimeout(() => {
        event.target.classList.remove('active')
      }, 1000)

      //Cоздаем событие изменения выбранной категории
      const categoryNow = this.setCategory
      console.log(categoryNow)
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
  width: 880px;
  height: 75px;
}
.category {
  display: flex;
  align-items: center;
  justify-content: center;
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
