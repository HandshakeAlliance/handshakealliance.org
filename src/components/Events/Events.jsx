import React, { useState, useEffect } from "react";
import { Flex, Spacer, Header } from "@urkellabs/ucl";
import styled from "styled-components";
import moment from "moment";

// Components
import SectionWrapper from "components/shared/SectionWrapper";
import SectionHeader from "components/shared/SectionHeader";

// Images
import Calendar from "components/Logos/Calendar";

const CalendarWrapper = styled.div`
  height: 250px;
  width: 750px;
`;

const InfoWrapper = styled.div`
  width: 750px;
`;

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
    <SectionWrapper>
      <Flex columns align="center">
        <SectionHeader>Monthly Meeting</SectionHeader>
        <CalendarWrapper>
          <Calendar />
        </CalendarWrapper>
        <Spacer px={50} />
        <InfoWrapper>
          {loading ? <div>Loading...</div> : <Header xsmall bold>{moment(events[0]?.start.dateTime).utc().format("dddd, MMMM Do YYYY, h:mm:ss A")}</Header>}
        </InfoWrapper>
      </Flex>
    </SectionWrapper>
  );
}