import React, {Component} from "react";
import {getAll} from "../service/studentService.js";
import DeleteComponent from "./DeleteComponent.jsx";
import deleteComponent from "./DeleteComponent.jsx";

class ListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentList: [],
            isShowModal: false,
            deleteStudent: {
                id: "",
                name: ""
            }
        }

    }

    componentDidMount() {
        console.log("------did mount run----------")
        this.setState({
            studentList: [...getAll()]
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.isShowModal!=this.state.isShowModal){
            this.setState({
                studentList: [...getAll()]
            })
        }
    }

    handleShowModal = (student) => {
        console.log("==========================")
        console.log(student)

        this.setState({
            isShowModal: true,
            deleteStudent: student
        })
    }
    closeModal = () => {
        this.setState({
            isShowModal: false
        })
    }

    render() {
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
                        this.state.studentList.map((s, i) =>
                            <tr key={s.id}>
                                <td>{i + 1}</td>
                                <td>{s.id}</td>
                                <td>{s.name}</td>
                                <td>
                                    <button className={'btn btn-danger btn-sm'} onClick={() => {
                                        this.handleShowModal(s);
                                    }}>Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>

                </table>
                <DeleteComponent isShowModal={this.state.isShowModal}
                                 deleteStudent={this.state.deleteStudent}
                                 closeModal = {this.closeModal}
                />
            </>)
    }
}

export default ListComponent;