import React from "react";

import AppHeader from "../components/AppHeader";
import Footer from "../components/Footer";
import Main from "../components/Main";

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

/* eslint no-param-reassign: [2, { "props": false }] */
function withLayout(WrappedComponent) {
  WrappedComponent.displayName = `withLayout(${getDisplayName(
    WrappedComponent,
  )})`;

  /**
   * 1. create a function named WithOptions({ fullWidth = false })
   *    1.1 the fullWidth prop controls if the container-fluid class is set
   * 2. the WithOptions component will return the previous WrapperComponent
   *    just as before.
   *
   * Previous requirements for: WrapperComponent
   * 1. create a function named WrapperComponent()
   * 2. capture all the props of the WrapperComponent function
   *    { ...props }
   * 3. return a fragment that returns the following components:
   *    3.1 <AppHeader />
   *    3.2 <Main className={props.fullWidth ? "container-fluid" : "container"}>
   *          <WrappedComponent {...props} />
   *        </Main>
   *    3.3 <Footer />
   */
  function WithOptions({ fullWidth = false }) {
    function WrapperComponent({ ...props }) {
      return (
        <>
          <AppHeader />
          <Main className={fullWidth ? "container-fluid" : "container"}>
            <WrappedComponent {...props} />
          </Main>
          <Footer />
        </>
      );
    }

    return WrapperComponent;
  }

  return WithOptions;
}

export default withLayout;
