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
        <div class="blogs__about_description">
          <div>
            <p>{{ blog.data }}</p>
          </div>
          <div class="blogs__about_data">
            <p>Интерьер&nbsp;/&nbsp;Домой&nbsp;/&nbsp;Декор</p>
          </div>
        </div>
        <div class="blogs__about_text">
          <p>{{ blog.details[0] }}</p>
        </div>
      </div>
      <article class="article__citation container__small">
        <div>
          <img src="/icon/Citation.svg" alt="Citation" />
        </div>
        <div>
          <h3>{{ blog.citation }}</h3>
        </div>
      </article>
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
export default {
  name: 'DetailsComponent',
  // Принимаем значения выбранного тега из родительского компонента
  props: {
    activeBlog: {
      type: Array,
      default: () => {
        return []
      }
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
  place-content: center;
  object-fit: contain;
  overflow: hidden;
  max-height: 539px;
  max-width: 800px;
  border-radius: 50px;
}
.blogs__title h2 {
  font-family: var(--font-DM);
  font-size: 50px;
  letter-spacing: 0.02em;
  text-align: left;
  white-space: wrap;
  margin-bottom: 21px;
}
.blogs__about {
  margin-top: 46px;
}
.blogs__about_description {
  margin-left: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.blogs__about_data {
  margin-right: 40px;
}
.blogs__about_description p {
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
  font-family: var(--font-DM);
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
.article__citation {
  margin-top: 35px;
  margin-bottom: 27px;
  border-radius: 50px;
  padding: 53px 53px;
  width: 799px;
  height: 267px;
  background: #f4f0ec;
  display: flex;
  flex-direction: column;
  place-items: center;
}
.article__citation h3 {
  margin-top: 16px;
  font-family: var(--font-DM);
  font-style: italic;
  font-size: 25px;
  letter-spacing: 0.02em;
  color: #cda274;
}
</style>
