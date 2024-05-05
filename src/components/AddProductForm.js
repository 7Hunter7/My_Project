import React, { useState } from "react";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../reducers/productsSlice";

const AddProductForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState(false);

  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleAddProduct = (e) => {
    console.log("Добавить");
    e.preventDefault();
    if (name && description && price) {
      dispatch(
        addProduct({
          id: `${products.length + 1}`,
          name: `${name}`,
          description: `${description}`,
          price: parseFloat(`${price}`),
          available: `${available}`,
        })
      );
      setName("");
      setDescription("");
      setPrice("");
      setAvailable(false);
    }
  };

  return (
    <section>
      <h2 className="title">Добавить Продукт</h2>
      <div className="add__Product">
        <form onSubmit={handleAddProduct}>
          <input
            id="name"
            type="text"
            placeholder="Продукт"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            id="description"
            type="text"
            placeholder="Описание"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            id="price"
            type="number"
            placeholder="Цена"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            min={0}
          />
          <label>
            Доступность:
            <input
              id="available"
              type="checkbox"
              checked={available}
              onChange={(e) => setAvailable(e.target.checked)}
            />
          </label>
          <button className="button__in_form" type="submit">
            Добавить
          </button>
        </form>
      </div>
    </section>
  );
};

const mapDispatchToProps = {
  onSubmit: addProduct,
};

export default connect(null, mapDispatchToProps)(AddProductForm);
