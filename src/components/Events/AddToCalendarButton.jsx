import React from "react";
import { css } from "emotion";
import styled from "@emotion/styled";
import moment from "moment-timezone";
import AddToCalendarHOC from 'react-add-to-calendar-hoc';

const ButtonWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const componentStyles = css`
  width: 100%;
`;

const buttonClassName = css`
  background: #f2f2f2;
  color: black;
  padding: 10px;
  border-radius: 5px;
  border-style: none;
  border: 2px solid black;
  cursor: pointer;
  min-width: 160px;
`;

const dropdownStyles = css`
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px hsla(0, 0%, 0%, 0.2);
  z-index: 1;
`;

const linkStyles = css`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover { background-color: #ddd }
`;

const Button = ({ children, onClick }) => {
  return (
    <button className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
}

const Dropdown = ({ children }) => {
  return (
    <div className={dropdownStyles}>
      {children}
    </div>
  );
}

const MakeEvent = ({ event }) => {
  const startDatetime = moment(event.start.dateTime).utc();
  const endDatetime = moment(event.end.dateTime).utc();
  // const duration = moment.duration(endDatetime.diff(startDatetime)).as("hours");

  // Note: hard coding duration for the time being until PR gets merged
  // in 'react-add-to-calendar-hoc'
  const calendarEvent = {
    description: event.summary,
    duration: "0015",
    endDatetime: endDatetime.format("YYYYMMDDTHHmmssZ"),
    location: "TBD",
    startDatetime: startDatetime.format("YYYYMMDDTHHmmssZ"),
    title: "Handshake Alliance Meeting",
  }

  const AddToCalendarDropdown = AddToCalendarHOC(Button, Dropdown);

  return (
    <AddToCalendarDropdown
      className={componentStyles}
      linkProps={{
        className: linkStyles,
      }}
      event={calendarEvent}
      filename="handshake_meeting"
    />
  );
}

export default function AddToCalendarButton({ event }) {
  return (
    <ButtonWrapper>
      <MakeEvent event={event} />
    </ButtonWrapper>
  );
}
