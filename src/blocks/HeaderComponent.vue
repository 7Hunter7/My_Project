<template>
  <header class="header center">
    <RouterLink to="/" class="header__left">
      <div class="header__logo">
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
      <div class="header__title">
        <h2>Interno</h2>
      </div>
    </RouterLink>
    <div class="header__right">
      <nav class="header__navigation">
        <RouterLink to="/">Домой</RouterLink>
        <RouterLink to="/project">Проект</RouterLink>
        <RouterLink to="/blog">Блог</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'HeaderComponent'
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 44px;
  margin-bottom: 57px;
}
.header__title h2 {
  font-family: var(--font-DM);
  font-size: 40px;
}
.header__left {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
}
.header__right {
  display: flex;
  align-items: center;
}
.header__navigation {
  display: flex;
  justify-content: space-between;
  width: 258px;
  margin: 12px 0px;
  font-weight: 400;
  font-size: 20px;
}
.header__navigation a {
  font-size: 20px;
}
</style>
