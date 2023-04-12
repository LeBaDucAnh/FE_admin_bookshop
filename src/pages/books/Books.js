import React, { useState, useEffect } from "react";
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
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import { deleteBookById } from "../../utils/book";
import axios from "axios";
import { BASE_URL } from "../../config";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    tableOverflow: {
        overflow: 'auto'
    }
}))

export default function Books(props) {
    const classes = useStyles();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (bookID) => {
        setBookToDelete(bookID);
        setShow(true);
    }
    const [bookList, setBookList] = useState([]);
    const history = useHistory();
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [bookToDelete, setBookToDelete] = useState(null);

    // const handleDeleteClick = (book) => {
    //     setBookToDelete(book);
    //     setOpenDeleteModal(true);
    // };

    const handleViewDetail = (rowData) => {
        const id = rowData[0];
        console.log(id);
        history.push(`/app/book/detailbook/${id}`);
    };

    const handleViewUpdate = (rowData) => {
        const id = rowData[0];
        console.log(id);
        history.push(`/app/book/updatebook/${id}`);
    };
    
    const handleDelete = () => {
        axios.delete(`${BASE_URL}/api/book/book/${bookToDelete}/`)
          .then(() => {
            //close modal
            console.log("Xóa thành công");
            setShow(false);
            history.push(`/app/books`);
            //reload table data
            // reloadTableData();
          })
          .catch((error) => {
            console.log(error);
          });
      }
      

    // const handleDeleteConfirm = () => {
    //     setIsDeleting(true);
    //     axios.delete(`${BASE_URL}/api/book/book/${selectedBook[0]}/`)
    //         .then(response => {
    //             // Xóa thành công, cập nhật danh sách các sách
    //             props.fetchBooks();
    //             setIsDeleting(false);
    //             setSelectedBook(null);
    //         })
    //         .catch(error => {
    //             console.error(error);
    //             setIsDeleting(false);
    //         });
    // };


    // Sử dụng useEffect hook để lấy danh sách 
    useEffect(() => {
        const fetchData = async () => {
            const books = await axios.get( BASE_URL + "/api/book/books/");
            setBookList(books.data);
        };
        fetchData();
    }, []);
    console.log("Sách", bookList);
    return (
        <>
            <PageTitle title="Đầu sách" />
            <Link to="/app/book/addbook"><Button
                variant="primary"
                onClick={() => console.log("Update")}>
                Thêm sách mới
            </Button></Link>
            <Grid container spacing={4} style={{ marginTop: "20px" }}>
                <Grid item xs={12}>
                    <MUIDataTable
                        title="Danh sách đầu sách"
                        data={bookList}
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
                                name: "book_name",
                                label: "Tên sách",
                                options: {
                                    filter: false,
                                    sort: true,
                                },
                            },
                            {
                                name: "image",
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
                                name: "unit_price",
                                label: "Đơn giá",
                                options: {
                                    filter: false,
                                    sort: true,
                                },
                            },
                            {
                                name: "qty",
                                label: "Số lượng còn",
                                options: {
                                    filter: false,
                                    sort: true,
                                },
                            },
                            {
                                name: "total_qty",
                                label: "Tổng số lượng",
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
                                                {/* <Link to="/app/book/detailbook"> */}
                                                <Button
                                                    variant="success"
                                                    onClick={() => { handleViewDetail(tableMeta.rowData) }}
                                                >
                                                    Chi tiết
                                                </Button>

                                                {" "}
                                                {/* <Link to="/app/book/updatebook"> */}
                                                <Button
                                                    variant="primary"
                                                    onClick={() => { handleViewUpdate(tableMeta.rowData) }}
                                                >
                                                    Sửa
                                                </Button>
                                                {" "}
                                                <Button
                                                        variant="danger"
                                                        onClick={handleShow(tableMeta.rowData[0])}
                                                    >Xóa</Button>
                                                {/* <Button variant="danger" onClick={() => handleDeleteClick(tableMeta.rowData)}>
                                                    Xóa
                                                </Button> */}
                                            </div>
                                        );
                                    }
                                }
                            }]
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
                    <Modal show={show} onHide={handleClose} centered>
                    {/* <Modal open={selectedBook !== null} onClose={() => setSelectedBook(null)}> */}
                        <Modal.Header closeButton>
                            <Modal.Title>Xác nhận xóa</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Bạn chắc chắn xóa trường dữ liệu này?
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary"onClick={handleDelete}>
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
