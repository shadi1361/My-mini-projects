import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import Login from "../../components/login/Login";
import { AppContext } from "../../App";
import "./Home.css"; // Import the CSS file

function Home() {
  const { isLogin } = useContext(AppContext);
  return (
    <Layout>
      <div className="content-wrapper">
        <div className="box">
          {isLogin ? <div> شما وارد شدید </div> : <Login />}
        </div>
      </div>
    </Layout>
  );
}

export default Home;
