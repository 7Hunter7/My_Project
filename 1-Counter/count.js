Vue.component("Counter", {
  data() {
    return { count: 0 };
  },
  methods: {
    countPlusOne() {
      this.count += 1;
    },
    countMinusOne() {
      this.count -= 1;
    },
  },
  template: `
    <div>
      <h2>Счетчик</h2>
      <p>{{count}}</p>
      <button @click="countPlusOne">+</button>
      <button @click="countMinusOne">-</button>
    </div>
`,
});
