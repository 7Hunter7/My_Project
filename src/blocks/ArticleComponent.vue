<template>
  <section class="section__articles container">
    <h2>Статьи &amp; Новости</h2>
    <div class="blog__items articles">
      <div class="blog__item" v-for="item in articleList" :key="item.id">
        <div class="item__img">
          <img :src="item.imgUrl" :alt="item.imgAlt" />
          <button class="items__button">{{ item.title }}</button>
        </div>
        <div class="item__about">
          <h3>{{ item.description }}</h3>
          <div class="item__data">
            <p>{{ item.data }}</p>
            <BlogButtonComponent />
          </div>
        </div>
      </div>
    </div>
    <PaginationComponent />
  </section>
</template>

<script>
import PaginationComponent from '../components/PaginationComponent.vue'
import BlogButtonComponent from '../components/BlogButtonComponent.vue'
import { mapState } from 'vuex'

export default {
  name: 'ArticleComponent',
  components: { PaginationComponent, BlogButtonComponent },
  computed: { ...mapState(['articleList']) }
}
</script>

<style scoped>
.section__articles {
  margin-top: 88px;
}
.section__articles h2 {
  font-family: var(--font-DM);
  font-size: 50px;
  letter-spacing: 0.02em;
  text-align: left;
}
.articles {
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(2, auto);
}

.blog__items {
  margin-top: 52px;
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 27px;
}
.blog__item {
  border: 1px solid #e7e7e7;
  border-radius: 62px;
  padding: 21px;
  width: 382px;
  height: 521px;
  background-color: #fff;
}
.blog__item:hover {
  box-shadow: 0 10px 30px 0 rgba(255, 255, 255, 0.25);
  background: #f4f0ec;
}
.blog__item:hover .button__next {
  background-color: #fff;
}
.item__img {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
}
.items__button {
  display: flex;
  position: absolute;
  align-items: center;
  margin-left: 12px;
  margin-bottom: 22px;
  padding-left: 11px;
  border-radius: 8px 8px 8px 0;
  border: none;
  width: 124px;
  height: 41px;
  background: #fff;
  font-size: 16px;
  line-height: 150%;
  text-transform: capitalize;
  text-align: left;
  color: #4d5053;
}
.item__about {
  margin-top: 21px;
}
.item__about h3 {
  font-family: var(--font-DM);
  font-size: 25px;
  letter-spacing: 0.02em;
  text-align: left;
}
.item__data {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item__data p {
  font-size: 16px;
  line-height: 150%;
  text-transform: capitalize;
  color: #4d5053;
}
.item__data {
  margin-top: 20px;
}
</style>
