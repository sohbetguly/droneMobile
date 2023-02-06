import React from "react";

function FooterLinks() {
  return (
    <li className="row">
      {!isHref ? (
        <Link className="text-decoration-none  text-start p-0" to={link}>
          <motion.p
            className="p-0 m-0"
            initial={{
              color: "white",
            }}
            whileHover={{
              fontWeight: "bold",
            }}
          >
            {" "}
            {title}
          </motion.p>
        </Link>
      ) : (
        <a className="text-decoration-none  text-start p-0" href={link}>
          <motion.p
            className="p-0 m-0"
            initial={{
              color: "white",
            }}
            whileHover={{
              fontWeight: "bold",
            }}
          >
            {" "}
            {title}
          </motion.p>
        </a>
      )}
    </li>
  );
}

export default FooterLinks;
