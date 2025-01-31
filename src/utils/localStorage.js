const addToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

const getItemFromLocalStorage = (key, item) => {
  const storedData = localStorage.getItem(key)
  if (!storedData) return null;

  try {
    const parsedData = JSON.parse(storedData);
    return parsedData?.[item] ?? null;
  } catch (error) {
    console.error("Error parsing JSON from localStorage:", error);
    return null;
  }
};

export { addToLocalStorage, getFromLocalStorage, getItemFromLocalStorage };
