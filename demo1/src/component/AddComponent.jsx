import {ErrorMessage, Field, Form, Formik} from "formik";
import {useState} from "react";
import {Button} from "react-bootstrap";
import {add, getAll} from "../service/studentService.js";
import * as Yup from "yup";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

const AddComponent =()=>{
    const [student, setStudent] = useState({
        id:"",
        name:""
    })
    const navigate = useNavigate();
    const handleSubmit =(value)=>{
        console.log("----------------------------------------")
        console.log(value);
        add(value);
        toast.success("Thêm mới thành công",{
            theme: 'dark',
            autoClose:500017
        });
        navigate("/students");

    }
    const validate = Yup.object({
        id:Yup.string().required("Yêu cầu nhập"),
        name:Yup.string().required("Yêu cầu nhập tên")
            .matches(/[A-z][a-z]*(\s[A-z][a-z]*)+/,"Tên phải đúng định dạng")
    })
    return(
        <>
            <h2>Thêm mới</h2>
            <Formik initialValues={student} onSubmit={handleSubmit} validationSchema={validate}>
                <Form>
                    <Field type ={'text'} name = {'id'}/>
                    <ErrorMessage name={'id'} component={'small'}/>
                    <Field type ={'text'} name = {'name'}/>
                    <Button type={'submit'}>Save</Button>
                    <ErrorMessage name={'name'} component={'small'}/>
                </Form>
            </Formik>
        </>
    )
}
export default AddComponent;