const productsActions = (products) => {
  const count = products.reduce((acc, cur) => acc + cur.quantity, 0);
  const totalPrice = products.reduce(
    (acc, cur) => acc + cur.newprice * cur.quantity,
    0
  );
  return { count, totalPrice };
};

const calcQuantity = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item.id === id);
  if (index === -1) return 0;
  return state.selectedItems[index].quantity;
};

export { productsActions, calcQuantity };
