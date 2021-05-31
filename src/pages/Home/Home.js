import React from "react";

import WithLayout from "../../hoc/withLayout";
import ProductsListing from "../../components/ProductsListing";
import Cart from "../../components/Cart";

/**
 * Remove the following components from the component:
 * 1. fragment
 * 2. <AppHeader />
 * 3. <Main />
 * 4. <Footer />
 */
function Home({
  products,
  cartItems,
  isLoading,
  hasError,
  loadingError,
  handleDownVote,
  handleUpVote,
  handleSetFavorite,
  handleAddToCart,
  handleRemove,
  handleChange,
}) {
  return (
    <div className="row">
      <div className="col col-8">
        <div className="row">
          <div className="col col-12">
            <header className="jumbotron">
              <h1 className="display-4">Shoe shop</h1>
              <p className="lead">
                This is the best shoe shop ever, you will never find a better
                one.
              </p>
              <p className="font-weight-bold">Buy now!</p>
            </header>
          </div>
          {isLoading && (
            <div className="col col-12">
              <h2>Loading products...</h2>
            </div>
          )}
          {hasError && (
            <div className="col col-12">
              <h2>Something went wrong...</h2>
              <pre>
                <code>{loadingError}</code>
              </pre>
            </div>
          )}
          {!isLoading && !hasError && (
            <div className="col col-12">
              <ProductsListing
                products={products}
                handleDownVote={handleDownVote}
                handleUpVote={handleUpVote}
                handleSetFavorite={handleSetFavorite}
                handleAddToCart={handleAddToCart}
              />
            </div>
          )}
        </div>
      </div>

      <Cart
        className="col col-4"
        cartItems={cartItems}
        handleRemove={handleRemove}
        handleChange={handleChange}
      />
    </div>
  );
}

/**
 * Export default the Home by wrapping it in the withLayout hoc
 * export default withLayout(Home);
 */
export default WithLayout(Home);
