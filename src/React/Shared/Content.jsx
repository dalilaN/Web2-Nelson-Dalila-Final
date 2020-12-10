import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

/* Components ---------------------------*/
import Home from '../Pages/Home.jsx'
import Pups from '../Pages/Pups/Pups.jsx'
//import Contact from '../Pages/Contact.jsx'

const Content = () => {

    return (
        <ContentStyled className='Content'>
            <Switch>
                <Route path={'/pups'} component={ Pups } />
                <Route path={'/'} component={ Home } exact/>
            </Switch> 
        </ContentStyled>
    );
}

export default Content;

const ContentStyled = styled.div`
    
`;