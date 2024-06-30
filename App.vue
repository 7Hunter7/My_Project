<template>
  <PaymentsDisplay :items="paymentList" />
  <AddList @addNawPAy="addNawPAy" />
</template>

<script>
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
import AddList from "./components/AddList.vue";

export default {
  name: "App",
  components: {
    PaymentsDisplay,
    AddList,
  },
  data() {
    return {
      paymentList: [],
    };
  },

  methods: {
    fetchData() {
      return [
        {
          date: "28/03/2023",
          category: "Food",
          value: 169,
        },
        {
          date: "24/03/2023",
          category: "Transport",
          value: 360,
        },
        {
          date: "21/03/2023",
          category: "Cofe",
          value: 99,
        },
      ];
    },
    addNawPAy(data) {
      this.paymentList.push(data);
    },
  },
  created() {
    this.paymentList = this.fetchData();
  },
};
</script>

<style scoped></style>
