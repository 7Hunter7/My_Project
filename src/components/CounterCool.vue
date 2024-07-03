<template>
  <div>
    <h1>Крутой счетчик</h1>
    <p>Значение счетчика: {{ counter }}</p>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "CounterCool",
  data() {
    return {};
  },
  computed: {
    ...mapState(["counter"]),
    counter() {
      return this.$state;
    },
  },
  mounted() {
    console.log(this.$store);
  },
  methods: {
    ...mapMutations(["INCREMENT", "DECREMENT"]),
    increment() {
      this.INCREMENT();
      // this.$store.commit(["INCREMENT"]);
    },
    decrement() {
      this.DECREMENT();
      // this.$store.commit(["DECREMENT"]);
    },
  },
};
</script>
<!-- Задание 1 (тайминг 30 минут)
1. Создание базового хранилища: Создайте новое Vuex-
хранилище, определите в нем состояние (state) и несколько
базовых мутаций (mutations). Подключите хранилище к вашему
приложению Vue.js и используйте его для управления
состоянием приложения.
2. Создайте счетчик, который хранит состояние count
3. Создайте две мутации, которые увеличивают и уменьшают
значение счетчика
4. Создайте компонент счетчик -->
