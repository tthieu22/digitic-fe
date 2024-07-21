import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import Container from "../components/Container";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"}></Meta>
      <BreadCrumb title="Dynamic Blog Name" />
      <Container class1="blog-wapper home-wapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-10">
                <IoArrowBackOutline />
                Go back to blogs
              </Link>
              <h3 className="title">A beautiful Sunday Morning Renaissance</h3>
              <img src="images/blog-1.jpg" alt="blog" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                accusamus veritatis ipsa dignissimos numquam nesciunt earum
                vitae totam, repellat dolore labore dicta temporibus quaerat
                consequuntur quisquam, eum odio voluptas esse! Atque expedita
                est praesentium recusandae rerum molestias placeat assumenda
                illo. Voluptatibus illo quis exercitationem beatae tempora qui
                veritatis rerum ad, quae est nostrum hic blanditiis voluptates
                quibusdam voluptate voluptas nisi! Vitae quo autem obcaecati
                reiciendis eius voluptate numquam ad non exercitationem quis,
                officiis, aspernatur a repudiandae et nisi consectetur nesciunt
                provident corrupti quod sapiente fugit quaerat ipsa quasi?
                Animi, quas. Quibusdam fuga assumenda vitae officiis, dolores
                consequatur, exercitationem laudantium tempora deserunt nulla
                eum sint, et harum optio. Modi, dolor expedita! Distinctio,
                modi. Debitis accusantium dolorem voluptas provident expedita!
                Magni, minima. Est fugit ex nobis itaque alias sit corrupti, et
                esse eius eveniet architecto libero qui, molestiae, officiis
                nulla doloribus asperiores! Molestias, odit beatae perspiciatis
                vitae voluptas esse impedit nobis eum!
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
