<!-- Задание 2 (тайминг 40 минут)
Разработать интерфейс корзины товаров, в котором пользователь
может изменять количество товаров в корзине и видеть общую сумму
покупки. Каждый товар представлен в виде блока, содержащего поле
ввода для изменения количества товара и отображение его цены. При
изменении количества товаров в поле ввода, необходимо
автоматически пересчитывать стоимость каждого товара и обновлять
общую сумму покупки. -->

<template>
  <div>
    <ul>
      <li v-for="product in products" :key="product.id">
        <p>Товар: {{ product.naame }}</p>
        <button @click="toggleDescription(product.id)">Описание</button>
        <p v-if="showDescriptions.includes(product.id)">
          {{ product.description }}
        </p>
        <p>Цена: {{ product.price }} руб.</p>
        <label for="quontity">Kоличество товаров в корзине</label> <br />
        <input
          type="number"
          id="quontity"
          min="0"
          :max="product.quontity"
          v-model="product.quontity"
        />
        <p>Cтоимость товара: {{ product.price * product.quontity }} руб.</p>
      </li>
    </ul>
    <h2>Сумма покупки: {{ totalPrice }} руб.</h2>
  </div>
</template>

<script>
export default {
  name: "CartComponent",
  data() {
    return {
      showDescriptions: [],
      products: [
        {
          id: 1,
          naame: "Product_1",
          description: "Какое-то описание товара",
          price: 100,
          quontity: 5,
        },
        {
          id: 2,
          naame: "Product_2",
          description: "Какое-то описание товара",
          price: 200,
          quontity: 15,
        },
        {
          id: 3,
          naame: "Product_3",
          description: "Какое-то описание товара",
          price: 300,
          quontity: 10,
        },
      ],
    };
  },
  methods: {
    toggleDescription(id) {
      const findIndex = this.showDescriptions.indexOf(id);
      if (findIndex === -1) {
        this.showDescriptions.push(id);
      } else {
        this.showDescriptions.splice(findIndex, 1);
      }
    },
  },
  computed: {
    totalPrice() {
      return this.products.reduce(
        (sum, cur) => sum + cur.price * cur.quontity,
        0
      );
    },
  },
};
</script>

<style>
li {
  margin-bottom: 25px;
}
p {
  margin-bottom: 10px;
}
</style>
