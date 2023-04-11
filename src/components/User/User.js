import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";
// import { Button } from "../../components/Wrappers/Wrappers";
// components
import PageTitle from "../../components/PageTitle";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

const datatableData = [
    ["Joe James", "Example Inc.", "Yonkers", 100, 240, "2023-03-21 16:00:01.675556", "2023-03-21 16:00:01.675556"],
    ["John Walsh", "Example Inc.", "Hartford", "CT"],
    ["Bob Herm", "Example Inc.", "Tampa", "FL"],
    ["James Houston", "Example Inc.", "Dallas", "TX"],
    ["Prabhakar Linwood", "Example Inc.", "Hartford", "CT"],
    ["Kaui Ignace", "Example Inc.", "Yonkers", "NY"],
    ["Esperanza Susanne", "Example Inc.", "Hartford", "CT"],
    ["Christian Birgitte", "Example Inc.", "Tampa", "FL"],
    ["Meral Elias", "Example Inc.", "Hartford", "CT"],
    ["Deep Pau", "Example Inc.", "Yonkers", "NY"],
    ["Sebastiana Hani", "Example Inc.", "Dallas", "TX"],
    ["Marciano Oihana", "Example Inc.", "Yonkers", "NY"],
    ["Brigid Ankur", "Example Inc.", "Dallas", "TX"],
    ["Anna Siranush", "Example Inc.", "Yonkers", "NY"],
    ["Avram Sylva", "Example Inc.", "Hartford", "CT"],
    ["Serafima Babatunde", "Example Inc.", "Tampa", "FL"],
    ["Gaston Festus", "Example Inc.", "Tampa", "FL"],
];

console.log(datatableData);

const useStyles = makeStyles(theme => ({
    tableOverflow: {
        overflow: 'auto'
    }
}))

export default function Users() {
    const classes = useStyles();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [add, setAdd] = useState(false);
    const showAdd = () => setAdd(true);
    const closeAdd = () => setAdd(false);
    const [update, setUpdate] = useState(false);
    const showUpdate = () => setUpdate(true);
    const closeUpdate = () => setUpdate(false);
    return (
        <>
            <PageTitle title="Người dùng" />
            <Button
                variant="primary"
                onClick={showAdd}>
                Thêm người dùng mới
            </Button>
            <Grid container spacing={4} style={{ marginTop: "20px" }}>
                <Grid item xs={12}>
                    <MUIDataTable
                        title="Danh sách người dùng"
                        data={datatableData}
                        columns={
                            ["Tên người dùng", "Email", "Thời gian đăng nhập", "Quản trị viên",
                                {
                                    name: "",
                                    options: {
                                        filter: false,
                                        sort: false,
                                        customBodyRender: (value, tableMeta, updateValue) => {
                                            return (
                                                <div className={classes.buttonsContainer}>
                                                        <Button
                                                            variant="primary"
                                                            onClick={showUpdate}
                                                        >
                                                            Sửa
                                                        </Button>
                                                    {" "}
                                                    <Button
                                                        variant="danger"
                                                        onClick={handleShow}
                                                    >Xóa</Button>
                                                </div>
                                            );
                                        }
                                    }
                                }
                            ]

                        }
                        options={{
                            filterType: "checkbox",
                        }}
                    />
                    <Modal show={show} onHide={handleClose} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Xác nhận xóa</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Bạn chắc chắn xóa trường dữ liệu này?
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={handleClose}>
                                Đồng ý
                            </Button>
                            {" "}
                            <Button variant="secondary" onClick={handleClose}>
                                Hủy
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal show={add} onHide={closeAdd} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Thêm người dùng mới</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Họ và tên</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="file" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>Mật khẩu</Form.Label>
                                    <Form.Control as="textarea" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>Quản trị viên</Form.Label>
                                    <Form.Check
                                        type="radio"
                                        label="Người dùng"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios1"
                                        defaultChecked
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Quản trị viên"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios2"
                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={handleClose}>
                                Lưu
                            </Button>
                            {" "}
                            <Button variant="secondary" onClick={closeAdd}>
                                Hủy
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal show={update} onHide={closeUpdate} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Sửa thông tin người dùng</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Họ và tên</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="file" />
                                </Form.Group>
                                {/* <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>Mật khẩu</Form.Label>
                                    <Form.Control as="textarea" />
                                </Form.Group> */}
                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>Quản trị viên</Form.Label>
                                    <Form.Check
                                        type="radio"
                                        label="Người dùng"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios1"
                                        defaultChecked
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Quản trị viên"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios2"
                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={handleClose}>
                                Lưu
                            </Button>
                            {" "}
                            <Button variant="secondary" onClick={closeUpdate}>
                                Hủy
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Grid>
                {/* <Grid item xs={12}>
                    <Widget title="Material-UI Table" upperTitle noBodyPadding bodyClass={classes.tableOverflow}>
                        <Table data={mock.table} />
                    </Widget>
                </Grid> */}
            </Grid>
        </>
    );
}
