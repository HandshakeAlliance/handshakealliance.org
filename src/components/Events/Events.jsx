import React, { useState, useEffect } from "react";
import { Flex, Spacer } from "@urkellabs/ucl";
import styled from "styled-components";
import moment from 'moment-timezone';

// Components
import SectionWrapper from "components/shared/SectionWrapper";
import SectionHeader from "components/shared/SectionHeader";
import AddToCalendarButton from "components/Events/AddToCalendarButton";

// Images
import Calendar from "components/Logos/Calendar";

const CalendarWrapper = styled.div`
  height: 250px;
  width: 750px;
`;

const InfoWrapper = styled.div`
  width: 750px;
`;

// TODO: move to a hooks folder
const useIsMounted = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
};

// TODO: move to a hooks folder
const useEventAsync = (componentIsMounted) => {
  const [event, setEvent] = useState(null);
  useEffect(() => {
    const init = () => {
      window.gapi.client
        .init({ apiKey: process.env.REACT_APP_GOOGLE_API_KEY })
        .then(() => {
          return window.gapi.client.request({
            path: `https://www.googleapis.com/calendar/v3/calendars/${process.env.REACT_APP_CALENDAR_ID}/events`
          });
        })
        .then(res => {
          if (res.result.items) {
            let events = res.result.items.sort((a, b) => (
              moment(a.start.dateTime).format("YYYYMMDD") -
              moment(b.start.dateTime).format("YYYYMMDD")
            ));
            setEvent(events[0]);
          } else {
            console.log("Error: no events have been scheduled yet")
          }
        });
    }

    window.gapi.load("client", init);
  }, [componentIsMounted]);

  if (componentIsMounted) {
    return event;
  }
};

export default function EventsComponent() {
  const componentIsMounted = useIsMounted();
  const event = useEventAsync(componentIsMounted);

  // TODO: need a legit loading spinner
  return (
    <SectionWrapper>
      <Flex columns align="center">
        <SectionHeader>Alliance Meeting</SectionHeader>
        <CalendarWrapper>
          <Calendar />
        </CalendarWrapper>
        <Spacer px={50} />
        <InfoWrapper>
          {!event ? <div>...Loading</div> : <AddToCalendarButton event={event} />}
        </InfoWrapper>
      </Flex>
    </SectionWrapper>
  );
}