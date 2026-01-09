import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {findById} from "../service/studentService.js";

const DetailComponent =()=>{
    const [detailStudent, setDetailStudent] = useState({
        id:"",
        name:""
    });
    const {id} = useParams();
    useEffect(() => {
       const fetData = async ()=>{
           let student = await findById(id);
           setDetailStudent(student);
       }
       fetData();
    }, [id]);

    return(
        <>
            <h1> Chi tiết</h1>
            <p>ID: {detailStudent.id}</p>
            <p>Name: {detailStudent.name}</p>
        </>
    )
}
export default DetailComponent ;