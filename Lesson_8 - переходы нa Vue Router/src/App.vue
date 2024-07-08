<template>
  <div>
    <header>
      <nav>
        <router-link to="/dashboard">Dashboard </router-link>
        <router-link to="/about">About </router-link>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  created() {
    this.$router.push({ name: "Dashboard" });
  },
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  gap: 32px;
  padding: 16px;
}
</style>
