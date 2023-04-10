import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";
// import { Button } from "../../components/Wrappers/Wrappers";
// components
import PageTitle from "../../components/PageTitle/PageTitle";
import Widget from "../../components/Widget/Widget";
import Table from "../dashboard/components/Table/Table";
import classnames from "classnames";
// data
import mock from "../dashboard/mock";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";


const datatableData = [
    ["121231", "Yonkers","012313112", 100, "2023-03-21 16:00:01.675556", "2023-03-21 16:00:01.675556", "Pending"],
    ["121231", "Yonkers","012313112", 100, "2023-03-21 16:00:01.675556", "2023-03-21 16:00:01.675556", "Completed"],
    ["121231", "Yonkers","012313112", 100, "2023-03-21 16:00:01.675556", "2023-03-21 16:00:01.675556", "Cancelled"],
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

const states = {
    completed: "success",
    pending: "warning",
    cancelled: "secondary",
  };

console.log(datatableData);

const useStyles = makeStyles(theme => ({
    tableOverflow: {
        overflow: 'auto'
    }
}))

export default function Order() {
    const classes = useStyles();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <PageTitle title="Quản lý đơn hàng" />

            <Grid container spacing={4} style={{ marginTop: "20px" }}>
                <Grid item xs={12}>
                    <MUIDataTable
                        title="Danh sách đơn hàng"
                        data={datatableData}
                        columns={
                            ["Mã đơn hàng", "Họ tên", "Số điện thoại", "Tổng tiền", "Thời gian tạo", "Thời gian cập nhật",
                            {
                                name: "Trạng thái",
                                options:{
                                    customBodyRender: (value)=>{
                                        let color;
                                        switch(value){
                                            case 'Pending':
                                                color = 'orange';
                                                break;
                                            case 'Completed':
                                                color = 'green';
                                                break;
                                            case 'Cancelled':
                                                color = 'red';
                                                break;
                                            default:
                                                color = 'transparent';
                                                break;
                                        }
                                        return(
                                            <div style={{backgroundColor: color, borderRadius: "15px", padding: "5px", textAlign: "center", color: "white"}}>
                                                {value}
                                            </div>
                                        );
                                    }
                                }
                            },
                                {
                                    name: "",
                                    options: {
                                        filter: false,
                                        sort: false,
                                        customBodyRender: (value, tableMeta, updateValue) => {
                                            return (
                                                <div className={classes.buttonsContainer}>
                                                    <Link to="/app/order/orderdetail">
                                                    <Button
                                                        variant="success"
                                                        onClick={() => console.log("Detail")}
                                                    >
                                                        Chi tiết
                                                    </Button></Link>
                                                    {" "}
                                                    <Link to="/app/book/updatebook">
                                                    <Button
                                                        variant="primary"
                                                        onClick={() => console.log("Update")}
                                                    >
                                                        Sửa
                                                    </Button></Link>
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
            </Grid>
        </>
    );
}
