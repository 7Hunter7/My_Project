<template>
  <div>
    <h1>Крутой счетчик</h1>
    <button @click="upCounter">Значение счетчика равно {{ counter }}</button>
  </div>
</template>

<script>
export default {
  name: "AddCount",
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    upCounter() {
      this.counter++;
    },
  },
  created() {
    this.counter = 1;
  },
};
</script>
