<template>
  <div class="product">
    <h2>Продукт: {{ product.name }}</h2>
    <img :src="product.imgUrl" :alt="product.imgAlt" />
    <p @click="toggleAvailable">
      Доступность:
      <span v-if="product.available">Available</span>
      <span v-else>Out of stock</span>
    </p>
    <p>Цена продукта в рублях: {{ product.price }} pуб.</p>
    <div class="convert">
      <h2>Конвертировать стоимость</h2>
      <label for="currency"
        >Выберите валюту
        <select
          id="currency"
          @change="formattedPrice($event)"
          v-model.number="setRate"
          v-model="setCurrency"
        >
          <option value="₽">RUB</option>
          <option value="$">USD</option>
          <option value="€">EUR</option>
          <option value="£">GBP</option>
          <option value="元">CNY</option>
        </select>
      </label>
      <p
        class="convert_result"
        :setCurrency="setCurrency"
        :convertPrice="convertPrice"
      >
        Цена продукта: {{ setCurrency }} {{ convertPrice }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetails",
  data() {
    return {
      setPrice: 0,
      setRate: 1,
      setCurrency: "₽",
      convertPrice: 0,
      product: {
        imgUrl: "/1.jpg",
        imgAlt: "Product_1",
        name: "Product_1",
        available: true,
        price: 99.99,
      },
    };
  },
  methods: {
    toggleAvailable() {
      this.product.available = !this.product.available;
    },
    formattedPrice(event) {
      this.setCurrency = event.target.value;
      this.setPrice = this.product.price;
      switch (this.setCurrency) {
        case "₽":
          this.setRate = 1;
          break;
        case "$":
          this.setRate = 0.0117;
          break;
        case "€":
          this.setRate = 0.0108;
          break;
        case "£":
          this.setRate = 0.0092;
          break;
        case "元":
          this.setRate = 0.0864;
          break;
        default:
          this.setRate = 1;
      }
      this.convertPrice = (this.setPrice * this.setRate).toFixed(2);
    },
  },
};
</script>

<style>
.product {
  width: 400px;
  margin: 10px;
  padding: 10px 10px;
  border: 1px solid grey;
  border-radius: 20px;
}
img {
  height: 200px;
}
h2 {
  text-align: center;
  margin: 25px 10px;
}
p {
  margin-top: 10px;
}
label {
  margin-right: 10px;
}
</style>
