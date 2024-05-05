import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import {
  deleteProduct,
  updateProduct,
  toggleAvailability,
} from "../reducers/productsSlice";
import UpdateProductForm from "./UpdateProductForm";

function ProductsList() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const [editingProductId, setEditingProductId] = useState(null);

  const handleEditClick = (productId) => {
    setEditingProductId(productId);
  };

  const handleCloseEditForm = () => {
    setEditingProductId(null);
  };

  return (
    <div>
      <h2 className="title">Продукты</h2>
      <section className="product__list">
        {editingProductId && (
          <UpdateProductForm
            productId={editingProductId}
            onClose={handleCloseEditForm}
          />
        )}
        {products.map((product) => (
          <div className="product" key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <p>
              Продукт
              {product.available ? " доступен" : " недоступен"}
            </p>
            <button
              className="button__in_product"
              onClick={() => dispatch(toggleAvailability(product.id))}
            >
              Изменить доступность
            </button>
            <button
              className="button__in_product"
              onClick={() => handleEditClick(product.id)}
            >
              Редактировать
            </button>
            <button
              className="button__in_product"
              onClick={() => dispatch(deleteProduct(product.id))}
            >
              Удалить
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}

const mapDispatchToProps = {
  toggleAvailability,
  deleteProduct,
  updateProduct,
};

export default connect(null, mapDispatchToProps)(ProductsList);
