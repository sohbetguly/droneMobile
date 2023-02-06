import React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";

const linksFooter = [
  [
    { title: "DRONEMOBILE", isContainer: true },
    { title: "Home", link: "/" },
    { title: "How It Works", link: "/how-it-works" },
    { title: "How To Buy", link: "/how-to-buy" },
    { title: "Subscriptions", link: "/subscriptions" },
    { title: "Blog", link: "/blog" },
    { title: "Videos", link: "/vidoes" },
  ],
  [
    { title: "HARDWARE", isContainer: true },
    { title: "Drone X1R", link: "/products/x1r-lte" },
    { title: "Drone X1 MAX", link: "/products/x1max-lte" },
    { title: "Legacy", link: "/products/discontinued" },
  ],
  [
    { title: "SUPPORT", isContainer: true },
    { title: "Find a Dealer", link: "/find-a-dealer" },
    {
      title: "Help center",
      link: "https://help.dronemobile.com/s/",
      isHref: true,
    },
    {
      title: "Status",
      link: "https://status.dronemobile.com/",
      isHref: true,
    },
    {
      title: "Contact",
      link: "https://www.dronemobile.com/contact",
      isHref: true,
    },
    {
      title: "Login",
      link: "https://accounts.dronemobile.com/login",
      isHref: true,
    },
    {
      title: "Promotions",
      link: "https://www.dronemobile.com/promotions-discounts",
      isHref: true,
    },
  ],
];

function Footer() {
  return (
    <footer className="text-bg-dark px-4 ">
      <div className="d-flex flex-column justify-content-center mx-md-5 p-md-5 py-4">
        <div className="row row-cols-1 row-cols-lg-4">
          {linksFooter.map((footerLinks, i) => (
            <ul key={footerLinks[i].title} className="col-lg-3 list-unstyled">
              {footerLinks.map(({ title, link, isHref, isContainer }, i) =>
                isContainer ? (
                  <li key={title} className="row text-center text-lg-start m-0">
                    <h5 className="p-0">{title}</h5>
                  </li>
                ) : !isHref ? (
                  <li>
                    <Link
                      key={link}
                      className="text-decoration-none text-center text-lg-start p-0 "
                      to={link}
                    >
                      <motion.p
                        className="p-0 m-0"
                        initial={{
                          color: "white",
                        }}
                        whileHover={{
                          // fontWeight: "bold",
                          color: "red",
                        }}
                      >
                        {title}
                      </motion.p>
                    </Link>
                  </li>
                ) : (
                  <li>
                    {" "}
                    <a
                      key={link}
                      className="text-decoration-none text-center text-lg-start p-0"
                      href={link}
                    >
                      <motion.p
                        className="p-0 m-0"
                        initial={{
                          color: "white",
                        }}
                        whileHover={{
                          // fontWeight: "bold",
                          color: "red",
                        }}
                      >
                        {" "}
                        {title}
                      </motion.p>
                    </a>
                  </li>
                )
              )}
            </ul>
          ))}
          <div className="col-lg-3">
            {/* <div className="d-flex justify-content-center justify-content-md-start"> */}
            <div>
              <a href="https://apps.apple.com/us/app/dronemobile/id380549030">
                <img
                  style={{
                    height: "35px",
                    width: "110px",
                  }}
                  src={require("../../images/home/apple-store-badge.png")}
                  alt="App store"
                  className="img-fluid mt-2 me-2"
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.whiz.droneapp&hl=en_US&gl=US">
                <img
                  style={{
                    height: "35px",
                    width: "110px",
                  }}
                  src={require("../../images/home/google-play-badge.png")}
                  alt="Play market"
                  className="img-fluid mt-2 me-2"
                />
              </a>
            </div>
          </div>
        </div>{" "}
      </div>
    </footer>
  );
}

export default Footer;
