Vue.component("Product", {
  data() {
    return {
      sortDiraction: "",
      products: [
        {
          id: 1,
          name: "Apple",
          price: 300,
        },
        {
          id: 2,
          name: "Samsung",
          price: 150,
        },
        {
          id: 3,
          name: "LG",
          price: 200,
        },
      ],
    };
  },
  methods: {},
  computed: {
    sortedProducts() {
      const sortProducts = [...this.products];
      switch (this.sortDiraction) {
        case "up":
          return sortProducts.sort((a, b) => a.price - b.price);
        case "down":
          return sortProducts.sort((a, b) => b.price - a.price);
        default:
          return this.products;
      }
    },
  },
  template: `
    <div>
      <h2>Список товаров</h2>
      <ul class="products__list">
        <li v-for="item in sortedProducts" :key="item.id">
        {{item.name}} - {{item.price}}
        </li>
      </ul>
      <button @click="sortDiraction='up'">Up</button>
      <button @click="sortDiraction='down'">Down</button>
      <button @click="sortDiraction=''">Clear</button>
    </div>
`,
});
