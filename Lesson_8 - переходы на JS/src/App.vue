<template>
  <div>
    <header>
      <nav @click="clickMenu">
        <a href="#dashboard" class="menu__link">Dashboard</a>
        <a href="#about" class="menu__link">About</a>
        <a href="#notfound" class="menu__link">NotFound</a>
      </nav>
    </header>
    <DashBoard v-if="page === 'dashboard'" />
    <AboutContent v-if="page === 'about'" />
    <NotFound v-if="page === 'notfound'" />
  </div>
</template>

<script>
// import NavigationComponent from "./components/NavigationComponent.vue";
import AboutContent from "./pages/AboutContent.vue";
import DashBoard from "./pages/DashBoard.vue";
import NotFound from "./pages/NotFound.vue";

export default {
  name: "App",
  components: {
    // NavigationComponent,
    AboutContent,
    DashBoard,
    NotFound,
  },
  data() {
    return {
      page: "dashboard",
    };
  },
  methods: {
    setPage() {
      this.page = window.location.hash.slice(1);
      console.log(`page: ${this.page}`);
    },
    clickMenu() {
      this.setPage();
      window.addEventListener("hashchange", function () {
        this.setPage();
      });
    },
  },
  mounted() {
    const links = document.querySelectorAll(".menu__link");
    links.forEach((element) => {
      element.addEventListener("click", function (e) {
        e.preventDefault();
        history.pushState({}, "", element.href);
      });
    });
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
