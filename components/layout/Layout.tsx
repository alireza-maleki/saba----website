import React, { Fragment } from "react";
import MainNavigation from "./MainNavigation";

type PropsType = {
  props?: any;
  children?: any;
}

const Layout = (props: PropsType) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
