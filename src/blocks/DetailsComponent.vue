<template>
  <section class="section__blogs container__small">
    <div class="blogs" v-for="blog in activeBlog" :key="blog.id">
      <div class="blogs__title">
        <h2>{{ blog.title[0] }}</h2>
        <div class="blogs__img">
          <img :src="blog.imgUrl[0]" :alt="blog.imgAlt[0]" />
        </div>
      </div>
      <div class="blogs__about">
        <div class="blogs__about_data">
          <div>
            <p>{{ blog.data }}</p>
          </div>
          <div>
            <a href="#">Интерьер</a> / <a href="./index.html">Домой</a> /
            <a href="#">Декор</a>
          </div>
        </div>
        <div class="blogs__about_text">
          <p>{{ blog.details[0] }}</p>
        </div>
      </div>
      <CitationComponent :citation="blog.citation" />
      <div class="blogs container__small">
        <div class="blogs__title">
          <h2>{{ blog.title[1] }}</h2>
          <div class="blogs__about_text">
            <p>{{ blog.details[1] }}</p>
          </div>
        </div>
        <div class="blogs__about_list">
          <ol>
            <li v-for="(item, index) in blog.list" :key="index">
              {{ item }}
            </li>
          </ol>
        </div>
        <div class="blogs__img">
          <img :src="blog.imgUrl[1]" :alt="blog.imgAlt[1]" />
        </div>
        <div class="blogs__about_text">
          <p>{{ blog.details[2] }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CitationComponent from '../components/CitationComponent.vue'
import { mapState } from 'vuex'

export default {
  name: 'DetailsComponent',
  props: ['citation'],
  data() {
    return {
      setTag: 'Кухня'
    }
  },
  methods: {
    toggleActiveTag(tag, event) {
      this.setTag = tag
      event.target.classList.toggle('active')
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
.blogs {
  margin-bottom: 46px;
}
.blogs__img {
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: contain;
  overflow: hidden;
  max-height: 539px;
  border-radius: 50px;
}
.blogs__title h2 {
  font-family: 'DM Serif Display', sans-serif;
  font-size: 50px;
  letter-spacing: 0.02em;
  text-align: left;
  white-space: wrap;
  margin-bottom: 21px;
}
.blogs__about {
  margin-top: 46px;
}
.blogs__about_data {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.blogs__about p {
  margin-left: 0px;
}
.blogs__about p a {
  font-size: 16px;
  line-height: 150%;
  text-transform: capitalize;
  color: #4d5053;
}
.blogs__about_text {
  margin-top: 48px;
}
.blogs__about_text p {
  line-height: 150%;
  color: #4d5053;
  text-align: left;
}
.blogs__about_list {
  margin-top: 24px;
}
.blogs__about_list li::marker {
  font-family: 'DM Serif Display', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 125%;
  letter-spacing: 0.02em;
  color: #cda274;
}
.blogs__about_list li {
  margin: 32px 25px;
  text-align: left;
  line-height: 150%;
  color: #4d5053;
}
</style>
