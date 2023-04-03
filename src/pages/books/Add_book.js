import {Button} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React from 'react';

function AddBook() {
  return (
    <Form>
    <Form.Group className="mb-3">
        <Form.Label>Tên sách</Form.Label>
        <Form.Control/>
      </Form.Group>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Kích thước</Form.Label>
          <Form.Control/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Số trang</Form.Label>
          <Form.Control type="number"/>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Ngày xuất bản</Form.Label>
          <Form.Control type="date"/>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridAddress2">
        <Form.Label>Nhà xuất bản</Form.Label>
        <Form.Control/>
      </Form.Group>
      </Row>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Chọn file ảnh</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Mô tả</Form.Label>
        <Form.Control as="textarea"/>
      </Form.Group>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridAddress2">
        <Form.Label>Đơn giá</Form.Label>
        <Form.Control type="number"/>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridAddress2">
        <Form.Label>Số lượng tồn</Form.Label>
        <Form.Control type='number'/>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridAddress2">
        <Form.Label>Tổng số lượng</Form.Label>
        <Form.Control type='number'/>
      </Form.Group>
      
    </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Thể loại</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Tác giả</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Ngôn ngữ</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Lưu
      </Button>
        {" "}
      <Button variant="danger" type="submit">
        Hủy
      </Button>
    </Form>
  );
}

export default AddBook;