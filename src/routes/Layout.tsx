import { Outlet } from "react-router";
import style from "./Layout.module.css";

const Layout = () => (
  <div className={style.layout}>
    <Outlet />
  </div>
);

export { Layout };
