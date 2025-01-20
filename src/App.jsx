import "./App.css";
import ProductsProvider from "./context/ProductsProvider";
import Layout from "./layouts/Layout";
import Router from "./Router";

function App() {
  return (
    <>
      <ProductsProvider>
        <Layout>
          <Router />
        </Layout>
      </ProductsProvider>
    </>
  );
}

export default App;
