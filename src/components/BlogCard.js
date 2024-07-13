import React from "react";
import { Link, useLocation } from "react-router-dom";
const BlogCard = () => {
  const { pathname } = useLocation();
  const columnClasses = `${pathname === "/blogs" ? "col-6" : "col-3"} `;
  return (
    <div className={columnClasses}>
      <div className="blog-card mb-3">
        <div className="card-image w-100">
          <img src="images/blog-1.jpg" className="img-fluid" alt="blog1" />
        </div>
        <div className="blog-content">
          <p className="date">12 June,2024</p>
          <h5 className="title">A beautiful sunday morning renaissance</h5>
          <p className="desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga unde
            tempore commodi.{" "}
          </p>
          <Link to="" className="button">
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
