console.log("Задание 2 - Система управления заказами");
console.log("");
// Повара и их специализации:
const chefs = new Map();
chefs.set("Виктор", ["Пицца"]);
chefs.set("Ольга", ["Суши"]);
chefs.set("Дмитрий", ["Десерты"]);

// Блюда и их повара:
const dishes = new Map();
dishes.set('Пицца "Маргарита"', "Виктор");
dishes.set('Пицца "Пепперони"', "Виктор");
dishes.set('Суши "Филадельфия"', "Ольга");
dishes.set('Суши "Калифорния"', "Ольга");
dishes.set("Тирамису", "Дмитрий");
dishes.set("Чизкейк", "Дмитрий");

//Заказы:

// Функция для добавления нового заказа
function addOrder(clientName, order) {
  // Создаем новый объект для хранения заказа клиента
  const clientOrders = new Map();
  clientOrders.set(clientName, order);

  // Добавляем заказ клиента в общую коллекцию заказов
  orders.set(clientName, clientOrders);
}

// Общая коллекция заказов клиентов
const orders = new Map();

// Добавление заказов от клиентов
addOrder("Алексей", ['Пицца "Пепперони"', "Тирамису"]);
addOrder("Мария", ['Суши "Калифорния"', 'Пицца "Маргарита"']);
addOrder("Ирина", ["Чизкейк"]);

// Вывод информации о заказах
orders.forEach((value, key) => {
  console.log(`Заказ клиента ${key}: `);
  value.forEach((item) => {
    console.log(`- ${item}`);
  });
});

// Вывод информации о поварах:
chefs.forEach((specialization, chef) => {
  console.log(`Повар ${chef} готовит: ${specialization.join(" , ")}`);
});
console.log("");
