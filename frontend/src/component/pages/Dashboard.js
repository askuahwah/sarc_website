// Dashboard.js
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import style from "./style.module.css";
import axios from "axios";
import ProfileImage from "../../assets/profile.png";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [attendedEvents, setAttendedEvents] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    const fetchAttendedEvents = async () => {
      console.log(user.user_id);
      try {
        
        if (!user) {
      
          window.alert("You are not authenticated. Please log in.");
          history("/login");
        } else {
          const response = await axios.get(
            `http://localhost:8000/event/events/`
          );

          const filteredEvents = response.data.filter(
            (event) => event.attendees && event.attendees.includes(user.user_id)
          );

          console.log("Attended Events:", filteredEvents);
          setAttendedEvents(filteredEvents);
        }
      } catch (error) {
        console.error("Error fetching attended events:", error);
      }
    };
    fetchAttendedEvents();
  }, [user, history]);

  return (
    <div className={style.dashboard_main}>
      {user && (
        <div className={style.dashboard_profile}>
          <img src={ProfileImage} alt="profile" />
          <div className={style.profile}>
            <p>
              <span>Username: </span> {user.username}
            </p>
            <p>
              <span>Email: </span> {user.email}
            </p>
          </div>
        </div>
      )}    
      <div className={style.event}>
        <h2>Attended Events</h2>
        {attendedEvents.map((event) => (
          <div key={event.id} className={style.event_a}>
            <img src={event.image} alt="" />
            <p>{event.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
