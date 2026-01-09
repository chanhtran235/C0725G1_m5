import {ErrorMessage, Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import {add} from "../service/studentService.js";
import * as Yup from "yup";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {getAll} from "../service/classService.js";
import {JS} from "json-server/lib/cli/utils/is.js";

const AddComponent =()=>{
    const [student, setStudent] = useState({
        id:"",
        name:""
    });
    const [classList, setClassList]= useState([]);
    useEffect(() => {
        const fetData = async ()=>{
            let list = await getAll();
            setClassList(list);
        }
        fetData();
    }, []);

    const navigate = useNavigate();
    const handleSubmit =(value)=>{
        console.log("----------------------------------------")
        console.log(value);
        value ={
            ...value,
            classCG: JSON.parse(value.classCG)
        }
        console.log(value);
        add(value).then(status =>{
            if (status){
                toast.success("Thêm mới thành công");
            }else {
                toast.error("Thêm mới thất bại");
            }
            navigate("/students");
        });


    }
    const validate = Yup.object({
        // id:Yup.string().required("Yêu cầu nhập"),
        name:Yup.string().required("Yêu cầu nhập tên")
            .matches(/[A-z][a-z]*(\s[A-z][a-z]*)+/,"Tên phải đúng định dạng")
    })
    return(
        <>
            <h2>Thêm mới</h2>
            <Formik initialValues={student} onSubmit={handleSubmit} validationSchema={validate}>
                <Form>
                    {/*<Field type ={'text'} name = {'id'}/>*/}
                    {/*<ErrorMessage name={'id'} component={'small'}/>*/}
                    <Field type ={'text'} name = {'name'}/>
                    <ErrorMessage name={'name'} component={'small'}/>
                    <Field as ={'select'} name = {'classCG'}>
                        <option>---Chọn------</option>
                        {classList.map(cls=>(<option key={cls.id} value={JSON.stringify(cls)}>{cls.name}</option>))}
                    </Field>
                    <Button type={'submit'}>Save</Button>

                </Form>
            </Formik>
        </>
    )
}
export default AddComponent;