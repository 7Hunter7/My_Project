<template>
  <section class="section__projects container">
    <!-- Дочерний компонент сообщает
    родителю, что произошло изменение выбранной категории -->
    <CategoriesProject @setCategoryNow="setCategoryNow" />
    <section class="section__project container">
      <!-- Передаем значение выбранной категории из родительского компонента дочернему -->
      <CartsProjectPage :cartList="setCartFromCategory" />
    </section>
    <PaginationComponent @setTabNow="setTabNow" />
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
      setTab: '01',
      cartList: []
    }
  },
  methods: {
    //Обрабатываем событие изменения выбранной категории
    setCategoryNow(categoryNow) {
      this.setCategory = categoryNow
    },
    setTabNow(setTabNow) {
      this.setTab = setTabNow
    }
  },
  computed: {
    ...mapState(['cartBedroom', 'cartBathroom', 'cartKitchen', 'cartLounge']),

    setCartFromCategory() {
      let { setTab, setCategory, cartList, cartBedroom, cartBathroom, cartKitchen, cartLounge } =
        this
      if (setCategory === 'Bedroom' && setTab === '01') {
        cartList = cartBedroom
      } else if (setCategory === 'Bathroom' || setTab === '02') {
        cartList = cartBathroom
      } else if (setCategory === 'Kitchen' || setTab === '03') {
        cartList = cartKitchen
      } else if (setCategory === 'Lounge' || setTab === '') {
        cartList = cartLounge
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
