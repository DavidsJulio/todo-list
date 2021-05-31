import classes from "./Footer.module.css";
import React from "react";
import linkedInImg from "../../assets/linkedin.svg";
import gitImg from "../../assets/github.svg";

function Footer() {
  return (
    <footer className={classes.footer}>
      <p>Created & Design by David Júlio</p>
      <div className={classes.links}>
        <a href="https://www.linkedin.com/in/davidsjulio97/">
          <img src={linkedInImg} alt="Linkedin" />
        </a>
        <a href="https://github.com/DavidsJulio">
          <img src={gitImg} alt="Github" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

/*
<div>
  Ícones feitos por{" "}
  <a
    href="https://www.flaticon.com/br/autores/roundicons"
    title="Roundicons"
  >
    Roundicons
  </a>{" "}
  from{" "}
  <a href="https://www.flaticon.com/br/" title="Flaticon">
    www.flaticon.com
  </a>
</div>
 */
