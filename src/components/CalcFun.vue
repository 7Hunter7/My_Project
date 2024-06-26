<template>
  <div>
    <h1>Мой новый калькулятор</h1>
    <input type="text" v-model="operand1" />
    <input type="text" v-model="operand2" />
    {{ result }}
    <div>
      <button
        @click="calcAllResult(operation)"
        v-for="operation in operations"
        :key="operation.id"
      >
        {{ operation }}
      </button>
    </div>
    <div>
      <div v-show="error">
        {{ error }}
      </div>
    </div>
    <div>
      <template v-if="result < 0">Получилось отрицательное число</template>
      <template v-if="result >= 0 && result <= 100"
        >Получилось число от 0 до 100</template
      >
      <template v-if="result > 100">Получилось число больше 100</template>
    </div>
    <div>
      <p>Число Фиббогачи для первого поля ввода {{ fib1 }}</p>
      <br />
      <p>Число Фиббогачи для второго поля ввода {{ fib2 }}</p>
    </div>
    <div>
      <h3>История операций</h3>
      <div v-for="log in logs" :key="log.id">
        {{ log }}
      </div>
    </div>
  </div>
</template>

<script>
// import Vue from "vue";

export default {
  name: "CalcFun",
  data() {
    return {
      operand1: 0,
      operand2: 0,
      result: 0,
      operations: ["+", "-", "*", "/"],
      error: "",
      logs: {},
    };
  },
  methods: {
    add() {
      this.result = Number(this.operand1) + Number(this.operand2);
    },
    minus() {
      this.result = Number(this.operand1) - Number(this.operand2);
    },
    mult() {
      this.result = Number(this.operand1) * Number(this.operand2);
    },
    div() {
      const { operand1, operand2 } = this;
      if (operand2 === 0) {
        this.error = "Ошибка! На ноль делить нельзя!";
      } else {
        this.result = operand1 / operand2;
      }
      // this.result = Number(this.operand1) / Number(this.operand2);
    },
    // число Фибоначи
    fib(n) {
      return n <= 1 ? n : this.fib(n - 1) + this.fib(n - 2);
    },
    calcAllResult(operation = "+") {
      this.error = "";
      switch (operation) {
        case "+":
          this.add();
          break;
        case "-":
          this.minus();
          break;
        case "*":
          this.mult();
          break;
        case "/":
          this.div();
          break;
      }
      // const key = Date.now();
      // const value = `${this.operand1}${operation}${this.operand2}=${this.result}`;
      // Vue.set(this.logs, key, value);
      this.logs[
        Date.now()
      ] = `${this.operand1}${operation}${this.operand2}=${this.result}`;
    },
  },
  computed: {
    fib1() {
      return this.fib(this.operand1);
    },
    fib2() {
      return this.fib(this.operand2);
    },
  },
};
</script>
