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
import { mapState } from 'vuex'

export default {
  name: 'TagsComponent',

  data() {
    return {
      setTag: 'Кухня'
    }
  },
  mounted() {
    const allTags = document.querySelectorAll('.tags__button')
    allTags.forEach(function (elem) {
      if (elem.textContent === 'Кухня') {
        elem.classList.add('active')
      }
    })
  },
  methods: {
    toggleActiveTag(tag, event) {
      this.setTag = tag
      const allTags = document.querySelectorAll('.tags__button')
      allTags.forEach(function (elem) {
        elem.classList.remove('active')
      })
      event.target.classList.add('active')

      //Cоздаем событие изменения выбранного тега
      const setTagNow = this.setTag
      this.$emit('setTagNow', setTagNow)
    }
  },
  computed: { ...mapState(['tags']) }
}
</script>

<style scoped>
.section__tags {
  width: 345px;
  margin-left: 52px;
}
.section__tags h4 {
  margin-bottom: 24px;
  font-family: var(--font-DM);
  font-size: 25px;
  letter-spacing: 0.02em;
  text-align: left;
}
.tags__buttons {
  width: 345px;
  display: flex;
  flex-wrap: wrap;
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
  transition: all 0.3s;
}
.active {
  color: #fff;
  background: #292f36;
}
</style>
