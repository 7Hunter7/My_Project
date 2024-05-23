console.log("Задание 1");
class Library {
  // Приватное свойство для хранения списка книг
  #books = [];

  // Конструктор, который принимает начальный список книг.
  constructor(initialBooks = []) {
    // Проверка, на наличие дубликатов.
    try {
      if (
        initialBooks.some(
          (book, index) =>
            index < initialBooks.length - 1 && book === initialBooks[index + 1]
        )
      ) {
        throw new Error("Предоставленный массив книг содержит дубликаты!");
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      this.#books = initialBooks;
    }
  }

  // Геттер, который возвращает текущий список книг.
  get allBooks() {
    return this.#books;
  }

  // Метод, который позволяет добавлять книгу в список.
  addBook(title) {
    try {
      if (!this.hasBook(title)) {
        this.#books.push(title);
      } else {
        throw new Error(
          `Книга с названием ${title} уже существует в библиотеке`
        );
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      return this.#books;
    }
  }

  // Метод, который позволяет удалять книгу из списка по названию.
  removeBook(title) {
    try {
      let bookIndex = this.#books.indexOf(title);
      if (bookIndex !== -1) {
        this.#books.splice(bookIndex, 1);
      } else {
        throw new Error(`Книги с названием ${title} нет в библиотеке`);
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      return this.#books;
    }
  }

  // Метод, который проверяет наличие книги в библиотеке
  hasBook(title) {
    try {
      if (this.#books.includes(title)) {
        console.log(true);
      } else {
        console.log(false);
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      return this.#books.includes(title);
    }
  }
}

// Пример использования класса
// const library = new Library([
//   "Приключения Шерлока Холмса",
//   "Мастер и Маргарита",
//   "Крестный отец",
//   "Зеленая миля",
//   "Фауст",
// ]);
// console.log(library.allBooks);

// library.addBook("Божественная комедия");
// console.log(library.allBooks);
// library.addBook("Марсианские хроники");
// console.log(library.allBooks);

// library.addBook("Зеленая миля");
// console.log(library.allBooks);

// library.hasBook("Мастер и Маргарита");
// library.removeBook("Мастер и Маргарита");
// console.log(library.allBooks);

// library.hasBook("Harry Potter");
// library.removeBook("Harry Potter");
// console.log(library.allBooks);

// console.log("");
