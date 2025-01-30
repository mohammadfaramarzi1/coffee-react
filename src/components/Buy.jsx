import React from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import { useProducts } from "../context/ProductsProvider";
import { Link } from "react-router-dom";

function Buy({ username }) {
  const [state] = useProducts();
  console.log(state);

  return (
    <div>
      <DashboardHeader username={username} />
      <DashboardSidebar />
      <main className="mt-[60px] mr-[220px]">
        <h2 className="text-lg">لیست محصولات خریداری شده</h2>
        <div>
          {state.buy.length ? (
            state.buy.map((item, index) => {
              const userInfo = item[1];
              return (
                <div
                  key={index}
                  className="border border-brown-dark rounded-md m-5 p-4 flex flex-col md:flex-row gap-y-3 md:gap-y-0  md:justify-around"
                >
                  <div>
                    {item[0].map((product, idx) => (
                      <div>
                        <Link
                          to={`/products/${product.id}`}
                          key={idx}
                          className="flex items-center gap-3 flex-col sm:flex-row"
                        >
                          <img
                            src={product.img}
                            alt={product.title}
                            className="w-[60px] md:w-[150px]"
                          />
                          <h4 className="text-sm md:text-md">
                            {product.title}
                          </h4>
                          <h4 className="text-sm md:text-md">
                            {product.newprice.toLocaleString()} تومان
                          </h4>
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col justify-center gap-y-3">
                    <h3 className="text-lg text-brown-medium">اطلاعات خرید:</h3>
                    <p className="text-sm md:text-md">نام: {userInfo.name}</p>
                    <p className="text-sm md:text-md">
                      ایمیل: {userInfo.email}
                    </p>
                    <p className="text-sm md:text-md">تلفن: {userInfo.phone}</p>
                    <p className="text-sm md:text-md">
                      آدرس: {userInfo.address}
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <div>
              <div className="flex items-center justify-center">
                <img src="/images/11518398.jpg" className="w-[400px]" alt="" />
              </div>
              <h3 className="text-center text-lg">
                محصولی را خریداری نکرده اید.
              </h3>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Buy;
