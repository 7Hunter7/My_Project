<template>
  <div>
    <section class="last__post container">
      <div class="post__title">
        <h2>Последний пост</h2>
      </div>
      <div class="post__about">
        <div class="post__about_img">
          <img src="/blog/Post.png" alt="Post" />
        </div>
        <div class="post__about_text">
          <h3>Low Cost Latest Invented Interior Designing Ideas</h3>
          <p>
            С того времени этот, похожий на латинский, текст стал стандартом в печатной
            промышленности для примеров шрифтов и текстов. Перед появлением электронных издательств
            дизайнеры импровизировали в работе над макетами, изображая текст при помощи волнистых
            линий. С появлением самоклеющихся наклеек с напечатанным текстом «Lorem ipsum» появился
            более реалистичный способ обозначения расположения текста на странице.
          </p>
          <div class="post__about_data">
            <div>
              <p>26 December, 2022</p>
            </div>
            <BlogButtonComponent />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BlogButtonComponent from '../components/BlogButtonComponent.vue'

export default {
  name: 'LastPost',
  components: { BlogButtonComponent },
  data() {
    return {}
  }
}
</script>

<style scoped>
.last__post {
  margin-top: 104px;
}
.post__title h2 {
  font-family: var(--font-DM);
  font-size: 50px;
  letter-spacing: 0.02em;
  text-align: left;
}
.post__about {
  display: flex;
  flex-direction: row;
  place-content: center;
  gap: 65px;
  margin-top: 27px;
  border: 1px solid #e7e7e7;
  border-radius: 62px;
  padding: 22px;
  width: 1201px;
  height: 584px;
  box-shadow: 0 10px 30px 0 rgba(255, 255, 255, 0.25);
}
.post__about_img {
  margin: 31px 0px 31px 22px;
  width: 569px;
}
.post__about_text {
  margin: 22px 76px 22px 0px;
  width: 489px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.post__about_text h3 {
  font-family: var(--font-DM);
  font-size: 25px;
  letter-spacing: 0.02em;
  text-align: left;
}
.post__about_text p {
  width: 469px;
  margin-top: 22px;
  line-height: 150%;
  text-align: left;
  color: #4d5053;
}
.post__about_data {
  margin-top: 41px;
  display: flex;
  place-content: center space-between;
}
.post__about_data p {
  margin: 10px 0px;
  width: 233px;
  height: 33px;
  font-size: 16px;
  line-height: 150%;
  text-transform: capitalize;
  text-align: left;
  color: #4d5053;
}
</style>
