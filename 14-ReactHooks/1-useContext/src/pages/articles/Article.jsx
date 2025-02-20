import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import Login from "../../components/login/Login";
import { AppContext } from "../../App";

function Articles() {
  const { isLogin } = useContext(AppContext);
  return (
    <Layout>
      <div className="content-wrapper">
        {isLogin ? <div> شما وارد شدید </div> : <Login />}
      </div>
    </Layout>
  );
}

export default Articles;
