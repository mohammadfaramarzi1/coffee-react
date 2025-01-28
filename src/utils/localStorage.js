const addToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getFromLocalStorage = (key) => {
  JSON.parse(localStorage.getItem(key));
};

export { addToLocalStorage, getFromLocalStorage };
