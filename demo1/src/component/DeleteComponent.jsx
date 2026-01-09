import {Button, Modal} from "react-bootstrap";
import {deleteById} from "../service/studentService.js";
import React from "react";
import {toast} from "react-toastify";

const DeleteComponent = ({isShowModal,deleteStudent,closeModal,setIsReloading})=>{
    const handleClose = ()=>{
         closeModal();
    }
    const handleDelete =()=>{
        const fetData = async ()=>{
           let isDelete = await deleteById(deleteStudent.id);
           if (isDelete){
               toast.success("Xoá thành công");
           }else {
               toast.error("Xoá thất bại")
           }
            closeModal();
            setIsReloading(pre=>!pre);
        }
        fetData();


    }
    return (
        <>
            {console.log("--modal- render----------")}

            <Modal show={isShowModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span>Bạn có muốn xoá sinh viên</span>
                    <span className={'text-danger'}> {deleteStudent.name}?</span>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default DeleteComponent  ;