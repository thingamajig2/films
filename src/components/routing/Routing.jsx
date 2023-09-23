import { Route, Routes} from 'react-router-dom';
import React from 'react';
import { Counter } from '../../features/counter/Counter';
import Inside from '../inside/Inside';
import About from '../about/About';


const Routing = () =>{
    return (
    <Routes>
        <Route path="/:category" element={<Counter />} />
        <Route path="/:category/:film_id" element={<Inside />}/>
        <Route path="/page/:id" element={<Counter />} />
        <Route path="/about" element={<About />} />
    </Routes>)
}

export default Routing; 