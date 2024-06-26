<template>
  <div class="blog__items container">
    <div class="blog__item" v-for="blog in blogs" :key="blog.id" :blogs="blogs">
      <div class="item__img">
        <img :src="blog.imgUrl" alt="blog.imgAlt" />
        <button class="items__button">{{ blog.button }}</button>
      </div>
      <div class="item__about">
        <h3>{{ blog.title }}</h3>
        <div class="item__data">
          <p>{{ blog.data }}</p>
          <BlogButtonComponent />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogButtonComponent from '../components/BlogButtonComponent.vue'

export default {
  name: 'BlogComponent',
  components: { BlogButtonComponent },
  data() {
    return {
      blogs: [
        {
          id: 1,
          imgUrl: '../assets/home/Blog_1.png',
          imgAlt: 'Blog_1',
          button: 'Дизайн кухни',
          title: 'Создадим лучший макет перепланировки',
          data: '26 Декабрь,2022'
        },
        {
          id: 2,
          imgUrl: '../assets/home/Blog_2.png',
          imgAlt: 'Blog_2',
          button: 'ДДизайн для жизни',
          title: 'Лучшие интерьерные идеи по низкой цене',
          data: '22 Декабрь,2022'
        },
        {
          id: 3,
          imgUrl: '../assets/home/Blog_3.png',
          imgAlt: 'Blog_3',
          button: 'Дизайн Интерьера',
          title: 'Лучшие интерьерные решения для офисов',
          data: '25 Декабрь,2022'
        }
      ]
    }
  }
}
</script>

<style scoped>
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
  font-family: 'DM Serif Display', sans-serif;
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
</style>
