import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AcronymList from './components/acronym-list/acronym-list';
import PageNotFound from './components/common/page-not-found';
import About from './components/common/abount';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={AcronymList}></Route>
                <Route path='/about' Component={About}></Route>
                <Route path='*' Component={PageNotFound}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
