
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';

export default function DetailBook(){

  return (
    <>
    <Table striped bordered hover size="lg">
        {/* <thead>
            <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            </tr>
        </thead> */}
        <tbody>
            <tr>
                <th>ID</th>
                <td colSpan={2}>Ottokkkkkkkkkkkkkkkkkkkk</td>

            </tr>
            <tr>
                <th>Tên sách</th>
                <td>Jacob</td>
            </tr>
            <tr>
                <th>Kích thước</th>
                <td>@twitter</td>
            </tr>
            <tr>
                <th>Số trang</th>
                <td>@twitter</td>
            </tr>
            <tr>
                <th>Ngày xuất bản</th>
                <td>@twitter</td>
            </tr>
            <tr>
                <th>Nhà xuất bản</th>
                <td>@twitter</td>
            </tr>
            <tr>
                <th>Ngôn ngữ</th>
                <td>@twitter</td>
            </tr>
            <tr>
                <th>Đơn giá</th>
                <td>@twitter</td>
            </tr>
            <tr>
                <th>Trạng thái</th>
                <td>@twitter</td>
            </tr>
            <tr>
                <th>Số lượng tồn</th>
                <td>@twitter</td>
            </tr>
            <tr>
                <th>Tổng số lượng</th>
                <td>@twitter</td>
            </tr>
            <tr>
                <th>Thể loại</th>
                <td>@twitter</td>
            </tr>
            <tr>
                <th>Tác giả</th>
                <td>@twitter</td>
            </tr>
            <tr>
                <th>Hình ảnh</th>
                <td>@twitter</td>
            </tr>
            <tr>
                <th>Ngày tạo</th>
                <td>@twitter</td>
            </tr>
            <tr>
                <th>Ngày cập nhật</th>
                <td>@twitter</td>
            </tr>
        </tbody>
    </Table>
    </>
  );
}
