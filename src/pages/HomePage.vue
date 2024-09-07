<template>
  <HeaderComponent />
  <BannerHomePage />
  <ProjectHomePage />
  <CounterComponent />
  <BlogsComponent />
  <FooterComponent />
</template>

<script>
import HeaderComponent from '../blocks/HeaderComponent.vue'
import BannerHomePage from '../blocks/BannerHomePage.vue'
import ProjectHomePage from '../blocks/ProjectHomePage.vue'
import CounterComponent from '../blocks/CounterComponent.vue'
import BlogsComponent from '../blocks/BlogsComponent.vue'
import FooterComponent from '../blocks/FooterComponent.vue'

export default {
  name: 'HomePage',
  components: {
    HeaderComponent,
    BannerHomePage,
    ProjectHomePage,
    CounterComponent,
    BlogsComponent,
    FooterComponent
  }
}
</script>
