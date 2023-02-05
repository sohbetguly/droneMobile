import { motion } from "framer-motion";
import React from "react";
import { Col, Ratio, Row } from "react-bootstrap";
import { SlArrowDown } from "react-icons/sl";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import image from "../../images/home/home-dronemobile-hero-min.png";
import bgImage from "../../images/layout/orange-sports-car-wallpaper-1440x960_37.jpg";
import classes from "./Layout.module.css";

// import howItWorks from "../../images/home/how-it-works-min.png";
// import howToBuy from "../../images/home/how-to-buy.png";
// import subscriptions from "../../images/home/subscriptions.png";

const dummyData = [
  {
    img: require("../../images/home/how-it-works-min.png"),
    title: "How It Works",
    desc: "Learn how DroneMobile connects you to your car!",
  },
  {
    img: require("../../images/home/how-to-buy.png"),
    title: "How To Buy",
    desc: "Find an expert installer near you.",
  },
  {
    img: require("../../images/home/subscriptions.png"),
    title: "Subscriptions",
    desc: "Flexible plans starting at $3.99/month.",
  },
];

function Home() {
  return (
    <>
      <div
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
      </div>
      <div className="container-xxl bg-white">
        <motion.div className="row mt-3">
          {dummyData.map(({ title, desc, img }) => {
            return (
              <motion.div key={title} className=" col-12 col-md-4 ">
                <div
                  className="bg-light py-5"
                  style={{
                    minWidth: "240px",
                  }}
                >
                  <div className="mb-4">
                    <img
                      className="img-fluid mx-2"
                      style={{ maxHeight: "200px" }}
                      src={img}
                      alt=""
                    />
                  </div>
                  <h3>{title}</h3>
                  <div>
                    <p className="mx-auto" style={{ maxWidth: "190px" }}>
                      {desc}
                    </p>
                  </div>
                  <Link className="btn btn-success" to="/how-it-works">
                    Learn More!
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        <div className="mt-5 ">
          <h1>Watch the Video</h1>
          <SlArrowDown className="text-success fs-1 my-3" />
          <div
            style={{
              maxWidth: "850px",
            }}
            className="m-auto"
          >
            <Ratio aspectRatio="16x9">
              <iframe
                src={require("../../videos/DroneMobile 4.0 Smartphone Remote Starter + Car Alarm + GPS Tracker.mp4")}
                frameBorder="0"
              ></iframe>
            </Ratio>
          </div>
        </div>
        <div className="row bg-secondary text-white mt-5">
          <div
            className={classes.manBgImage + " col-6 d-none d-md-block"}
          ></div>
          <div className="col-12 col-md-6">
            <div
              style={{ maxWidth: "400px" }}
              className="my-4 text-center text-md-start m-auto ms-md-auto"
            >
              <p className="fs-1">Top-Rated Remote Start App</p>
              <div className="fs-2 my-2">
                <AiFillStar className="text-warning" />
                <AiFillStar className="text-warning" />
                <AiFillStar className="text-warning" />
                <AiFillStar className="text-warning" />
                <AiFillStar className="text-warning" />
              </div>
              <p className="fs-4">
                "I love the fact that I can start my car from my phone at any
                given time."
              </p>
              <div className="d-flex justify-content-center justify-content-md-start">
                <div
                  style={{
                    maxWidth: "200px",
                  }}
                  className="border-end pe-3"
                >
                  <a href="https://apps.apple.com/us/app/dronemobile/id380549030">
                    <img
                      src={require("../../images/home/apple-store-badge.png")}
                      alt="App store"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div
                  style={{
                    maxWidth: "210px",
                  }}
                  className=" ps-3"
                >
                  <a href="https://play.google.com/store/apps/details?id=com.whiz.droneapp&hl=en_US&gl=US">
                    <img
                      src={require("../../images/home/google-play-badge.png")}
                      alt="App store"
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 g-3">
            <div className="mx-auto p-4 bg-light ">
              <div
                style={{
                  maxWidth: "300px",
                }}
                className="mx-auto"
              >
                <img
                  src={require("../../images/home/Security-module-500x351.png")}
                  alt="Security"
                  className="img-fluid w-auto"
                />
              </div>
              <h3>Vehicle Security</h3>
              <p
                className="mx-auto"
                style={{
                  maxWidth: "300px",
                }}
              >
                Upgrade any car alarm with unlimited range control and security
                alerts.
              </p>
              <Link className="btn btn-success" to="/how-it-works">
                Learn More!
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-6 g-3">
            <div className="mx-auto p-4 bg-light ">
              <div
                style={{
                  maxWidth: "300px",
                }}
                className="mx-auto"
              >
                <img
                  src={require("../../images/home/Tracking-module-500x351.png")}
                  alt="Security"
                  className="img-fluid "
                />
              </div>
              <h3>Track Your Vehicle</h3>
              <p
                className="mx-auto"
                style={{
                  maxWidth: "300px",
                }}
              >
                Upgrade any car alarm with unlimited range control and security
                alerts.
              </p>
              <Link className="btn btn-success" to="/how-it-works/gps-tracking">
                Learn More!
              </Link>
            </div>
          </div>
        </div>
        <div>
          <p className="fs-2">DroneMobile Blog</p>
          <div className="row">
            <div className="col-12 col-lg-3 col-md-6">asdf</div>
            <div className="col-12 col-lg-3 col-md-6">asdf</div>
            <div className="col-12 col-lg-3 col-md-6">asdf</div>
            <div className="col-12 col-lg-3 col-md-6">asdf</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
