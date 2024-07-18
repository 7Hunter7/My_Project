<template>
  <section class="section__projects container">
    <!-- Дочерний компонент сообщает
    родителю, что произошло изменение выбранной категории -->
    <CategoriesProject @setCategoryNow="setCategoryNow" />
    <section class="section__project container">
      <!-- Передаем значение выбранной категории из родительского компонента дочернему -->
      <CartsProjectPage :cartList="setCartfromCategory" />
    </section>
    <PaginationComponent />
  </section>
</template>

<script>
import CategoriesProject from '../blocks/CategoriesProject.vue'
import CartsProjectPage from '../blocks/CartsProjectPage.vue'
import PaginationComponent from '@/components/PaginationComponent.vue'
import { mapState } from 'vuex'

export default {
  name: 'ProjectsComponent',
  components: { CategoriesProject, CartsProjectPage, PaginationComponent },
  data() {
    return {
      setCategory: '',
      cartList: []
    }
  },
  methods: {
    //Обрабатываем событие изменения выбранной категории
    setCategoryNow(categoryNow) {
      this.setCategory = categoryNow
      console.log(this.setCategory)
    }
  },
  computed: {
    ...mapState(['cartBedroom', 'cartBathroom', 'cartKitchen', 'cartLounge']),
    setCartfromCategory() {
      let { setCategory, cartList, cartBedroom, cartBathroom, cartKitchen, cartLounge } = this

      switch (setCategory) {
        case 'Bedroom':
          cartList = cartBedroom
          break
        case 'Bathroom':
          cartList = cartBathroom
          break
        case 'Kitchen':
          cartList = cartKitchen
          break
        case 'Lounge':
          cartList = cartLounge
          break
      }
      return cartList
    }
  }
}
</script>

<style scoped>
.section__projects {
  margin-top: 200px;
}
.section__project {
  margin-top: 61px;
  margin-bottom: 61px;
}
</style>
