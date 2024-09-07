<template>
  <section class="section__blog">
    <div class="blog__title">
      <h2>Статьи &amp;<br />Новости</h2>
      <p>
        Хорошо известно, что читатель будет отвлекаться <br />
        на читабельный контент страницы
      </p>
    </div>
    <BlogComponent />
  </section>
</template>

<script>
import BlogComponent from '../blocks/BlogComponent.vue'

export default {
  name: 'BlogsComponent',
  components: { BlogComponent }
}
</script>

<style scoped>
.section__blog {
  margin-top: 96px;
}
.blog__title h2 {
  font-family: var(--font-DM);
  font-size: 50px;
  letter-spacing: 0.02em;
}
.blog__title p {
  margin-top: 12px;
  line-height: 150%;
  color: #4d5053;
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
.item__data__button {
  cursor: pointer;
  width: 53px;
  height: 53px;
  border-radius: 100%;
  background-color: #f4f0ec;
  border: 1px solid #f4f0ec;
  transition: all 0.3s;
}
.item__data__button::after {
  content: url('/icon/Vector_small.svg');
}
.item__data__button:hover {
  background-color: #fff;
}
</style>
