const compItem = {
  name: "comp-item",
  template: `<p>item info</p>`,
};

Vue.component("new-component", {
  props: ["title"],

  data() {
    return { counter: 0 };
  },
  components: {
    comp: compItem,
  },
  methods: {
    increase() {
      this.counter++;
    },
    increaseTwo(step) {
      this.counter += step;
    },
  },

  template: `
    <div>
      <h3>{{title}}</h3>
      <comp></comp>
      <p>Шаблон для Vue - counter</p>
      <p>counter click {{counter}}</p>
      <button @click="increase">+1</button>
      <button @click="increaseTwo(5)">+5</button>
    </div>
  `,
});
