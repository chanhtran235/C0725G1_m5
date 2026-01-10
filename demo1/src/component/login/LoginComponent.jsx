import React, {useRef} from "react";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router";

import {useDispatch} from "react-redux";
import {checkLogin} from "../../redux/action.js";


function LoginComponent() {
    const navigate = useNavigate();
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const dispatch = useDispatch()
    const handleLogin = async () => {
        let username = usernameRef.current.value;
        let password = passwordRef.current.value;
        const loginUser = {
            username,
            password
        }
        // fetData
        // const fetData1 = async () => {
        //     console.log(loginUser)
        //     const auth = await checkUserLogin(username,password);
        //     if (auth){
        //         dispatch(checkLogin1(auth));
        //         toast.success("Đăng nhập thành công");
        //     }else {
        //         toast.error("Đăng nhập thất bại")
        //     }
        //
        //     navigate("/students")
        //
        // }
        const fetData = async () => {
              const isLoginSuccess = await dispatch(checkLogin(loginUser));
              if (isLoginSuccess){
                  toast.success("Đăng nhập thành công");
              }else {
                  toast.error("Đăng nhập thất bại")
              }

                navigate("/students")

        }
        fetData();


    }
    return (
        <form className={'w-25 p-3 mt-5'} style={{marginLeft: "400px", backgroundColor: 'lightgray'}}>
            <h3>Login</h3>

            <div className="mb-3 row">
                <label htmlFor="inputPassword" className="m-1 col-sm-2 col-form-label">Username</label>
                <div className="col-sm-10">
                    <input ref={usernameRef} name={'username'} className="form-control" id="inputName"/>
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="inputPassword" className=" m-1 col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input ref={passwordRef} name={'password'} type="password" className="form-control"
                           id="inputPassword"/>
                </div>
            </div>

            <div className="mb-3 row justify-content-center">
                <button className="col-sm-3 btn btn-success" onClick={handleLogin} type={'button'}>Login
                </button>
            </div>
        </form>
    )
}

export default LoginComponent;