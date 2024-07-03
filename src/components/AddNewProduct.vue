<template>
  <div>
    <input type="text" placeholder="name" v-model="name" />
    <input type="text" placeholder="description" v-model="description" />
    <input type="number" placeholder="price" v-model.number="price" />
    <button @click="addToCart">Добавить</button>
  </div>
</template>

<script>
export default {
  name: "AddNewProduct",

  data() {
    return {
      name: "",
      description: "",
      price: null,
    };
  },
  methods: {
    addToCart() {
      const id = new Date().getTime();
      const newProduct = {
        id,
        name: this.name,
        description: this.description,
        price: this.price,
      };
      this.$emit("addToCart", newProduct);
    },
  },
};
</script>
