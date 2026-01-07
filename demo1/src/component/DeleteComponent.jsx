import {Button, Modal} from "react-bootstrap";
import {deleteById} from "../service/studentService.js";

const DeleteComponent = ({isShowModal,deleteStudent,closeModal})=>{
    const handleClose = ()=>{
         closeModal();
    }
    const handleDelete =()=>{
         deleteById(deleteStudent.id);
         closeModal();
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
export default DeleteComponent ;