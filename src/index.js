import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import Title from './Components/Title'
import Input from './Components/Input';
import TodoReader from './Components/TodoReader'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
   <div className="main-container">
    <Title />
    <Input />
    <TodoReader />
   </div>
);
