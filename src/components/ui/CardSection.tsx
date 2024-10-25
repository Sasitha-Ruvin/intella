import React from 'react';
import { Cards } from '../../data';
import { Card } from './Card';

export const CardSection = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-5 p-5 justify-items-center">
        {Cards.map((card, index) => (
          <Card key={index} title={card.title} imgSrc={card.imgSrc} icons={card.icons} />
        ))}
      </div>
    </div>
  );
};
