import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";
const Blog = () => {
  return (
    <>
      <Meta title={"Blogs"}></Meta>
      <BreadCrumb title="News" />
      <Container class1="blog-wapper home-wapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By Categories</h3>
              <div>
                <ul className="ps-0 mb-0">
                  <li>Home</li>
                  <li>Our Store</li>
                  <li>Blogs</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blog;
