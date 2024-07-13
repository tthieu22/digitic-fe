import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"}></Meta>
      <BreadCrumb title="Wishlist" />
      <div className="wishlist-wrapper home-wapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card">
                <div className="wishlist-card-image position-relative">
                  <img
                    src="images/cross.svg"
                    alt="cross"
                    className="position-absolute cross img-fluid"
                  />
                  <div className="product-card-images">
                    <img
                      src="images/watch.jpg"
                      alt="watch"
                      className="w-100 img-fluid"
                    />
                  </div>
                  <div className="px-2 py-3">
                    <h5 className="title">
                      Honor T1 7.0 GB RAM ROM 7Inch With Wifi 5G Tablet
                    </h5>
                    <h6 className="price">$1000</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card">
                <div className="wishlist-card-image position-relative">
                  <img
                    src="images/cross.svg"
                    alt="cross"
                    className="position-absolute cross img-fluid"
                  />
                  <div className="product-card-images">
                    <img
                      src="images/watch.jpg"
                      alt="watch"
                      className="w-100 img-fluid"
                    />
                  </div>
                  <div className="px-2 py-3">
                    <h5 className="title">
                      Honor T1 7.0 GB RAM ROM 7Inch With Wifi 5G Tablet
                    </h5>
                    <h6 className="price">$1000</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card">
                <div className="wishlist-card-image position-relative">
                  <img
                    src="images/cross.svg"
                    alt="cross"
                    className="position-absolute cross img-fluid"
                  />
                  <div className="product-card-images">
                    <img
                      src="images/watch.jpg"
                      alt="watch"
                      className="w-100 img-fluid"
                    />
                  </div>
                  <div className="px-2 py-3">
                    <h5 className="title">
                      Honor T1 7.0 GB RAM ROM 7Inch With Wifi 5G Tablet
                    </h5>
                    <h6 className="price">$1000</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
