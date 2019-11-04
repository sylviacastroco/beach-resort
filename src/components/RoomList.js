import React from 'react';
import Room from './Room';

export default function RoomList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className='empty-search'>
        <h3>So sorry!</h3>
        <h4>No matches found for your search parameters.</h4>
        <h4>Please try again.</h4>
      </div>
    );
  }
  return (
    <section className='roomslist'>
      <div className='roomslist-center'>
        {rooms.map(item => {
          return <Room key={item.id} room={item} />;
        })}
      </div>
    </section>
  );
}
