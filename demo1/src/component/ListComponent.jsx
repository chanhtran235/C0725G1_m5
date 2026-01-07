import DeleteComponent from "../component/DeleteComponent.jsx";
import React, {useEffect, useState} from "react";
import {getAll} from "../service/studentService.js";

const ListComponent = ()=>{
    const [studentList, setStudentList] = useState([]);
    const [isShowModal, setIsShowModal] = useState(false);
    const [isReloading, setIsReloading] = useState(false);
    const [deleteStudent, setDeleteStudent] = useState({
        id:"",
        name: ""
    });
    useEffect(() => {
        console.log("--------Effect run-------");
        setStudentList([...getAll()])
    },[isShowModal]);

    const closeModal = ()=>{
      setIsShowModal(false);
    }

    const handleShowModal = (student)=>{
        setDeleteStudent(student);
        setIsShowModal(true);
    }
    return (
        <>   {console.log("--------list render---------")}
            <h1>Danh sách</h1>
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
                            </td>
                        </tr>
                    )
                }
                </tbody>

            </table>
            <DeleteComponent isShowModal={isShowModal}
                             deleteStudent={deleteStudent}
                             closeModal = {closeModal}
            />
        </>
    );
}
export default ListComponent ;