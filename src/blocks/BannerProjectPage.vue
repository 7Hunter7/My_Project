<template>
  <div class="blog__banner_img center">
    <div class="blog__title banner">
      <h2>Наш проект</h2>
      <div class="blog__title_about">
        <p>Домой&nbsp;/&nbsp;</p>
        <p>Проект</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerProjectPage'
}
</script>

<style scoped>
.blog__banner_img {
  margin-top: 45px;
  background-image: url('/project/Banner_4.png');
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 351px;
  object-fit: cover;
  display: flex;
  place-content: center;
}
.banner {
  display: flex;
  flex-direction: column;
  margin-top: 178px;
  border-radius: 37px 37px 0 0;
  width: 504px;
  background: #fff;
}

.blog__title h2 {
  margin-top: 41px;
  font-family: var(--font-DM);
  font-size: 50px;
  word-wrap: none;
}
.blog__title_about {
  margin-top: 18px;
  display: flex;
  flex-direction: row;
  place-content: center;
}
.blog__title_about {
  line-height: 150%;
  color: #4d5053;
}
</style>
