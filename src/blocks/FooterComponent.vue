<template>
  <footer class="footer container">
    <div class="footer__left">
      <RouterLink to="/" class="footer__top">
        <div class="footer__logo">
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="#CDA274"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
            />
          </svg>
        </div>
        <div class="footer__title">
          <h2>Interno</h2>
        </div>
      </RouterLink>
      <div class="footer__icon">
        <a href="#">
          <img src="/icon/Twitter_icon.svg" alt="Twitter" />
        </a>
        <a href="#">
          <img src="/icon/Instagram_icon.svg" alt="Instagram" />
        </a>
      </div>
    </div>
    <div class="footer__center">
      <h3>Страницы</h3>
      <nav class="footer__navigation">
        <RouterLink to="/">Домой</RouterLink>
        <RouterLink to="/project">Проект</RouterLink>
        <RouterLink to="/blog">Блог</RouterLink>
      </nav>
    </div>
    <div class="footer__right">
      <div class="footer__contacts">
        <h3>Контакты</h3>
        <p>55 East Birchwood Ave. Brooklyn, New York 11201</p>
        <p class="footer_between">contact@interno.com</p>
        <p class="footer_between">(123) 456 - 7890</p>
      </div>
    </div>
  </footer>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
.footer {
  margin-top: 33px;
  margin-bottom: 80px;
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(1, auto);
  justify-content: space-between;
}
.footer__top {
  display: flex;
  align-items: center;
  justify-content: left;
  flex-direction: row;
}
.footer__title h2 {
  margin-left: 10px;
  font-family: var(--font-DM);
  font-size: 40px;
}
.footer__icon {
  margin-top: 31px;
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 54px;
}
.footer__center {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
}
.footer h3 {
  font-family: var(--font-DM);
  font-size: 25px;
  text-align: left;
}
.footer__navigation {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
}
.footer__navigation a {
  line-height: 300%;
  color: #4d5053;
}
.footer__right {
  width: 258px;
  display: flex;
  justify-content: flex-end;
}
.footer__contacts {
  width: 258px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-between;
  align-items: flex-start;
}
.footer__contacts p {
  margin-top: 26px;
  text-align: left;
  line-height: 150%;
  color: #4d5053;
}
.footer_between {
  line-height: 300%;
}
</style>
