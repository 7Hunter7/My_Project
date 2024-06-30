<template>
  <div>
    <h2>Список пользователей</h2>
    <UserItem
      v-for="user in listUsers"
      :key="user.email"
      :user-data="user"
      @upDateUser="upDateUser"
    />
  </div>
</template>

<script>
import UserItem from "./UserItem.vue";

export default {
  name: "UserList",
  components: { UserItem },

  data() {
    return {
      listUsers: [
        {
          email: "jill.montoya.578@slingacademy.com",
          first_name: "Jill",
          last_name: "Montoya",
          date_of_birth: "1933-11-27",
          job: "Armed forces training and education officer",
          city: "West Isabellastad",
        },
        {
          email: "christine.king.661@slingacademy.com",
          first_name: "Christine",
          last_name: "King",
          date_of_birth: "1954-06-06",
          job: "Physiotherapist",
          city: "Kennedyport",
        },
        {
          email: "kristi.reynolds.741@slingacademy.com",
          first_name: "Kristi",
          last_name: "Reynolds",
          date_of_birth: "2005-05-09",
          job: "Police officer",
          city: "Brownview",
        },
        {
          email: "kelly.young.849@slingacademy.com",
          first_name: "Kelly",
          last_name: "Young",
          date_of_birth: "1974-05-10",
          job: "Copy",
          city: "Meganmouth",
        },
        {
          email: "leroy.hansen.941@slingacademy.com",
          first_name: "Leroy",
          last_name: "Hansen",
          date_of_birth: "1987-06-21",
          job: "Market researcher",
          city: "New Isaactown",
        },
      ],
    };
  },

  mounted() {},

  methods: {
    upDateUser(userData) {
      const user = this.listUsers.find((user) => user === userData.user);
      if (user) {
        user.first_name = userData.name;
        user.last_name = userData.surname;
      } else {
        alert("Пользователь не найден");
      }
    },
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
h2 {
  width: 800px;
  margin: 10px;
  text-align: center;
}
</style>
