import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { createWrapper } from "next-redux-wrapper";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

export const states = {
  modals: {
    cartModal: false,
    authModal: false,
    registerModal: false,
    navModal: false,
  },
  getData: {
    payments: [],
    groups: [],
    products: [],
    sliders: [],
    branches: [],
    modifierGroups: [],
    modifiers: [],
    productModifiers: [],
    productModifierChild: [],
    cdnUrl: "",
    newProducts: [],
  },
  cart: [],
  favorites: [],
  prAlertShow: false,
  auth: {
    phone: "",
    isRegistered: false,
    isSentCode: false,
  },
  userInfo: null,
  cartItems: [],
};

const modalsReducer = (state = states.modals, action) => {
  switch (action.type) {
    case "SHOW_CART":
      return { ...state, cartModal: true };
    case "CLOSE_CART":
      return { ...state, cartModal: false };
    case "SHOW_AUTH":
      return { ...state, authModal: true };
    case "CLOSE_AUTH":
      return { ...state, authModal: false };
    case "SHOW_REGISTER":
      return { ...state, registerModal: true };
    case "CLOSE_REGISTER":
      return { ...state, registerModal: false };
    case "SHOW_NAV":
      return { ...state, navModal: true };
    case "CLOSE_NAV":
      return { ...state, navModal: false };
    default:
      return state;
  }
};

const cartReducer = (state = states.cart, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const item = state.find((i) => i.id == action.payload);
      if (item) {
        return state.map((i) => {
          if (i.id == action.payload) {
            return { id: i.id, q: i.q + 1 };
          }
          return i;
        });
      } else return [...state, { id: action.payload, q: 1 }];
    case "ADD_ALL_TO_CART":
      const arrId = action.payload;
      const allFavorites = arrId.map((x) => {
        const item = state.find((i) => i.id == x);
        if (item) {
          return null;
        } else return { id: x, q: 1 };
      });
      const addedFav = allFavorites.filter((x) => x != null);
      return [...state, ...addedFav];
    case "REMOVE_FROM_CART":
      const removeItem = state.find((i) => i.id == action.payload);
      if (!removeItem) {
        return;
      }
      if (removeItem.q == 1) {
        return state.filter((i) => i.id != action.payload);
      } else {
        return state.map((i) => {
          if (i.id == action.payload) {
            return { id: i.id, q: i.q - 1 };
          }
          return i;
        });
      }
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
};

const prAlert = (state = states, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const item = state.cart.find((i) => i.id == action.payload);
      if (!item) return { ...state, prAlertShow: true };
    case "REMOVE_PR_ALERT":
      return { ...state, prAlertShow: false };
    default:
      return state;
  }
};

const favoritesReducer = (state = states.favorites, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      const item = state.find((i) => i == action.payload);
      if (!item) return [...state, action.payload];
      return state.filter((i) => i != action.payload);
    case "REMOVE_FROM_FAVORITES":
      const removeItem = state.find((i) => i == action.payload);
      if (!removeItem) {
        return;
      }
      return state.filter((i) => i != action.payload);
    default:
      return state;
  }
};

const getDataReducer = (state = states.getData, action) => {
  switch (action.type) {
    case "SET_GROUPS":
      return { ...state, groups: action.payload };
    case "SET_SLIDERS":
      return { ...state, sliders: action.payload };
    case "SET_BRANCHES":
      return { ...state, branches: action.payload };
    case "SET_CDN_URL":
      return { ...state, cdnUrl: action.payload };
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "SET_PAYMENTS":
      return { ...state, payments: action.payload };
    case "SET_MODIFIER_GROUPS":
      return { ...state, modifierGroups: action.payload };
    case "SET_MODIFIERS":
      return { ...state, modifiers: action.payload };
    case "SET_PRODUCT_MODIFIERS":
      return { ...state, productModifiers: action.payload };
    case "SET_PRODUCT_MODIFIER_CHILD":
      return { ...state, productModifierChild: action.payload };
    case "SET_NEW_PRODUCTS":
      return { ...state, newProducts: action.payload };
    default:
      return state;
  }
};

const authReducer = (state = states.auth, action) => {
  switch (action.type) {
    case "SET_IS_REGISTERED":
      return { ...state, isRegistered: action.payload };
    case "SET_IS_CODE_SENT":
      return { ...state, isSentCode: action.payload };
    case "SET_PHONE_NUMBER":
      return { ...state, phone: action.payload };
    default:
      return state;
  }
};

const userInfoReducer = (state = states.userInfo, action) => {
  switch (action.type) {
    case "GET_USER_INFO":
      return action.payload;
    case "LOGOUT":
      return null;
    default:
      return state;
  }
};

const cartItemsReducer = (state = states.cartItems, action) => {
  switch (action.type) {
    case "SET_CART_ITEMS":
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cartReducer,
  modalsReducer,
  favoritesReducer,
  getDataReducer,
  authReducer,
  prAlert,
  userInfoReducer,
  cartItemsReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: [
    "modalsReducer",
    "getDataReducer",
    "authReducer",
    "prAlert",
    "cartItemsReducer",
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const reducers = combineReducers({
//   cartReducer,
//   modalsReducer,
//   favoritesReducer,
//   getDataReducer,
// });

// const makeStore = () =>
//   configureStore({
//     reducer: reducers,
//     devTools: true,
//   });

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// export const wrapper = createWrapper(store);
export let persistor = persistStore(store);
