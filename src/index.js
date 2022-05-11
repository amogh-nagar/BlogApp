import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter} from "react-router-dom";
import store from "./redux/index";
import {Provider} from "react-redux";
import './index.css';
import App from './App';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
