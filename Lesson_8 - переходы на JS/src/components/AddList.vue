<template>
  <div class="inputs">
    <input
      class="input"
      type="text"
      v-model="category"
      placeholder="category"
    />
    <input class="input" type="text" v-model="value" placeholder="value" />
    <input class="input" type="text" v-model="date" placeholder="date" />
    <button class="button" @click="onSave">Save</button>
  </div>
</template>

<script>
export default {
  name: "AddList",

  data() {
    return {
      category: "",
      value: "",
      date: "",
    };
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
  },
  methods: {
    onSave() {
      const data = {
        category: this.category,
        value: this.value,
        date: this.date || this.getCurrentDate,
      };
      this.$emit("addNawPAy", data);
    },
  },
};
</script>
<style scoped>
.inputs {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.input {
  margin: 5px;
}
.button {
  margin: 10px;
}
</style>
