import './App.css';
import Home from "./pages/home/Home"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Stories from './pages/science-fiction/Stories';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/sciencefiction/:id' element={<Stories />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
