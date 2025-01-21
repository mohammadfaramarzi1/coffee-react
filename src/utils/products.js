const productsActions = (products) => {
  const count = products.selectedItems.reduce(
    (acc, cur) => acc + cur.quantity,
    0
  );
  const totalPrice = products.selectedItems.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );
  return { count, totalPrice };
};

export { productsActions };
