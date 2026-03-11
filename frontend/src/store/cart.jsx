import { createSlice } from "@reduxjs/toolkit";

const loadCartFromStorage = () => {
  try {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    return [];
  }
};

const checkAuthStatus = () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) return false;

    // Check if token is expired (JWT payload is base64 encoded as 2nd part)
    const payload = JSON.parse(atob(token.split('.')[1]));
    const isExpired = payload.exp * 1000 < Date.now();

    if (isExpired) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return false;
    }
    return true;
  } catch (error) {
    return false;
  }
};

const initialState = {
  items: loadCartFromStorage(),
  statusTab: false,
  isAuthModalOpen: false,
  isAuthenticated: checkAuthStatus()
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
    toggleStatusTab(state) {
      if (state.statusTab === false) {
        state.statusTab = true
      } else {
        state.statusTab = false
      }
    },
    toggleAuthModal(state) {
      state.isAuthModalOpen = !state.isAuthModalOpen;
    },
    setAuthenticated(state, action) {
      state.isAuthenticated = action.payload;
    }
  }
});

export const {
  addToCart,
  decreaseQuantity,
  removeFromCart,
  clearCart,
  toggleStatusTab,
  toggleAuthModal,
  setAuthenticated
} = cartSlice.actions;

export default cartSlice.reducer;
