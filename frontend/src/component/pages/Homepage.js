import React from "react";
import style from "./style.module.css";

const Homepage = () => {
  return (
    <div className={style.home_main}>
      <div className={style.header_a}>
        <p>WELOME TO SARC</p>
      </div>
      <div className={style.hero_Section}>
        <section className={style.hero}>
          <p>Bridging Passion and Progress!</p>
          <p>
            Uniting Alumni, Fostering Legacy: SARC IIT Bombay - Bridging Past
            and Present Through Inspiring Events and Connections.
          </p>
        </section>
        <div className={style.about}>
          <h2>About Us</h2>
          <p>
            Student Alumni Relations Cell (SARC) was established in 2008 to
            convey and harness the connection of the alumni with the institute.
            It is a student-run body and a crucial part of the Dean Alumni and
            Corporate Relations (Dean ACR) Office, whose primary goal is to
            promote closer connections between current students and alumni,
            fostering a collaborative atmosphere of ideas, respect, knowledge,
            and values that reflect the mission of our institution.
          </p>
        </div>
      </div>
      <div className={style.footer}>
        <p>&copy; 2024 SARC</p>
      </div>
    </div>
  );
};

export default Homepage;
