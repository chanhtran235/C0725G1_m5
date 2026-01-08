import React, {useState} from 'react'
import './App.css'
import ListComponent from "./component/ListComponent.jsx";
import HeaderComponent from "./component/HeaderComponent.jsx";
import {Route, Routes} from "react-router-dom";
import HomeComponent from "./component/HomeComponent.jsx";
import AddComponent from "./component/AddComponent.jsx";
import DetailComponent from "./component/DetailComponent.jsx";
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <>
            <HeaderComponent/>
            <Routes>
                <Route path={'/'} element={<HomeComponent/>}/>
                <Route path={'/students'} element={<ListComponent/>}>
                    <Route path={':id'} element={<DetailComponent/>}/>
                </Route>
                <Route path={'/students/add'} element={<AddComponent/>}/>
                <Route path={'/students/detail/:id'} element={<DetailComponent/>}/>
            </Routes>
            <ToastContainer/>
        </>

    )

}

export default App
