<!-- Задание 1 (тайминг 20 минут)
Создайте компонент "Аутентификация" (Authentication), который
будет отображать форму входа или сообщение об успешной
аутентификации в зависимости от переданного пропса
isAuthenticated. Используйте директиву v-if для условного
отображения разных элементов в шаблоне компонента. -->

<template>
  <div class="form" v-if="!isAuthenticated">
    <h2>Аутентификация</h2>
    <form action="#">
      <label for="login">Login</label>
      <input
        type="text"
        id="login"
        placeholder="Логин"
        v-model="userLogin"
      /><br />
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        placeholder="Пароль"
        v-model="userPass"
      />
      <button type="button" @click="formCheck">Войти</button>
    </form>
  </div>
  <h2 v-else>Аутентификация прошла усешна!</h2>
</template>

<script>
export default {
  name: "AuthenticationComponent",
  data() {
    return {
      isAuthenticated: false,
      userLogin: "",
      userPass: "",
    };
  },
  methods: {
    formCheck() {
      if (this.userLogin && this.userPass) {
        this.isAuthenticated = true;
      }
    },
  },
};
</script>

<style>
.form {
  margin: 20px;
}
</style>
