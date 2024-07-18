<template>
  <div>
    <BannerProjectDetalies />
    <PostProjectDetalies />
    <ProjectSlider />
  </div>
</template>

<script>
import BannerProjectDetalies from '../blocks/BannerProjectDetalies.vue'
import PostProjectDetalies from '../blocks/PostProjectDetalies.vue'
import ProjectSlider from '../blocks/ProjectSlider.vue'

export default {
  name: 'ProjectDetailsPage',
  components: { BannerProjectDetalies, PostProjectDetalies, ProjectSlider },
  data() {
    return {}
  },

  mounted() {},

  methods: {}
}
</script>
