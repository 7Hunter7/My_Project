Vue.component("new-component", {
  props: ["title"],

  data() {
    return {};
  },

  template: `
    <div>
      <h3>{{title}}</h3>
      <p>Новыый шаблон для Vue</p>
    </div>
  `,
});
