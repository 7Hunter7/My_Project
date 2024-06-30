<template>
  <div>
    <div v-for="item in items" :key="item">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentsDisplay",
  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>
