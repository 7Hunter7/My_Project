<template>
  <HeaderComponent />
  <BannerComponent />
  <CartsComponent />
  <CounterComponent />
  <BlogsComponent />
  <FooterComponent />
</template>

<script>
import HeaderComponent from '../blocks/HeaderComponent.vue'
import BannerComponent from '../blocks/BannerComponent.vue'
import CartsComponent from '../blocks/CartsComponent.vue'
import CounterComponent from '../blocks/CounterComponent.vue'
import BlogsComponent from '../blocks/BlogsComponent.vue'
import FooterComponent from '../blocks/FooterComponent.vue'

export default {
  name: 'HomeComponent',
  components: {
    HeaderComponent,
    BannerComponent,
    CartsComponent,
    CounterComponent,
    BlogsComponent,
    FooterComponent
  }
}
</script>

<style scoped></style>
