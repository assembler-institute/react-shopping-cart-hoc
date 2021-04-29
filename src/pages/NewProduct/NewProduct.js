import React from "react";

import AppHeader from "../../components/AppHeader";
import Footer from "../../components/Footer";
import Main from "../../components/Main";
import NewProductForm from "../../components/NewProductForm";

/**
 * Remove the following components from the component:
 * 1. fragment
 * 2. <AppHeader />
 * 3. <Main />
 * 4. <Footer />
 */
function NewProduct({ saveNewProduct }) {
  return (
    <>
      <AppHeader />
      <Main className="container">
        <div className="row justify-content-center">
          <div className="col col-8">
            <div className="row">
              <header className="col col-12">
                <h1>New product</h1>
              </header>
              <div className="col col-12">
                <hr />
              </div>

              <div className="col col-12">
                <NewProductForm saveNewProduct={saveNewProduct} />
              </div>
            </div>
          </div>
        </div>
      </Main>
      <Footer />
    </>
  );
}

/**
 * Export default the NewProduct by wrapping it in the withLayout hoc
 * export default withLayout(NewProduct);
 */
export default NewProduct;
