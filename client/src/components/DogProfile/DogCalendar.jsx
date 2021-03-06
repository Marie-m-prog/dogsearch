import React from "react";
import './DogCalendar.scss';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';

import { isSameDay, parseISO } from "date-fns";

const DogCalendar = ({dates, unavailable}) => {
  const [calendar, setCalendar] = React.useState({ 
    date: '', 
    message: 'Please check the calendar to see if the dog is available.',
    available: true,
    video: false,
    meeting: false,
    chat: false,
    book: false,
    buttons: false,
  });
  const disabledDates = unavailable;
  const availableDates = dates;

  const onClickDay = (value, event) => {
    const day = value.toDateString()
    if(event.currentTarget.classList.contains('calendar__unavailable')){
      setCalendar({ 
        ...calendar,
        date: day, 
        message: 'The dog is unavailable this day.',
        available: false,
        buttons: true
      })
    } else if(event.currentTarget.classList.contains('calendar__available')){
      setCalendar({ 
        ...calendar,
        date: day, 
        message: 'The dog is available this day.',
        available: true,
        buttons: true
      })
    } else if(event.currentTarget.classList.contains('calendar__notset')){
      setCalendar({ 
        ...calendar,
        date: day, 
        message: 'No information', 
        available: true,
        buttons: true
      })
    }
  }

  const tileClassName = ({ date, view }) => {
    if(view === 'month') {
      if(disabledDates.find(dDate => isSameDay(parseISO(dDate), date))) {
        return 'calendar__unavailable'
      } else if (availableDates.find(aDate => isSameDay(parseISO(aDate), date))) {
        return 'calendar__available'
      } else {
        return 'calendar__notset'
      }
    }
  }

  const messageType = (e) => {
    if(e.currentTarget.id === 'videotype'){
      setCalendar({
        ...calendar,
        video: true,
        chat: false,
        meeting: false,
        book: false
      })
    }
    if(e.currentTarget.id === 'messagetype'){
      setCalendar({
        ...calendar,
        chat: true,
        video: false,
        meeting: false,
        book: false
      })
    }
    if(e.currentTarget.id === 'meetingtype'){
      setCalendar({
        ...calendar,
        meeting: true,
        video: false,
        chat: false,
        book: false
      })
    }
    if(e.currentTarget.id === 'book'){
      setCalendar({
        ...calendar,
        book: true,
        video: false,
        chat: false,
        meeting: false
      })
    }
  }

  return (
    <section className="content">
      <Calendar  tileClassName={tileClassName} onClickDay={onClickDay}/>
      <section className="calendar__instructions">
        <article className="calendar__instructions__item calendar__instructions--available">
          <article className="calendar__instructions__item__box calendar__instructions__item__box--available"></article>
          <h5>Available</h5>
        </article>
        <article className="calendar__instructions__item  calendar__instructions--booked">
          <article className="calendar__instructions__item__box calendar__instructions__item__box--booked"></article>
          <h5>Unavailable</h5>
        </article>
        <article className="calendar__instructions__item  calendar__instructions--unknown">
          <article className="calendar__instructions__item__box calendar__instructions__item__box--unknown"></article>
          <h5>Not set</h5>
        </article>
      </section>
      <section className="calendar__day">
        <article className="calendar__day__info">
          <article className="calendar__day__info__text">
            <h3>{calendar.date}</h3>
            <p>{calendar.message}</p>
          </article>
        </article>
        
        {calendar.buttons ? 
        <section className="calendar__day__contact">
          <article className={`contact__icon contact__icon--message contact__icon--${calendar.available}`}
                    onClick={messageType}
                    id="messagetype">
            <MailOutlineIcon/>
            <h5>Send message</h5>
          </article>
          <article className={`contact__icon contact__icon--${calendar.available}`}
                    onClick={messageType}
                    id="meetingtype">
            {calendar.available ? <AccessTimeIcon/> : <HighlightOffOutlinedIcon/> }
            <h5>Request meeting</h5>
          </article>
          <article className={`contact__icon contact__icon--${calendar.available}`}
                    onClick={messageType}
                    id="book">
            <PlaylistAddCheckIcon/>
            <h5>Adopt dog</h5>
          </article>
        </section>         
          : null}
        {calendar.available ? 
          <section className="request">
            {calendar.chat ? 
            <>
              <h3>Send message:</h3>
              <textarea name="" id="" className="request__input request__input--message" placeholder="Send a message"></textarea> 
              <input type="button" value="Send" className="request__button" />
            </>
            : null }

            {calendar.meeting ?
            <>
            <h3>Request meeting:</h3>
            <p>{calendar.date}</p>
            <article className="request__smallinput">
              <article className="request__smallinput__item">
                <label htmlFor="meetingtype">Meeting type:</label>
                <select name="meetingtype" id="meetingtype" className="request__input--small">
                  <option value="">Online</option>
                  <option value="">Office</option>
                  <option value="">Location</option>
                </select>
              </article>
              <article className="request__smallinput__item">
                <label htmlFor="appt">Time:</label>
                <input type="time" id="appt" name="appt" min="09:00" max="18:00"  className="request__input--small"/>
              </article>
            </article>
              <label htmlFor="messageinput">Message:</label>
              <textarea name="messageinput" id="" className="request__input request__input--message" placeholder="Provide meeting request details"></textarea> 
              <input type="button" value="Send" className="request__button"/>
            </>
            : null }

          {calendar.book ?
            <>
            <h3>Adoption request:</h3>
            <p>{calendar.date}</p>
            <article className="request__smallinput">
              <article className="request__smallinput__item">
                <label htmlFor="meetingtype">Adoption:</label>
                <select name="meetingtype" id="meetingtype" className="request__input--small">
                  <option value="">Example 1</option>
                  <option value="">Example 2</option>
                  <option value="">Example 3</option>
                </select>
              </article>
              <article className="request__smallinput__item">
                <label htmlFor="appt">Time:</label>
                <input type="time" id="appt" name="appt" min="09:00" max="18:00"  className="request__input--small"/>
              </article>
            </article>
              <label htmlFor="messageinput">Message:</label>
              <textarea name="messageinput" id="" className="request__input request__input--message" placeholder="Provide meeting request details"></textarea> 
              <input type="button" value="Send" className="request__button"/>
            </>
            : null }
          </section>
        : 
        null
        }

      </section>
    </section>
  )
}

export default DogCalendar;
