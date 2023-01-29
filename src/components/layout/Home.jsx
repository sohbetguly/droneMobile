import { motion } from "framer-motion";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import image from "../../images/home/home-dronemobile-hero-min.png";
import bgImage from "../../images/layout/orange-sports-car-wallpaper-1440x960_37.jpg";
import classes from "./Layout.module.css";

function Home() {
  return (
    <>
      <motion.div
        initial={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${bgImage});`,
        }}
        className={
          classes.carBgImg +
          " container-xxl text-white d-flex justify-content-center px-4 px-md-5"
        }
      >
        <Row
          style={{ maxWidth: "1000px" }}
          className="d-flex justify-content-center align-items-center my-5 px-lg-4 flex-column flex-sm-row"
        >
          <Col sm="7" className="text-center text-sm-start g-5">
            <div className="fs-sm-5 h1 fw-bold ">
              Remote Start from Anywhere
            </div>
            <p className="fs-5">
              Make your car smarter and safer with DroneMobile. Learn more about
              how DroneMobile keeps you safe and comfortable on the road.
            </p>
            <motion.div
              className="btn p-0 "
              initial={{
                color: "white",
                backgroundColor: "ButtonText",
                borderRadius: "3px",
                boxShadow: "0 0 0 2px white",
              }}
              whileHover={{
                color: "ButtonText",
                backgroundColor: "white",
              }}
              style={{
                transition: "all .0000001s",
              }}
            >
              <Link
                style={{ color: "inherit" }}
                to="/how-it-works"
                className="btn fw-bold"
              >
                How it works
              </Link>
            </motion.div>
          </Col>
          <Col sm="5" className="g-5">
            <img className="img-fluid" src={image} alt="" />{" "}
          </Col>
        </Row>
      </motion.div>
      <div className="container-xxl">
        <motion.div
          style={{
            height: "200px",
          }}
          className="p-2 column bg-danger"
        >
          <motion.div className="row ">
            <motion.div className="bg-success">asdf</motion.div>
            <motion.div className="bg-success">asdf</motion.div>
            <motion.div className="bg-success">asdf</motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default Home;
