import { createSlice } from "@reduxjs/toolkit";

const loadCartFromStorage = () => {
  try {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    return [];
  }
};

const initialState = {
  items: loadCartFromStorage(),
  statusTab:false
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { productId, quantity } = action.payload;

      const existingItem = state.items.find(
        item => item.productId === productId
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ productId, quantity });
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    decreaseQuantity(state, action) {
      const { productId } = action.payload;

      const existingItem = state.items.find(
        item => item.productId === productId
      );

      if (!existingItem) return;

      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        state.items = state.items.filter(
          item => item.productId !== productId
        );
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeFromCart(state, action) {
      const { productId } = action.payload;

      state.items = state.items.filter(
        item => item.productId !== productId
      );

      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    clearCart(state) {
      state.items = [];
      localStorage.removeItem("cart");
    },
    toggleStatusTab(state){
      if(state.statusTab === false){
        state.statusTab = true
      }else{
        state.statusTab = false
      }
    }
  }
});

export const {
  addToCart,
  decreaseQuantity,
  removeFromCart,
  clearCart,
  toggleStatusTab
} = cartSlice.actions;

export default cartSlice.reducer;
