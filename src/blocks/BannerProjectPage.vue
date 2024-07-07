<template>
  <div class="blog__banner_img center">
    <div class="blog__title banner">
      <h2>Наш проект</h2>
      <div class="blog__title_a">
        <a href="./index.html">Домой /</a>
        <a href="./prodject.html">Проект</a>
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
  align-items: center;
  justify-content: center;
}
.banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 178px;
  border-radius: 37px 37px 0 0;
  width: 504px;
  height: 178px;
  background: #fff;
}

.blog__title h2 {
  margin-top: 41px;
  font-family: 'DM Serif Display', sans-serif;
  font-size: 50px;
  word-wrap: none;
}
.blog__title_a {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 18px;
  line-height: 150%;
  color: #4d5053;
}
</style>
