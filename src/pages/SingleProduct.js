import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
const SingleProduct = () => {
  const [orderedProduct, setOrderedProduct] = useState(true);
  return (
    <>
      <Meta title={"Product Name"}></Meta>
      <BreadCrumb title="Product Name" />
      <div className="main-product-wapper home-wapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6"></div>
          </div>
        </div>
        <div className="desciption-wapper py-5 home-wapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div className="bg-white p-3">
                  <h4>Description</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium natus odio quibusdam perspiciatis est incidunt
                    explicabo voluptatum adipisci, recusandae autem quia dicta!
                    Magni alias, incidunt ex aliquid enim dolore a?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="review-wapper py-5 home-wapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div className="review-inner-wapper">
                  <div className="review-head d-flex justify-content-between align-items-end">
                    <div>
                      <h4 className="mb-2">Customer Review</h4>

                      <div className="d-flex gap-10 align-items-center">
                        <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <p className="mb-0">Based on 2 reviews</p>
                      </div>
                    </div>
                    {orderedProduct && (
                      <div>
                        <a
                          href="#d"
                          className="text-dark text-decoration-underline"
                        >
                          Wirte a Review
                        </a>
                      </div>
                    )}
                  </div>
                  .review-form
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="popular-wapper py-5 home-wapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <h3 className="section-heading">Our Popular Products</h3>
              </div>
              <div className="row">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SingleProduct;
