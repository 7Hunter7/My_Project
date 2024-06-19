Vue.component("change-one", {
  template: `
    <div>
      <h2>Info change component</h2>
      <p>Новый текстовый блок, который нужно прочитать</p>
    </div>
  `,
});

Vue.component("change-two", {
  template: `
    <div>
      <h2>2 change component</h2>
      <p>Другой текст и другой шаблон</p>
    </div>
  `,
});

Vue.component("change-tree", {
  template: `
    <div>
      <h2>3 change component</h2>
      <ul>
        <li>list item info 1</li>
        <li>list item info 2</li>
        <li>list item info 3</li>
      </ul>
    </div>
  `,
});
