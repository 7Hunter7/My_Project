<template>
  <HeaderComponent />
  <BannerProjectDetalies />
  <PostProjectDetalies />
  <ProjectSlider />
  <FooterComponent />
</template>

<script>
import HeaderComponent from '../blocks/HeaderComponent.vue'
import BannerProjectDetalies from '../blocks/BannerProjectDetalies.vue'
import PostProjectDetalies from '../blocks/PostProjectDetalies.vue'
import ProjectSlider from '../blocks/ProjectSlider.vue'
import FooterComponent from '../blocks/FooterComponent.vue'

export default {
  name: 'ProjectDetailsPage',
  components: {
    HeaderComponent,
    BannerProjectDetalies,
    PostProjectDetalies,
    ProjectSlider,
    FooterComponent
  }
}
</script>
