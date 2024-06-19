Vue.component("to-do-list", {
  data() {
    return {
      newTodo: "",
      todoList: ["Погулять с собакой", "Помыть машину", "Забрать заказ c OZON"],
    };
  },
  methods: {
    addToDo() {
      this.todoList.push(this.newTodo);
      this.newTodo = "";
    },
    removeToDo(index) {
      this.todoList.splice(index, 1);
    },
  },
  template: `
    <div>
      <h2>Список дел</h2>
      <div class="form">
        <input type="text" placeholder="Новое дело" v-model="newTodo"/>
        <button @click="addToDo">Добавить</button>
      </div>
      <ul class="list">
        <li v-for="(todo, index) in todoList" :key="index">
        {{todo}}
        <button @click="removeToDo(index)">Удалить</button>
        </li>
      </ul>
    </div>
`,
});
