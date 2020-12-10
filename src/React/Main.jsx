import React from 'react';
import { BrowserRouter } from 'react-router-dom';


/* Components ---------------------------*/
import Header from './Shared/Header.jsx';
import Nav from './Shared/Nav.jsx';
import Content from './Shared/Content.jsx';

const Main = () => {

    return (
        <div className='Main'>
            <BrowserRouter>
                <Header />
                <Nav />
                <Content />
            </BrowserRouter>
        </div>
    );
}

export default Main;