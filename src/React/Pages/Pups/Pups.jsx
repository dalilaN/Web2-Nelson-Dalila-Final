import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';

/* Components ---------------------------*/
import Pup from './Pup.jsx';

const Pups = () => {

    const { pups } = useSelector((state) => state);

    return (
        <PupsStyled className='Pups'>
            <h3>Meet Our Pups</h3>  
            <div className="pups-container">
                {
                    pups.map((pup, idx) =>{
                        return <Pup 
                        pup={ pup }
                        pupID={ idx }
                        /> 
                    })
                }
            </div>
        </PupsStyled>
    );
}

export default Pups;

const PupsStyled = styled.div`
    text-align: center;

    h3 {
        margin-top: -15px;
        width: 100%;
        height: 50px;
        background-color: black;
        color: white;
        line-height: 50px;
    }

    .pups-container{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    
`;