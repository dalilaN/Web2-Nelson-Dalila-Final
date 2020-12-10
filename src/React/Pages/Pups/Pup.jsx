import React, { useState } from 'react';
import styled from 'styled-components';

import Lightbox from '../../Shared/Lightbox.jsx'

const Pup = ({pup, pupID}) => {

    const [isOpen, isOpenUpdate] = useState(false);

    const handleOnOpen = () => {
        console.log('open lightbox');
        isOpenUpdate(true);
    }

    const handleOnClose = () => {
        console.log('close lightbox');
        isOpenUpdate(false);
    }

    return (
        <PupStyled className='Pup'>
            <img 
                src={`/assets/img/pups/small/${pup.images.small}`}
                alt={pup.name}
                onClick={ handleOnOpen }
            />
            <h4>{`Meet ${pup.name}`}</h4> 
            <Lightbox 
                isOpen={isOpen}
                onClose={handleOnClose}
                headerText={ `` }
            >
                <img 
                    src={`/assets/img/pups/small/${pup.images.small}`}
                    alt={pup.name}
                />
                <h2>{`Name: ${pup.name}`}</h2> 
                <div className='age'><b>Age:</b> {pup.age}</div>
                <div className='sex'><b>Sex:</b> {pup.sex}</div>
                <div className='color'><b>Color:</b>  {pup.color}</div>
                <div className='price'><b>Price:</b>  {pup.price}</div>
                <div className='about'><b>About {pup.name}:</b>  {pup.about}</div>
            </Lightbox>

        </PupStyled>
    );
}

export default Pup;

const PupStyled = styled.div`

    margin: 50px 50px;
    img {
        width: 200;
        height: 200px;
    }
    
`;