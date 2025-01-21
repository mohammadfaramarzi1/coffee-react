import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import BASE_URL from "../utils/url";
import { productsActions } from "../utils/products";

const ProductsContext = createContext();

const initialState = {
  selectedItems: [],
  totalPrice: 0,
  count: 0,
  checkout: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      return {
        selectedItems: state.selectedItems,
        ...productsActions(state.selectedItems),
        checkout: false,
      };
    }
    case "REMOVE_ITEM": {
      const newSelectedItems = state.selectedItems(
        (item) => item.id !== action.payload.id
      );
      return {
        selectedItems: [...newSelectedItems],
        ...productsActions(newSelectedItems),
        checkout: false,
      };
    }
    case "INCREASE_ITEM": {
      const increaseIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[increaseIndex].quantity++;
      return {
        selectedItems: [...state.selectedItems],
        ...productsActions(state.selectedItems),
        checkout: false,
      };
    }
    case "DECREMENT_ITEM": {
      const decreaseIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[decreaseIndex].quantity--;
      return {
        selectedItems: [...state.selectedItems],
        ...productsActions(state.selectedItems),
        checkout: false,
      };
    }
    case "CHECKOUT": {
      return {
        selectedItems: [],
        count: 0,
        totalPrice: 0,
        checkout: true,
      };
    }
  }
};

function ProductsProvider({ children = null }) {
  const [products, setProducts] = useState([]);

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(`${BASE_URL}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <ProductsContext.Provider value={{ state, dispatch, products }}>
      {children}
    </ProductsContext.Provider>
  );
}

const useProducts = () => {
  const { state, dispatch, products } = useContext(ProductsContext);
  return [state, dispatch, products];
};

export { useProducts };
export default ProductsProvider;
