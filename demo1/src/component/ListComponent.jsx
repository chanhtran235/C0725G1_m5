import DeleteComponent from "../component/DeleteComponent.jsx";
import React, {useCallback, useEffect, useState} from "react";
import {getAll} from "../service/studentService.js";
import {Button} from "react-bootstrap";
import {Outlet, useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";

const ListComponent = ()=>{
    const [studentList, setStudentList] = useState([]);
    const [isShowModal, setIsShowModal] = useState(false);
    const [isReloading, setIsReloading] = useState(false);
    const [deleteStudent, setDeleteStudent] = useState({
        id:"",
        name: ""
    });

    const navigate = useNavigate();

    useEffect(() => {
        console.log("--------Effect run-------");
        setStudentList([...getAll()])
    },[isReloading]);

    const closeModal = ()=>{
      setIsShowModal(false);
    }

    const handleShowModal =(student)=>{
        setDeleteStudent(student);
        setIsShowModal(true);
    }
    return (
        <>   {console.log("--------list render---------")}
            <h1>Danh sách</h1>
            <Link className={'btn btn-success btn-sm'} to={'/students/add'} >Add new student</Link>
            <button className={'btn btn-success btn-sm'} onClick={()=>{
                navigate("/students/add")
            }}>Thêm mới</button>
            <Outlet/>
            <table>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {
                   studentList && studentList.map((s, i) =>
                        <tr key={s.id}>
                            <td>{i + 1}</td>
                            <td>{s.id}</td>
                            <td>{s.name}</td>
                            <td>
                                <button className={'btn btn-danger btn-sm'} onClick={() => {
                                    handleShowModal(s);
                                }}>Delete
                                </button>
                                <Link to={`/students/${s.id}`}>Detail</Link>
                                <Link to={`/students/detail/${s.id}`}>Detail</Link>
                            </td>
                        </tr>
                    )
                }
                </tbody>

            </table>
            {<DeleteComponent isShowModal={isShowModal}
                                           deleteStudent={deleteStudent}
                                           closeModal = {closeModal}
                                           setIsReloading = {setIsReloading}
            />}

        </>
    );
}
export default ListComponent ;