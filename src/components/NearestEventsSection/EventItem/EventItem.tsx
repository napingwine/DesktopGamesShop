import React, { FC, useRef } from 'react';
import IEventItem from '../../../models/IEventItem';
import './EventItem.scss';
import arrow from '../../../assets/Icons/arrow.png';
import { NavLink } from 'react-router-dom';
import useElementDimensionsProportion from '../../../hooks/useElementDimensionsProportion'

const EventItem: FC<IEventItem> = ({ id, photoURL, title, description, date, time, listener, price }) => {
  const element = useRef<any>();
  const proportionClassForImg = useElementDimensionsProportion(element, photoURL);

  return (
    <div className="event-item" ref={element}>
      <img src={photoURL} alt="img" className={proportionClassForImg} />
      <div className="event-item__info">
        <h3 className="event-item__info__title">{title}</h3>
        <div className="event-item__info__date-and-time">
          <div className="event-item__info__date-and-time__date">{date}</div>
          <div className="event-item__info__date-and-time__time">{time}</div>
        </div>
        <div className="event-item__info__price">{price}</div>
        <div className="event-item__info__description">{description[0]}</div>
        <div className="event-item__info__button-wrapper">
          <NavLink to={`/event/${id}`} onClick={listener} className="event-item__info__button-wrapper__button"><img src={arrow} alt="arrow" /></NavLink>
        </div>
      </div>
    </div>
  );
};

export default EventItem;

