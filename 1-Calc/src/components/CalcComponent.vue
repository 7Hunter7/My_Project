<template>
  <div>
    <div class="calc">
      <input class="calc__input" type="text" v-model="result" />
      <button
        class="calc__buttons"
        @click="addButton(num)"
        v-for="num in numbers"
        :key="num.id"
      >
        {{ num }}
      </button>
      <button
        class="calc__buttons"
        @click="addButton(tab)"
        v-for="tab in tabs"
        :key="tab.id"
      >
        {{ tab }}
      </button>
      <button class="calc__buttons" @click="calcResult">=</button>
      <button class="button_reset" @click="reset">CE</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalcComponent",

  data() {
    return {
      result: "",
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      tabs: ["-", "+", "*", "/"],
    };
  },

  methods: {
    addButton(char) {
      this.result = this.result.toString();
      this.result += char;
    },
    calcResult() {
      this.result = eval(this.result);
    },
    reset() {
      this.result = "";
    },
  },
};
</script>

<style>
.calc {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  justify-content: center;
  gap: 10px;
}
.calc__input {
  grid-column: 1/-1;
  margin-bottom: 10px;
  text-align: right;
}

.button_reset {
  grid-column: 1/-1;
}
</style>
