import {Button} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React from 'react';

function AddAuthor() {
  return (
    <Form>
    <Form.Group className="mb-3">
        <Form.Label>Tên tác giả</Form.Label>
        <Form.Control/>
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Chọn file ảnh tác giả</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Mô tả</Form.Label>
        <Form.Control as="textarea"/>
      </Form.Group>
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

export default AddAuthor;