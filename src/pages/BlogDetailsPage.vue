<template>
  <HeaderComponent />
  <BannerBlogDetalies />
  <DetailsWithTags />
  <FooterComponent />
</template>

<script>
import HeaderComponent from '../blocks/HeaderComponent.vue'
import BannerBlogDetalies from '../blocks/BannerBlogDetalies.vue'
import DetailsWithTags from '../blocks/DetailsWithTags.vue'
import FooterComponent from '../blocks/FooterComponent.vue'

export default {
  name: 'BlogDetailsPage',
  components: {
    HeaderComponent,
    BannerBlogDetalies,
    DetailsWithTags,
    FooterComponent
  }
}
</script>
