import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sobre from "./pages/Sobre/Sobre.js";
import Livros from "./pages/Livros/Livros.js";
import Autores from "./pages/Autores/Autores.js";
import NotFound from "./pages/NotFound/NotFound.js";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/'> <Home /> </Route>
            <Route path='/sobre'> <Sobre /> </Route>
            <Route path='/livros'> <Livros /> </Route>
            <Route path='/autores'> <Autores /> </Route>
            <Route> <NotFound /> </Route>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);