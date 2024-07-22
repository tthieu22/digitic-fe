import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import wish from "../images/wish.svg";
const ProductCard = ({ grid }) => {
  const { pathname } = useLocation();
  const columnClasses = `col-${pathname === "/store" ? grid : 3} gr-${grid}`;
  const disdesc = ` description ${grid === 12 ? "d-block" : "d-none"}`;
  return (
    <div className={columnClasses}>
      <Link to="/product/:id" className="w-100">
        <div className="product-card position-relative mb-4">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent ">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-images">
            <img src="images/watch.jpg" alt="product card" />
            <img src="images/headphone.jpg" alt="product card" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphone bulk 10 pack multi colored student
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={disdesc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cum
              dolor doloribus amet ut quia sunt repudiandae temporibus numquam
              quae.
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute ">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent ">
                <img src="images/prodcompare.svg" alt="prodcompare" />
              </button>

              <button className="border-0 bg-transparent ">
                <img src="images/view.svg" alt="add-cart" />
              </button>
              <button className="border-0 bg-transparent ">
                <img src="images/add-cart.svg" alt="add-cart" />
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
