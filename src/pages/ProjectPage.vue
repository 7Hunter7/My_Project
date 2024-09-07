<template>
  <HeaderComponent />
  <BannerProjectPage />
  <ProjectsComponent />
  <FooterComponent />
</template>

<script>
import HeaderComponent from '../blocks/HeaderComponent.vue'
import BannerProjectPage from '../blocks/BannerProjectPage.vue'
import ProjectsComponent from '../blocks/ProjectsComponent.vue'
import FooterComponent from '../blocks/FooterComponent.vue'

export default {
  name: 'ProjectPage',
  components: {
    HeaderComponent,
    BannerProjectPage,
    ProjectsComponent,
    FooterComponent
  }
}
</script>
