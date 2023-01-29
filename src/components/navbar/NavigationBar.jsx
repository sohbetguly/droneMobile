import { motion } from "framer-motion";
import React, { useState } from "react";
import { Fade, Nav, Navbar } from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../../images/logo-drone.png";
import classes from "./NavigationBar.module.css";

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container-xxl p-0">
      <div className="bg-dark px-5 ">
        <Navbar className="py-2 justify-content-center">
          <Navbar.Brand className="text-white py-0" as={Link} to="/">
            Free 30-Day Premium Trial
          </Navbar.Brand>
          <Nav className="ms-auto pe-4 d-none d-lg-flex">
            <Nav.Link
              className="text-white ps-2 border-end pe-3 py-0 me-2"
              as="a"
              href="https://status.dronemobile.com/"
            >
              Status
            </Nav.Link>
            <Nav.Link
              className="text-white ps-2 border-end pe-3 py-0 me-2"
              as="a"
              href="https://install.myfirstech.com/"
            >
              Dealer Activation
            </Nav.Link>
            <Nav.Link
              className="text-white ps-2 py-0 me-2"
              as="a"
              href="https://accounts.dronemobile.com/login"
            >
              Log In
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
      <div className="bg-white px-3 px-md-5 my-0 fw-bold ">
        <Navbar expand="lg" className="py-4">
          <Navbar.Brand className="py-0" as={Link} to="/">
            <img
              style={{ maxWidth: "150px" }}
              className="card-img-top"
              src={logo}
              alt="logo"
            />
          </Navbar.Brand>

          <motion.div
            onClick={() => setIsOpen(!isOpen)}
            className="d-block d-lg-none ms-auto"
            whileHover={{
              scale: 1.4,
              transition: { duration: 0.2 },
              cursor: "pointer",
            }}
            whileTap={{
              scale: 1.8,
              borderRadius: "100%",
              opacity: 0.5,
              transition: { duration: 0.1 },
            }}
          >
            {!isOpen ? (
              <GiHamburgerMenu className="fs-4" />
            ) : (
              <MdClose className="fs-4" />
            )}
          </motion.div>
          <Collapse in={isOpen}>
            <div className="d-lg-flex justify-content-end w-100">
              <Nav className="d-lg-flex ms-auto text-truncate">
                {[
                  { title: "How it works", link: "/how-it-works" },
                  { title: "How To Buy", link: "/how-to-buy" },
                  { title: "Subscriptions", link: "/subscriptions" },
                  { title: "Hardware", link: "/hardware" },
                  {
                    title: "Support",
                    link: "https://help.dronemobile.com/s/",
                    isHref: true,
                  },
                  { title: "Find a Dealer", link: "/find-a-dealer" },
                  {
                    title: "Status",
                    link: "https://status.dronemobile.com/",
                    isHref: true,
                    isTrial: true,
                  },
                  {
                    title: "Dealer Activation",
                    link: "https://install.myfirstech.com/",
                    isHref: true,
                    isTrial: true,
                  },
                  {
                    title: "Log In",
                    link: "https://accounts.dronemobile.com/login",
                    isHref: true,
                    isTrial: true,
                  },
                ].map(({ title, link, isHref, isTrial }, index) => {
                  if (isHref)
                    return (
                      <Nav.Link
                        key={link}
                        onClick={() => setIsOpen(false)}
                        className={`${
                          classes.navbarLink
                        }  ps-2 py-3 me-2  bg-md-none ${
                          isTrial && "d-block d-lg-none"
                        }  
                        `}
                        as={"a"}
                        href={link}
                      >
                        {title}
                      </Nav.Link>
                    );
                  else
                    return (
                      <Nav.Link
                        key={link}
                        onClick={() => setIsOpen(false)}
                        className={`${index === 0 && "mt-3 mt-lg-0 "}  ${
                          classes.navbarLink
                        } ps-2 py-3 me-2  bg-md-none`}
                        as={Link}
                        to={link}
                      >
                        {title}
                      </Nav.Link>
                    );
                })}
              </Nav>{" "}
            </div>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default NavigationBar;
