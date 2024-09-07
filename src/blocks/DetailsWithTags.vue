<template>
  <div>
    <section class="section__product container">
      <!-- Передаем значение отфильтрованного по тегу блога-->
      <DetailsComponent :activeBlog="activeBlog" />
      <!-- Принимаем значения выбранного тега -->
      <TagsComponent @setTagNow="setTagNow" />
    </section>
  </div>
</template>

<script>
import DetailsComponent from '../blocks/DetailsComponent.vue'
import TagsComponent from '../components/TagsComponent.vue'
import { mapState } from 'vuex'

export default {
  name: 'DetailsWithTags',

  data() {
    return {
      setTag: 'Кухня'
    }
  },
  components: {
    DetailsComponent,
    TagsComponent
  },
  methods: {
    setTagNow(setTagNow) {
      this.setTag = setTagNow
    }
  },
  computed: {
    ...mapState(['blogListDetalies']),
    activeBlog() {
      return this.blogListDetalies.filter((blog) => blog.tag === this.setTag)
    }
  }
}
</script>

<style scoped>
.section__product {
  margin-top: 200px;
  margin-bottom: 63px;
  display: flex;
  flex-direction: row;
}
</style>
