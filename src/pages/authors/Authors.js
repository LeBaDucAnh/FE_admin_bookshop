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
import axios from "axios";
import { BASE_URL } from "../../config";
import { Edit as EditIcon, Delete as DeleteIcon } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    tableOverflow: {
        overflow: 'auto'
    }
}))

export default function Authors() {
    const classes = useStyles();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [authorList, setAuthorList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const authors = await axios.get(BASE_URL + "/api/author/authors/");
            setAuthorList(authors.data);
        };
        fetchData();
    }, []);

    return (
        <>
            <PageTitle title="Tác giả" />
            <Link to="/app/author/addauthor"><Button
                variant="primary"
                onClick={() => console.log("Add")}>
                Thêm tác giả mới
            </Button></Link>
            <Grid container spacing={4} style={{ marginTop: "20px" }}>
                <Grid item xs={12}>
                    <MUIDataTable
                        title="Danh sách tác giả"
                        data={authorList}
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
                                name: "author_name",
                                label: "Tên tác giả",
                                options: {
                                  filter: false,
                                  sort: true,
                                },
                              },
                              {
                                name: "author_image",
                                label: "Hình ảnh",
                                options: {
                                    filter: false,
                                    sort: false,
                                    customBodyRender: (value, tableMeta, updateValue) => {
                                      return (
                                        <img src={BASE_URL + value} alt={tableMeta.rowData[0]} style={{ width: 100 }} />
                                      );
                                    },
                                  },
                              },
                              {
                                name: "description",
                                label: "Mô tả",
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
                                                    <Link to="/app/author/updateauthor">
                                                    <Button
                                                        variant="primary"
                                                        onClick={() => console.log("Update")}
                                                    >
                                                        <EditIcon/>
                                                    </Button></Link>
                                                    {" "}
                                                    <Button
                                                        variant="danger"
                                                        onClick={handleShow}
                                                    ><DeleteIcon/></Button>
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
