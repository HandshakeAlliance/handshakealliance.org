import React, { useState, useEffect } from 'react';
import moment from "moment";

export default function EventsComponent() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  // TODO: create an empty state

  // TODO: move this to a hook
  useEffect(() => {
    setLoading(true);

    function init() {
      window.gapi.client
        .init({ apiKey: process.env.REACT_APP_GOOGLE_API_KEY })
        .then(() => {
          return window.gapi.client.request({
            path: `https://www.googleapis.com/calendar/v3/calendars/${process.env.REACT_APP_CALENDAR_ID}/events`
          });
        })
        .then(res => {
          if (res.result.items) {
            setLoading(false);
            setEvents(res.result.items.sort((a, b) => (
              moment(a.start.dateTime).format("YYYYMMDD") -
              moment(b.start.dateTime).format("YYYYMMDD")
            )));
          } else {
            // TODO: set empty state to true
            console.log("Error: no events have been scheduled yet");
          }
        });
    }

    window.gapi.load("client", init);
  }, []);

  // TODO: remove when section is complete
  console.log(events);

  return (
    <>
      {loading ? <div>Loading...</div> : <div>{events[0]?.start.dateTime}</div>}
    </>
  );
}