<template>
  <div class="user">
    <h2>{{ userData.name }}</h2>
    <label for="name"
      >Имя:
      <input type="text" id="name" v-model="name" />
    </label>
    <label for="surname"
      >Фамилия:
      <input type="text" id="surname" v-model="surname" />
    </label>
    <p>Почта: {{ userData.email }}</p>
    <button @click="toggleInfo">Show More</button>
    <div class="user__info" v-if="showMore">
      <p>Дата рождения: {{ userData.date_of_birth }}</p>
      <p>Город: {{ userData.city }}</p>
      <p>Профессия: {{ userData.job }}</p>
    </div>
    <button @click="saveData">Сохранить</button>
  </div>
</template>

<script>
export default {
  name: "UserItem",
  props: ["userData"],

  data() {
    return {
      showMore: false,
      name: "",
      surname: "",
    };
  },
  created() {
    this.name = this.userData.first_name;
    this.surname = this.userData.last_name;
  },

  methods: {
    toggleInfo() {
      this.showMore = !this.showMore;
    },
    saveData() {
      const updatedUser = {
        user: this.userData,
        name: this.name,
        surname: this.surname,
      };
      this.$emit("upDateUser", updatedUser);
    },
  },
};
</script>

<style>
.user {
  width: 800px;
  margin: 10px;
  padding: 10px 10px;
  border: 1px solid grey;
  border-radius: 20px;
}
h2 {
  margin-bottom: 10px;
  text-align: center;
}
p {
  margin-bottom: 12px;
}
.user__info {
  margin-top: 10px;
  padding: 10px 10px;
  border: 1px solid grey;
  border-radius: 20px;
}
</style>
