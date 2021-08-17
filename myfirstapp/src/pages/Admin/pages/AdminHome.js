import React from "react";
import Other from "../components/others/Other";
import ProductList from "../components/productList/ProductList";
// import UserList from "../components/userList/UserList";
import "./adminHome.css";

export default function Home() {
  return (
    <div className="home">
      <Other />
      <div className="homeWidgets">
        <ProductList />
        {/* <UserList /> */}
      </div>
    </div>
  );
}
