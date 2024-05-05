import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import ProductsList from "./components/ProductsList";
import AddProductForm from "./components/AddProductForm";
import UpdateProductForm from "./components/UpdateProductForm";
import "./style.css";

function App() {
  return (
    <Provider store={store}>
      <div>
        <ProductsList />
        <AddProductForm />
        <UpdateProductForm />
      </div>
    </Provider>
  );
}

export default App;
