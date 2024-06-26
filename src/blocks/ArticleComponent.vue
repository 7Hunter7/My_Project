<template>
  <section class="section__articles container">
    <h2>Статьи &amp; Новости</h2>
    <div class="blog__items articles">
      <div class="blog__item" v-for="item in blogs" :key="item.id">
        <div class="item__img">
          <img :src="item.imgUrl" :alt="item.imgAlt" />
          <button class="items__button">{{ item.title }}</button>
        </div>
        <div class="item__about">
          <h3>{{ item.description }}</h3>
          <div class="item__data">
            <p>{{ item.data }}</p>
            <button class="item__data__button"></button>
          </div>
        </div>
      </div>
    </div>
    <PaginationComponent />
  </section>
</template>

<script>
import PaginationComponent from '../components/PaginationComponent.vue'

export default {
  name: 'ArticleComponent',
  components: { PaginationComponent },
  data() {
    return {
      blogs: [
        {
          id: 1,
          imgUrl: '../assets/blog/Article_1.png',
          imgAlt: 'Article_1',
          title: 'Дизайн кухни',
          description: 'Создадим лучший макет перепланировки',
          data: '26 Декабрь,2022'
        },
        {
          id: 2,
          imgUrl: '../assets/blog/Article_2.png',
          imgAlt: 'Article_2',
          title: 'Дизайн для жизни',
          description: 'Лучшие интерьерные идеи по низкой цене',
          data: '22 декабрь,2022'
        },
        {
          id: 3,
          imgUrl: '../assets/blog/Article_3.png',
          imgAlt: 'Article_3',
          title: 'Дизайн Интерьера',
          description: 'Лучшие интерьерные решения для офисов',
          data: '25 Декабрь,2022'
        },
        {
          id: 4,
          imgUrl: '../assets/blog/Article_4.png',
          imgAlt: 'Article_4',
          title: 'Дизайн кухни',
          description: 'Создадим лучший макет перепланировки',
          data: '26 Декабрь,2022'
        },
        {
          id: 5,
          imgUrl: '../assets/blog/Article_5.png',
          imgAlt: 'Article_5',
          title: 'Дизайн для жизни',
          description: 'Лучшие интерьерные идеи по низкой цене',
          data: '22 Декабрь,2022'
        },
        {
          id: 6,
          imgUrl: '../assets/blog/Article_6.png',
          imgAlt: 'Article_6',
          title: 'Дизайн интерьера',
          description: 'Лучшие интерьерные решения для офисов',
          data: '25 Декабрь,2022'
        }
      ]
    }
  }
}
</script>

<style scoped>
.section__articles {
  margin-top: 88px;
}
.section__articles h2 {
  font-family: 'DM Serif Display', sans-serif;
  font-size: 50px;
  letter-spacing: 0.02em;
  text-align: left;
}
.articles {
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(2, auto);
}
</style>

<style>
.item__data {
  margin-top: 20px;
}
</style>
