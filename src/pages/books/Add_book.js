import {Button} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect } from 'react';
import PageTitle from "../../components/PageTitle";
import { BASE_URL } from '../../config';


function AddBook() {
  var FormData = require('form-data');
  const [book, setBook] = useState({
    book_name: '',
    dimensions: '',
    pages: '',
    publication_date: '',
    language: '',
    description: '',
    unit_price: '',
    status: 'IN STOCK',
    qty: '',
    total_qty: '',
    image: null,
    category: null,
    author: null,
    publisher: '',
  });

  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('book_name', book.book_name);
    formData.append('dimensions', book.dimensions);
    formData.append('pages', book.pages);
    formData.append('publication_date', book.publication_date);
    formData.append('language', book.language);
    formData.append('description', book.description);
    formData.append('unit_price', book.unit_price);
    formData.append('status', book.status);
    formData.append('qty', book.qty);
    formData.append('total_qty', book.total_qty);
    formData.append('image', book.image);
    formData.append('category', book.category);
    formData.append('author', book.author);
    formData.append('publisher', book.publisher);

    fetch(BASE_URL + '/api/book/book/', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        // Reset form state after success
        setBook({
          book_name: '',
          dimensions: '',
          pages: '',
          publication_date: '',
          language: '',
          description: '',
          unit_price: '',
          status: 'IN STOCK',
          qty: '',
          total_qty: '',
          image: null,
          category: null,
          author: null,
          publisher: '',
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  };

  useEffect(() => {
    fetch(BASE_URL + '/api/category/categories/')
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    fetch(BASE_URL + '/api/author/authors/')
      .then((response) => response.json())
      .then((data) => {
        setAuthors(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const categoryOptions = categories.map((category) => (
    <option key={category.id} value={category.id}>
      {category.category_name}
    </option>
  ));
  console.log(categories)
  const authorOptions = authors.map((author) => (
    <option key={author.id} value={author.id}>
      {author.author_name}
    </option>
  ));

  const handleImageChange = (event) => {
    setBook({ ...book, image: event.target.files[0] });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBook({ ...book, [name]: value });
  };

  return (
    <>
    <PageTitle title="Thêm thể loại" />
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3">
        <Form.Label>Tên sách</Form.Label>
        <Form.Control name="book_name" value={book.book_name} onChange={handleInputChange}/>
      </Form.Group>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Kích thước</Form.Label>
          <Form.Control name="dimensions"
          value={book.dimensions}
          onChange={handleInputChange}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Số trang</Form.Label>
          <Form.Control type="number" name="pages"
          value={book.pages}
          onChange={handleInputChange}/>
        </Form.Group>
        <Form.Group as={Col} >
          <Form.Label>Ngày xuất bản</Form.Label>
          <Form.Control type="date" name="publication_date"
          value={book.publication_date}
          onChange={handleInputChange}/>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridAddress2">
        <Form.Label>Nhà xuất bản</Form.Label>
        <Form.Control name="publisher"
          value={book.publisher}
          onChange={handleInputChange}/>
      </Form.Group>
      </Row>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Chọn file ảnh</Form.Label>
        <Form.Control type="file" name="image" onChange={handleImageChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Mô tả</Form.Label>
        <Form.Control as="textarea" name="description"
          value={book.description}
          onChange={handleInputChange}/>
      </Form.Group>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridAddress2">
        <Form.Label>Đơn giá</Form.Label>
        <Form.Control type="number" name="unit_price"
          value={book.unit_price}
          onChange={handleInputChange}/>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridAddress2">
        <Form.Label>Số lượng tồn</Form.Label>
        <Form.Control type='number' name="qty"
          value={book.qty}
          onChange={handleInputChange}/>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridAddress2">
        <Form.Label>Tổng số lượng</Form.Label>
        <Form.Control type='number' name="total_qty"
          value={book.total_qty}
          onChange={handleInputChange}/>
      </Form.Group>
      
    </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Thể loại</Form.Label>
          <Form.Select name="category"
          value={book.category ? book.category.id : ''}
          onChange={handleInputChange}>
            <option value="">Chọn thể loại</option>
            {categoryOptions}
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Tác giả</Form.Label>
          <Form.Select name="author"
          value={book.author ? book.author.id : ''}
          onChange={handleInputChange}>
            <option value="">Chọn tác giẩ</option>
            {authorOptions}
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Ngôn ngữ</Form.Label>
          <Form.Control name="language"
          value={book.language}
          onChange={handleInputChange}/>
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Lưu
      </Button>
        {" "}
      <Button variant="danger" type="reset">
        Hủy
      </Button>
    </Form>
    </>
  );
}

export default AddBook;