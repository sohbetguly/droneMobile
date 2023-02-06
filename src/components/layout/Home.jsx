import { motion } from "framer-motion";
import React from "react";
import { Col, Ratio, Row } from "react-bootstrap";
import { SlArrowDown } from "react-icons/sl";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import image from "../../images/home/home-dronemobile-hero-min.png";
import bgImage from "../../images/layout/orange-sports-car-wallpaper-1440x960_37.jpg";
import classes from "./Layout.module.css";
import Button from "./Button";

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
          " text-white d-flex justify-content-center px-4 px-md-5"
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
            <Button title="How it works" link="/how-it-works" />
          </Col>
          <Col sm="5" className="g-5">
            <img className="img-fluid" src={image} alt="" />{" "}
          </Col>
        </Row>
      </div>
      <div className="bg-white">
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
        <div className="row bg-secondary text-white mt-5 m-0">
          <div
            className={classes.manBgImage + " col-6 d-none d-md-block"}
          ></div>
          <div className="col-12 col-md-6 ">
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
        <div className="row px-3">
          <div className="col-12 col-md-6">
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
          <div className="col-12 col-md-6">
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
        <div className="my-4">
          <p className="fs-2">DroneMobile Blog</p>
          <div className="row px-3">
            {[
              {
                img: require("../../images/home/blog/dronemobile-custom-control-screen-300x200.jpg"),
                title:
                  "How Can I Remote Start My Car with My Phone? (Updated 2023)",
                desc: "DroneMobile’s remote start system adds comfort and…",
                date: "Jan 10, 2023",
                link: "blog/start-my-car-with-my-phone",
              },
              {
                img: require("../../images/home/blog/Drone-subscriptions-thumb-300x169.jpg"),
                title: "How to Buy A DroneMobile Subscription",
                desc: "Fall is upon us, which means frost will soon be (or maybe…",
                date: "Jan 05, 2023",
                link: "blog/start-my-car-with-my-phone",
              },
              {
                img: require("../../images/home/blog/dronemobile-diy-installation-300x214.jpg"),
                title: "Can I Install DroneMobile Myself?",
                desc: "If you're like us, you might be an avid do-it-yourselfer.…",
                date: "Sep 26, 2022",
              },
              {
                img: require("../../images/home/blog/car-sheild-300x180.jpg"),
                title: "What is the Best Car Alarm in 2022?",
                desc: "Car alarms need to be faster and smarter. That is why…",
                date: "Jul 29, 2022",
              },
            ].map(({ title, desc, date, link, img }) => (
              <div
                key={title}
                className={
                  classes.alignStrech + " col-12 col-lg-3 col-md-6 text-start"
                }
              >
                <div className="border d-flex flex-column h-100 align-items-start ">
                  <Ratio aspectRatio="16x9">
                    <Link to="#" className="overflow-hidden">
                      <img className=" w-100" src={img} alt="" />
                    </Link>
                  </Ratio>
                  <div className="px-3 flex-grow-1 ">
                    <p className="text-muted fs-6">{date}</p>
                    <h4>{title}</h4>
                    <p className="fs-6">{desc}</p>
                  </div>
                  <Link
                    className={
                      classes.alignBottom +
                      " btn text-success fw-bold mt-auto px-3"
                    }
                    to={link}
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <Link className="btn btn-success fw-bold my-4" to={"/asdf"}>
            More from the blog
          </Link>
        </div>
        <div className=" text-bg-success p-3 m-0 ">
          <h3
            className={
              classes.alignBottom + " fw-normal m-0 d-inline-block me-4 me-sm-0"
            }
          >
            Find an Authorized Retailer Today!
          </h3>
          <Button
            className={classes.alignBottom + " mt-2 mt-sm-0 ms-4"}
            title="Find a Dealer"
            link="/find-a-dealer"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
