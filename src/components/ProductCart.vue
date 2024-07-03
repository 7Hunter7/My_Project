<template>
  <div>
    <div>
      <h2>Список товаров</h2>
      <ul class="products__list">
        <li v-for="item in cartItems" :key="item.id">
          <h3>{{ item.name }}</h3>
          <p>{{ item.description }}</p>
          <p>{{ item.price }}</p>
        </li>
      </ul>
    </div>
    <AddNewProduct @addToCart="addToCart" />
    <h3>Всего {{ countProducts }} товаров на сумму: {{ totalPrice }}</h3>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

import AddNewProduct from "./AddNewProduct.vue";

export default {
  name: "ProductCart",
  components: { AddNewProduct },
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["ADD_TOCART"]),
    addToCart(product) {
      this.ADD_TOCART(product);
    },
  },
  computed: {
    ...mapMutations(["ADD_TOCART"]),
    ...mapGetters(["cartItems", "countProducts", "totalPrice"]),
    ...mapActions(["fetcData"]),
  },
  mounted() {
    this.fetcData();
  },
};
</script>
