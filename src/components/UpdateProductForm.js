import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../reducers/productsSlice";

const UpdateProductForm = ({ productId, onClose }) => {
  const product = useSelector((state) =>
    state.products.products.find((product) => product.id === productId)
  );
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    if (product) {
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
      setAvailable(product.available);
    }
  }, [product]);

  const handleUpdateProduct = (e) => {
    console.log("Редактировать");
    e.preventDefault();
    dispatch(
      updateProduct({ id: productId, name, description, price, available })
    );
    onClose();
  };

  if (!product) return null;

  return (
    <section className="section__updateProduct">
      <h2 className="title">Редактировать продукт</h2>
      <div className="update__Product">
        <form onSubmit={handleUpdateProduct}>
          <input
            autoFocus
            type="text"
            placeholder="Продукт"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Описание"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="number"
            placeholder="Цена"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            min={0}
          />
          <label>
            Доступность:
            <input
              type="checkbox"
              checked={available}
              onChange={(e) => setAvailable(e.target.checked)}
            />
          </label>
          <button className="button__in_form" type="submit">
            Редактировать
          </button>
          <button className="utton__in_form button-close" onClick={onClose}>
            Отменить
          </button>
        </form>
      </div>
    </section>
  );
};

const mapDispatchToProps = {
  onSubmit: updateProduct,
};

export default connect(null, mapDispatchToProps)(UpdateProductForm);
