Vue.component("List", {
  data() {
    return {
      filter: "",
      newItem: "",
      newItemsList: [],
      ItemsList: ["list 1", "list 2", "list 3"],
    };
  },
  methods: {
    addItemToList() {
      if (this.newItem) {
        this.ItemsList.push(this.newItem);
        this.newItem = "";
      }
    },
    removeItemFromList(index) {
      this.ItemsList.splice(index, 1);
    },
  },
  computed: {
    filteredList() {
      if (this.filter) {
        return this.ItemsList.filter((item) => item.includes(this.filter));
      } else return this.ItemsList;
    },
  },
  template: `
    <div>
      <h2>Список</h2>
      <div class="form">
        <input type="text" placeholder="Новый элемент списка" v-model="newItem"/>
        <button @click="addItemToList">Добавить</button>
      </div>
      <ul class="list">
        <li v-for="(item, index) in ItemsList" :key="index">
        {{item}}
        <button @click="removeItemFromList(index)">Удалить</button>
        </li>
      </ul>
      <div class="filtered">
        <h3>Отфильтрованный список</h3>
        <input type="text" placeholder="Фильтр" v-model="filter"/>
        <ul class="filtered_list">
          <li v-for="(item, index) in filteredList" :key="index">
          {{item}}
          </li>
        </ul>
      </div>
    </div>
`,
});
