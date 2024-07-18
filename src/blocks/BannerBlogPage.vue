<template>
  <div class="blog__banner_img center">
    <div class="blog__title banner">
      <h2>Статьи &amp;<br />Новости</h2>
      <div class="blog__title_about">
        <p>Домой<span> / </span></p>
        <p>Блог</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerBlogPage'
}
</script>

<style scoped>
.blog__banner_img {
  margin-top: 45px;
  background-image: url('/blog/Banner_2.png');
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
  padding: 41px 78px;
  width: 503px;
  height: 274px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background: #fff;
}
.blog__title {
  width: 615px;
}
.blog__title h2 {
  font-family: 'DM Serif Display', sans-serif;
  font-size: 50px;
  text-align: left;
}
.blog__title_about {
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.blog__title_about p {
  width: 434px;
  line-height: 150%;
  color: #4d5053;
}
</style>
