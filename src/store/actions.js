export const showAuth = () => {
    return {
      type: "SHOW_AUTH",
    };
};

export const closeAuth = () => {
    return {
      type: "CLOSE_AUTH",
    };
};

export const showRegister = () => {
  return {
    type: "SHOW_REGISTER",
  };
};

export const closeRegister = () => {
  return {
    type: "CLOSE_REGISTER",
  };
};

export const setGroups = (arr) => {
  return {
    type: "SET_GROUPS",
    payload: arr,
  };
};

export const setSliders = (arr) => {
  return {
    type: "SET_SLIDERS",
    payload: arr,
  };
};

export const setBranches = (arr) => {
  return {
    type: "SET_BRANCHES",
    payload: arr,
  };
};

export const setCdnUrl = (string) => {
  return {
    type: "SET_CDN_URL",
    payload: string,
  };
};

export const setProducts = (arr) => {
  return {
    type: "SET_PRODUCTS",
    payload: arr,
  };
};

export const setModifierGroups = (arr) => {
  return {
    type: "SET_MODIFIER_GROUPS",
    payload: arr,
  };
};

export const setModifiers = (arr) => {
  return {
    type: "SET_MODIFIERS",
    payload: arr,
  };
};

export const setProductModifiers = (arr) => {
  return {
    type: "SET_PRODUCT_MODIFIERS",
    payload: arr,
  };
};

export const setProductModifierChild = (arr) => {
  return {
    type: "SET_PRODUCT_MODIFIER_CHILD",
    payload: arr,
  };
};

export const setNewProducts = (arr) => {
  return {
    type: "SET_NEW_PRODUCTS",
    payload: arr,
  };
};

export const setPhone = (number) => {
  return {
    type: "SET_PHONE_NUMBER",
    payload: number,
  };
};

export const setIsCodeSent = (boolean) => {
  return {
    type: "SET_IS_CODE_SENT",
    payload: boolean,
  };
};

export const getUserInfo = (data) => {
  return {
    type: "GET_USER_INFO",
    payload: data,
  };
};

export const addToFavorites = (id) => {
  return {
    type: "ADD_TO_FAVORITES",
    payload: id,
  };
};