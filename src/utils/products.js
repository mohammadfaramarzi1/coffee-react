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

const filterProductsByCategory = (products, category) => {
  if (!category || category === "all") return products;
  const filteredProducts = products.filter(
    (product) => product.slug === category
  );
  return filteredProducts;
};

const filterProductsBySearch = (products, search) => {
  if (search === "") return products;
  const filteredProducts = products.filter((product) =>
    product.title.includes(search)
  );
  return filteredProducts;
};

const handleQuery = (oldQuery, newQuery) => {
  if (newQuery.search === "") {
    const { search, ...rest } = oldQuery;
    return rest;
  }

  if (newQuery.category === "all") {
    const { category, ...rest } = oldQuery;
    return rest;
  }

  return {
    ...oldQuery,
    ...newQuery,
  };
};

export {
  productsActions,
  calcQuantity,
  filterProductsByCategory,
  filterProductsBySearch,
  handleQuery
};
