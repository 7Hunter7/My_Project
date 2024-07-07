<template>
  <div>
    <section class="section__product container">
      <DetailsComponent />
      <TagsComponent />
    </section>
  </div>
</template>

<script>
import DetailsComponent from '../blocks/DetailsComponent.vue'
import TagsComponent from '../components/TagsComponent.vue'

export default {
  name: 'DetailsWithTags',
  components: {
    DetailsComponent,
    TagsComponent
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
