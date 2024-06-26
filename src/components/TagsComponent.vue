<template>
  <section class="section__tags">
    <h4>Тэги</h4>
    <div class="tags__buttons">
      <button v-for="tag in tags" class="tags__button" @click="toggleActiveTag(tag, $event)">
        {{ tag }}
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TagsComponent'
}
</script>

<style scoped>
.section__tags {
  width: 345px;
  margin-left: 52px;
}
.section__tags h4 {
  margin-bottom: 24px;
  font-family: 'DM Serif Display', sans-serif;
  font-size: 25px;
  letter-spacing: 0.02em;
  text-align: left;
}
.tags__button {
  cursor: pointer;
  margin: 0px 10px 11px 0px;
  height: 41px;
  padding: 9px 30px;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  letter-spacing: 0.02em;
  background: #f4f0ec;
  text-align: center;
}
.active {
  color: #fff;
  background: #292f36;
}
</style>
