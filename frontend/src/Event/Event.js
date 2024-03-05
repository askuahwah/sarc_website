// EventList.js
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import style from "./style.module.css";
import AuthContext from "../context/AuthContext";

const EventList = () => {
  const { user } = useContext(AuthContext);
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [timeFilter, setTimeFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/event/events/")
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleAttendance = async (eventId) => {
    try {
      const jwtToken = JSON.parse(localStorage.getItem("authTokens"));

      if (
        events.find(
          (event) => event.id === eventId && event.attendees.includes(user.id)
        )
      ) {
        window.alert("You have already marked attendance for this event!");
        return;
      }

      await axios.post(
        `http://localhost:8000/event/events/mark-attendance/${eventId}`,
        null,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwtToken.access}`,
          },
        }
      );


      setEvents((prevEvents) =>
        prevEvents.map((event) =>
          event.id === eventId
            ? { ...event, attendees: [...event.attendees, user.id] }
            : event
        )
      );

      window.alert("Attendance marked successfully!");
    } catch (error) {
      console.error("Error updating attendance:", error);
    }
  };

  const filteredEvents = events.filter((event) => {
    const titleMatch = event.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const locationMatch = event.location
      .toLowerCase()
      .includes(locationFilter.toLowerCase());
    const timeMatch = event.time
      .toLowerCase()
      .includes(timeFilter.toLowerCase());

    return titleMatch && locationMatch && timeMatch;
  });

  return (
    <div className={style.eventlist_page}>
      <p className={style.event_list_title}>Event List</p>

      <div className={style.event_search}>
        <input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={style.search_input}
        />

        <input
          type="text"
          placeholder="Filter by location..."
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          className={style.search_input}
        />

        <input
          type="text"
          placeholder="Filter by time..."
          value={timeFilter}
          onChange={(e) => setTimeFilter(e.target.value)}
          className={style.search_input}
        />
      </div>
      <ul>
        {filteredEvents.map((event) => (
          <div key={event.title}>
            <div className={style.event_list}>
              <img src={event.image} alt="event_image" />
              <div className={style.event_list_header}>
                <p className={style.event_list_header_title}>{event.title}</p>
                <p>{event.description}</p>
                <div className={style.event_list_location}>
                  <p>
                    <span>Location: </span>
                    {event.location}
                  </p>
                  <p>
                    <span>Date: </span>
                    {event.date}
                  </p>
                  <p>
                    <span>Time: </span>
                    {event.time}
                  </p>
                </div>
                <div className={style.attendance_title}>
                  <span>Attendance: </span>
                  <input
                    type="checkbox"
                    checked={event.attendees.includes(user.id)}
                    onChange={() => handleAttendance(event.id)}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
