import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Color from "../components/Color";
const CompareProduct = () => {
  return (
    <>
      <Meta title={"Compare Products"}></Meta>
      <BreadCrumb title="Compare Products" />
      <div className="compare-product-wapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-images">
                  <img src="images/watch.jpg" alt="watch" />
                </div>
                <div className="compare-product-detail">
                  <h5 className="title">
                    Honor T1 7.0 GB RAM ROM 7Inch With Wifi 5G Tablet
                  </h5>
                  <h6 className="price">$1000</h6>
                </div>
                <div className="product-detail">
                  <h5>Brand:</h5>
                  <p>Havels</p>
                </div>
                <div className="product-detail">
                  <h5>Type:</h5>
                  <p>Wathc</p>
                </div>
                <div className="product-detail">
                  <h5>Availabity:</h5>
                  <p>In Stock</p>
                </div>
                <div className="product-detail">
                  <h5>Color:</h5>
                  <Color />
                </div>
                <div className="product-detail">
                  <h5>Size:</h5>
                  <div className="d-flex gap-10">
                    <p>S</p>
                    <p>M</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-images">
                  <img src="images/watch.jpg" alt="watch" />
                </div>
                <div className="compare-product-detail">
                  <h5 className="title">
                    Honor T1 7.0 GB RAM ROM 7Inch With Wifi 5G Tablet
                  </h5>
                  <h6 className="price">$1000</h6>
                </div>
                <div className="product-detail">
                  <h5>Brand:</h5>
                  <p>Havels</p>
                </div>
                <div className="product-detail">
                  <h5>Type:</h5>
                  <p>Wathc</p>
                </div>
                <div className="product-detail">
                  <h5>Availabity:</h5>
                  <p>In Stock</p>
                </div>
                <div className="product-detail">
                  <h5>Color:</h5>
                  <Color />
                </div>
                <div className="product-detail">
                  <h5>Size:</h5>
                  <div className="d-flex gap-10">
                    <p>S</p>
                    <p>M</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-images">
                  <img src="images/watch.jpg" alt="watch" />
                </div>
                <div className="compare-product-detail">
                  <h5 className="title">
                    Honor T1 7.0 GB RAM ROM 7Inch With Wifi 5G Tablet
                  </h5>
                  <h6 className="price">$1000</h6>
                </div>
                <div className="product-detail">
                  <h5>Brand:</h5>
                  <p>Havels</p>
                </div>
                <div className="product-detail">
                  <h5>Type:</h5>
                  <p>Wathc</p>
                </div>
                <div className="product-detail">
                  <h5>Availabity:</h5>
                  <p>In Stock</p>
                </div>
                <div className="product-detail">
                  <h5>Color:</h5>
                  <Color />
                </div>
                <div className="product-detail">
                  <h5>Size:</h5>
                  <div className="d-flex gap-10">
                    <p>S</p>
                    <p>M</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-images">
                  <img src="images/watch.jpg" alt="watch" />
                </div>
                <div className="compare-product-detail">
                  <h5 className="title">
                    Honor T1 7.0 GB RAM ROM 7Inch With Wifi 5G Tablet
                  </h5>
                  <h6 className="price">$1000</h6>
                </div>
                <div className="product-detail">
                  <h5>Brand:</h5>
                  <p>Havels</p>
                </div>
                <div className="product-detail">
                  <h5>Type:</h5>
                  <p>Wathc</p>
                </div>
                <div className="product-detail">
                  <h5>Availabity:</h5>
                  <p>In Stock</p>
                </div>
                <div className="product-detail">
                  <h5>Color:</h5>
                  <Color />
                </div>
                <div className="product-detail">
                  <h5>Size:</h5>
                  <div className="d-flex gap-10">
                    <p>S</p>
                    <p>M</p>
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

export default CompareProduct;
