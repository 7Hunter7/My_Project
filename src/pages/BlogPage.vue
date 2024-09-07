<template>
  <HeaderComponent />
  <BannerBlogPage />
  <LastPost />
  <ArticleComponent />
  <FooterComponent />
</template>

<script>
import HeaderComponent from '../blocks/HeaderComponent.vue'
import BannerBlogPage from '../blocks/BannerBlogPage.vue'
import LastPost from '../blocks/LastPost.vue'
import ArticleComponent from '../blocks/ArticleComponent.vue'
import FooterComponent from '../blocks/FooterComponent.vue'

export default {
  name: 'BlogPage',
  components: {
    HeaderComponent,
    BannerBlogPage,
    LastPost,
    ArticleComponent,
    FooterComponent
  }
}
</script>
