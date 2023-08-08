import React, { useEffect } from "react";
import "../styles/sideNav2.css";

const SideNav2 = () => {
  useEffect(() => {
    const handleNavButtonClick = (e) => {
      e.preventDefault();
      document.body.classList.toggle("nav-visible");
    };

    const navButton = document.querySelector(".nav-button");
    navButton.addEventListener("click", handleNavButtonClick);

    return () => {
      navButton.removeEventListener("click", handleNavButtonClick);
    };
  }, []);

  return (
    <div>
      <header>
        <button
          aria-label="Toggle menu"
          className="nav-button button-lines button-lines-x close"
          role="button"
          type="button"
        >
          <span className="lines"></span>
        </button>
      </header>
      <main>
        <div className="container">
          <h1>Hello World</h1>
        </div>
      </main>
      <nav className="nav-wrapper">
        <ul className="nav">
          <li className="active">
            <a>Page 1</a>
          </li>
          <li>
            <a href="#">Page 2</a>
          </li>
          <li>
            <a href="#">Page 3</a>
          </li>
          <li>
            <a href="#">Page 4</a>
          </li>
        </ul>
        <span className="nav-marker color-1"></span>
      </nav>
    </div>
  );
};

export default SideNav2;
