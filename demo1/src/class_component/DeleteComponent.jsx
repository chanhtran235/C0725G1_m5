import {Component} from "react";
import {Modal, Button} from "react-bootstrap";
import {deleteById, getAll} from "../service/studentService.js";

class DeleteComponent extends Component {
    constructor(props) {
        super(props);

    }

    handleClose = () => {
        this.props.closeModal();
    }
    handleDelete = () => {
        deleteById(this.props.deleteStudent.id);
        console.log(getAll());
        this.handleClose();
    }

    render() {
        return (
            <>
                {console.log("--modal- render----------")}
                <Modal show={this.props.isShowModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <span>Bạn có muốn xoá sinh viên</span>
                        <span className={'text-danger'}> {this.props.deleteStudent.name}?</span>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={this.handleDelete}>
                            Delete
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }

}

export default DeleteComponent;