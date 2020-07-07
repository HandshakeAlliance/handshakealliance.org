import React, { useState, useEffect } from 'react';
import moment from "moment";

export default function EventsComponent() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = () => {
    function start() {
      window.gapi.client
        .init({
          apiKey: process.env.REACT_APP_GOOGLE_API_KEY
        })
        .then(() => {
          return window.gapi.client.request({
            path: `https://www.googleapis.com/calendar/v3/calendars/${process.env.REACT_APP_CALENDAR_ID}/events`
          });
        })
        .then(res => {
          res.result.items.length > 0 ? (
            setEvents(res.result.items.sort((a, b) => (
              moment(a.start.dateTime).format("YYYYMMDD") -
              moment(b.start.dateTime).format("YYYYMMDD")
            )))
          ) : (
              console.log("Err: there are no events this week")
            );
        });
    }
    window.gapi.load("client", start);
  };

  console.log(events);

  return (
    <>
      <div>Events Section</div>
    </>
  );
}