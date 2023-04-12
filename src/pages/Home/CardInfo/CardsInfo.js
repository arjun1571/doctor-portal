import React from 'react';
import clock from "../../../assets/icons/clock.svg"
import location from "../../../assets/icons/marker.svg"
import phone from "../../../assets/icons/phone.svg"
import CardInfo from './CardInfo';

const CardsInfo = () => {
    const cardInfo = [
        {
            id:1,
            name:"Opening Hours",
            des:"my name is asjsdlf kdjfsjd dsfs",
            logo:clock,
            bg:"bg-gradient-to-r from-cyan-500 to-blue-500"
        },
        {
            id:2,
            name:"Opening Hours",
            des:"my name is asjsdlf kdjfsjd dsfs",
            logo:location,
            bg:"bg-accent"
        },
        {
            id:3,
            name:"Opening Hours",
            des:"my name is asjsdlf kdjfsjd dsfs",
            logo:phone,
            bg:"bg-gradient-to-r from-cyan-500 to-blue-500"
        },
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
            {
                cardInfo.map(card => <CardInfo key={card.id} card={card}></CardInfo>)
            }
        </div>
    );
};

export default CardsInfo;