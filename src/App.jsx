import "./App.css";
import ArticlesProvider from "./context/ArticlesProvider";
import ProductsProvider from "./context/ProductsProvider";
import Layout from "./layouts/Layout";
import Router from "./Router";

function App() {
  return (
    <>
      <ProductsProvider>
        <ArticlesProvider>
          <Layout>
            <Router />
          </Layout>
        </ArticlesProvider>
      </ProductsProvider>
    </>
  );
}

export default App;
