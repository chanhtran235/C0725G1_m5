import React, {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {getAll} from "./service/studentService.js";
import ListComponent from "./class_component/ListComponent.jsx";
import HeaderComponent from "./component/HeaderComponent.jsx";

function App() {
    return (
        <>
            <HeaderComponent/>
            <ListComponent/>
        </>

    )

}

export default App
