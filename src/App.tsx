import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './components/common/page-not-found';
import About from './components/common/about';
import NavBar from './components/common/nav-bar';
import Acronyms from './components/acronym/acronyms';
import VoiceRecorder from './components/recorder/voice-recorder';

function App() {
    return (
        <>
            <NavBar />
            <br/><br/>
            <BrowserRouter>
                <Routes>
                    <Route path='/' Component={Acronyms}></Route>
                    <Route path='/about' Component={About}></Route>
                    <Route path='/recorder' Component={VoiceRecorder}></Route>
                    <Route path='*' Component={PageNotFound}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
