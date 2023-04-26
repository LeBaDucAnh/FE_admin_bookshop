// import React, { useState, useEffect } from 'react';
// import Table from 'react-bootstrap/Table';
// import axios from 'axios';
// import { BASE_URL } from "../../config";
// import PageTitle from "../../components/PageTitle/PageTitle";
// import { Link } from "react-router-dom";
// import Modal from 'react-bootstrap/Modal';
// import Button from "react-bootstrap/Button";
// import { Grid } from "@material-ui/core";
// import { makeStyles } from "@material-ui/styles";
// import MUIDataTable from "mui-datatables";

// export default function DetailBook({ match }) {
//     const { id } = match.params;
//     // const [bookDetail, setBookDetail] = useState();
//     // const [categories, setCategories] = useState([]);
//     // const [authors, setAuthors] = useState([]);
//     const [order, setOrder] = useState();

//     console.log(id);

//     useEffect(() => {
        
//         // Gọi API hoặc lấy dữ liệu từ database để lấy thông tin chi tiết của sách
//         const fetchBookDetail = async () => {
//           const book = await axios.get(BASE_URL + "/api/book/books/"+ id + '/');
//           setBookDetail(book.data);
//         };
//         fetchBookDetail();
//       }, []);
//       console.log(bookDetail);
    
//       if (!bookDetail) {
//         return <div>Loading...</div>;
//       }


//     return (
//         <>
//         <PageTitle title="Quản lý đơn hàng" />
//             <Table striped bordered hover size="lg">
//                 <tbody>
//                     <tr>
//                         <th>ID</th>
//                         <td colSpan={2}>{bookDetail.id}</td>

//                     </tr>
//                     <tr>
//                         <th>Tên sách</th>
//                         <td>{bookDetail.book_name}</td>
//                     </tr>
//                     <tr>
//                         <th>Kích thước</th>
//                         <td>{bookDetail.dimensions}</td>
//                     </tr>
//                     <tr>
//                         <th>Số trang</th>
//                         <td>{bookDetail.pages}</td>
//                     </tr>
//                     <tr>
//                         <th>Ngày xuất bản</th>
//                         <td>{bookDetail.publication_date}</td>
//                     </tr>
//                     <tr>
//                         <th>Nhà xuất bản</th>
//                         <td>{bookDetail.publisher}</td>
//                     </tr>
//                     <tr>
//                         <th>Ngôn ngữ</th>
//                         <td>{bookDetail.language}</td>
//                     </tr>
//                     <tr>
//                         <th>Đơn giá</th>
//                         <td>{bookDetail.unit_price}</td>
//                     </tr>
//                     <tr>
//                         <th>Trạng thái</th>
//                         <td>{bookDetail.status}</td>
//                     </tr>
//                     <tr>
//                         <th>Số lượng tồn</th>
//                         <td>{bookDetail.qty}</td>
//                     </tr>
//                     <tr>
//                         <th>Tổng số lượng</th>
//                         <td>{bookDetail.total_qty}</td>
//                     </tr>
//                     <tr>
//                         <th>Thể loại</th>
//                         <td>{bookDetail.category.category_name}</td>
//                     </tr>
//                     <tr>
//                         <th>Tác giả</th>
//                         <td>{bookDetail.author.author_name}</td>
//                     </tr>
//                     <tr>
//                         <th>Hình ảnh</th>
//                         <td><img src={BASE_URL + bookDetail.image} alt={bookDetail.book_name} style={{ width: 100 }}/></td>
//                     </tr>
//                     <tr>
//                         <th>Mô tả</th>
//                         <td>{bookDetail.description}</td>
//                     </tr>
//                     <tr>
//                         <th>Ngày tạo</th>
//                         <td>{bookDetail.created_at}</td>
//                     </tr>
//                     <tr>
//                         <th>Ngày cập nhật</th>
//                         <td>{bookDetail.updated_at}</td>
//                     </tr>
//                 </tbody>
//             </Table>
            

//             <Grid container spacing={4} style={{ marginTop: "20px" }}>
//                 <Grid item xs={12}>
//                     <MUIDataTable
//                         title="Danh sách đơn hàng"
//                         data={transactionList}
//                         columns={
//                             [
//                             {
//                                 name: "id",
//                                 label: "Mã đơn hàng",
//                                 options: {
//                                   filter: false,
//                                   sort: true,
//                                 },
//                               },
//                               {
//                                 name: "fullname",
//                                 label: "Họ tên",
//                                 options: {
//                                   filter: false,
//                                   sort: true,
//                                 },
//                               },
//                               {
//                                 name: "phone",
//                                 label: "Số điện thoại",
//                                 options: {
//                                   filter: false,
//                                   sort: true,
//                                 },
//                               },
//                               {
//                                 name: "amount",
//                                 label: "Tổng tiền",
//                                 options: {
//                                   filter: false,
//                                   sort: true,
//                                 },
//                               },
//                               {
//                                 name: "created_at",
//                                 label: "Thời gian tạo",
//                                 options: {
//                                   filter: false,
//                                   sort: true,
//                                 },
//                               },
//                               {
//                                 name: "updated_at",
//                                 label: "Thời gian cập nhật",
//                                 options: {
//                                   filter: false,
//                                   sort: true,
//                                 },
//                               },
//                             {
//                                 name: "status",
//                                 label: "Trạng thái",
//                                 options:{
//                                     customBodyRender: (status)=>{
//                                         let color;
//                                         let text;
//                                         switch(status){
//                                             case 'PENDING':
//                                                 text = "Chờ xác nhận"
//                                                 color = 'orange';
//                                                 break;
//                                             case 'Completed':
//                                                 text = "Thành công"
//                                                 color = 'green';
//                                                 break;
//                                             case 'Cancelled':
//                                                 text = "Đã hủy"
//                                                 color = 'red';
//                                                 break;
//                                             default:
//                                                 text = "Đang giao"
//                                                 color = 'transparent';
//                                                 break;
//                                         }
//                                         return(
//                                             <div style={{backgroundColor: color, borderRadius: "15px", padding: "5px", textAlign: "center", color: "black"}}>
//                                                 {text}
//                                             </div>
//                                         );
//                                     }
//                                 }
//                             },
//                                 {
//                                     name: "",
//                                     options: {
//                                         filter: false,
//                                         sort: false,
//                                         customBodyRender: (value, tableMeta, updateValue) => {
//                                             return (
//                                                 <div className={classes.buttonsContainer}>
//                                                     <Link to="/app/order/orderdetail">
//                                                     <Button
//                                                         variant="success"
//                                                         onClick={() => console.log("Detail")}
//                                                     >
//                                                         Chi tiết
//                                                     </Button></Link>
//                                                     {" "}
//                                                     <Button
//                                                         variant="primary"
//                                                         onClick={() => handleEditOrder(tableMeta.rowData[0])}
//                                                     >
//                                                         Sửa
//                                                     </Button>
//                                                     {" "}
//                                                     <Button
//                                                         variant="danger"
//                                                         onClick={handleShow}
//                                                     >Xóa</Button>
//                                                 </div>
//                                             );
//                                         }
//                                     }
//                                 }
//                             ]

//                         }
//                         options={{
//                             filterType: "checkbox",
//                             selectableRows: "none",
//                             responsive: "standard",
//                             filter: true,
//                             search: true,
//                             pagination: true,
//                             rowsPerPageOptions: [5, 10, 20],
//                         }}
//                     />
//                 </Grid>
//             </Grid>
//         </>
//     );
// }
