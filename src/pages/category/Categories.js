import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";
// import { Button } from "../../components/Wrappers/Wrappers";
// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import Table from "../dashboard/components/Table/Table";
import classnames from "classnames";
// data
import mock from "../dashboard/mock";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import axios from "axios";

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

export default function Categories() {
    const classes = useStyles();
    const [show, setShow] = useState(false);
    const [add, setAdd] = useState(false);
    const [update, setUpdate] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const showAdd = () => setAdd(true);
    const closeAdd = () => setAdd(false);
    const showUpdate = () => setUpdate(true);
    const closeUpdate = () => setUpdate(false);
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const categories = await axios.get("http://127.0.0.1:8000/api/category/categories/");
            console.log(categories);
            setCategoryList(categories.data);
        };
        fetchData();
    }, []);
    console.log("Thể loại", categoryList);

    return (
        <>
            <PageTitle title="Thể loại" />
            <Button
                variant="primary"
                onClick={showAdd}>
                Thêm thể loại mới
            </Button>
            <Grid container spacing={4} style={{ marginTop: "20px" }}>
                <Grid item xs={12}>
                    <MUIDataTable
                        title="Danh sách thể loại"
                        data={categoryList}
                        columns={
                            [{
                                name: "id",
                                label: "ID",
                                options: {
                                  filter: false,
                                  sort: true,
                                },
                              },
                              {
                                name: "category_name",
                                label: "Tên thể loại",
                                options: {
                                  filter: false,
                                  sort: true,
                                },
                              }, 
                              {
                                name: "created_at",
                                label: "Thời gian tạo",
                                options: {
                                  filter: false,
                                  sort: true,
                                },
                              },
                              {
                                name: "updated_at",
                                label: "Thời gian cập nhật",
                                options: {
                                  filter: false,
                                  sort: true,
                                },
                              }, 
                                {
                                    name: "",
                                    options: {
                                        filter: false,
                                        sort: false,
                                        customBodyRender: (value, tableMeta, updateValue) => {
                                            return (
                                                <div className={classes.buttonsContainer}>
                                                    {/* <Link to="/app/author/detailauthor">
                                                    <Button
                                                        variant="success"
                                                        onClick={() => console.log("Detail")}
                                                    >
                                                        Chi tiết
                                                    </Button></Link> */}
                                                    {" "}

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
                            selectableRows: "none",
                            responsive: "standard",
                            filter: true,
                            search: true,
                            pagination: true,
                            rowsPerPageOptions: [5, 10, 20],
                        }}
                    />
                    <Modal show= {show} onHide ={handleClose} centered>
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

                    <Modal show= {add} onHide ={closeAdd} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Thêm thể loại mới</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Tên thể loại</Form.Label>
                                <Form.Control/>
                            </Form.Group>
                        </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={handleClose}>
                                Lưu
                            </Button>
                            {" "}
                            <Button variant="secondary" onClick={handleClose}>
                                Hủy
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal show= {update} onHide ={closeUpdate} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Sửa thể loại</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Tên thể loại</Form.Label>
                                <Form.Control/>
                            </Form.Group>
                        </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={handleClose}>
                                Lưu
                            </Button>
                            {" "}
                            <Button variant="secondary" onClick={handleClose}>
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
