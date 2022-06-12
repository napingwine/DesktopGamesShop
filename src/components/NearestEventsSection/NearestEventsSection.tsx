import React, { FC } from 'react';
import { eventsAPI } from '../../services/EventsService'
import EventItem from './EventItem/EventItem';
import './NearestEventsSection.scss'
import CustomButton from '../Buttons/CustomButton';
import { NavLink } from 'react-router-dom';

interface INearestEventsSection { 
  title: string,
}

const NearestEventsSection: FC<INearestEventsSection> = ({title}) => {
  const { error, data, isLoading } = eventsAPI.useFetchEventsQuery({ _limit: 2, _page: 1 })

  return (
    <section className="nearest-events-section container">
      <h2 className="nearest-events-section__title">{title}</h2>
      <div className="nearest-events-section__events-list">
        {error && <div>Error ...</div>}
        {isLoading && <div>Loading ... </div>}
        {data && data.apiResponse.map(event => <EventItem key={event.id} {...event} />)}
      </div>
      <NavLink to='/events' className="nearest-events-section__show-more"><CustomButton buttonText='Показать еще'/></NavLink>
    </section>
  );
};

export default NearestEventsSection;