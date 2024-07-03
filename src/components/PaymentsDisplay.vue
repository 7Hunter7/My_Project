<template>
  <div div class="content">
    Сумма всех платежей: {{ getFV }}
    <div class="content__item" v-for="item in items" :key="item">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentsDisplay",
  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },

  methods: {
    getFV() {
      return this.$store.getters.getFullPayment;
    },
  },
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
}
.content__item {
  width: 500px;
  padding: 8px 16px;
  border: 1px solid #ccc;
}
</style>
