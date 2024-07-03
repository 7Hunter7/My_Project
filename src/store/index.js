export default {
  state: {
    counter: 0,
    cartItems: [],
  },
  mutations: {
    ADD_TOCART(state, product) {
      state.cartItems.push(product);
    },
    SET_CART(state, productList) {
      state.cartItems = productList;
    },
    INCREMENT(state) {
      state.counter++;
    },
    DECREMENT(state) {
      state.counter--;
    },
  },
  getters: {
    cartItems(state) {
      return state.cartItems;
    },
    countProducts(state) {
      return state.cartItems.length;
    },
    totalPrice(state) {
      return state.cartItems.reduce(
        (total, product) => total + product.price,
        0
      );
    },
  },
  actions: {
    fetcData({ commit }) {
      setTimeout(() => {
        commit("SET_CART", [
          {
            id: 1,
            name: "Apple",
            description: "Apple product descriptions",
            price: 50000,
          },
          {
            id: 2,
            name: "Samsung",
            description: "Samsung product descriptions",
            price: 20000,
          },
          {
            id: 3,
            name: "LG",
            description: "LG product descriptions",
            price: 15000,
          },
          {
            id: 4,
            name: "Toshiba",
            description: "Toshiba product descriptions",
            price: 25000,
          },
          {
            id: 5,
            name: "Bosh",
            description: "Bosh product descriptions",
            price: 30000,
          },
        ]);
      }, 2000);
    },
  },
};
