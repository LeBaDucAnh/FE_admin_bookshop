import {Button} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../config';

function UpdateBook({props}) {
  const [book, setBook] = useState({});
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    axios.get(`${BASE_URL}/api/book/books/${props.bookID}/`)
      .then(res => {
        console.log(props.bookID);
        setBook(res.data);
        setLoading(false);
      })
      .catch(err => console.log(err));
      
  }, []);
console.log(book);
  useEffect(() => {
    axios.get(BASE_URL + '/api/category/categories/')
      .then(res => {
        setCategories(res.data);
      })
      .catch(err => console.log(err));
    
    axios.get(BASE_URL + '/api/author/authors/')
      .then(res => {
        setAuthors(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  console.log(categories);
  console.log(authors);
  const categoryOptions = categories.map((category) => (
    <option key={category.id} value={category.id}>
      {category.category_name}
    </option>
  ));


  const authorOptions = authors.map((author) => (
    <option key={author.id} value={author.id}>
      {author.author_name}
    </option>
  ));
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setBook({ ...book, [name]: value });
  };

  // const handleChange = e => {
  //   setBook({
  //     ...book,
  //     [e.target.name]: e.target.value
  //   });
  // };

  const handleSubmit = e => {
    e.preventDefault();
    axios.put(BASE_URL + "/api/book/book/"+ props.id + '/', book)
      .then(res => {
        history.push('/books/');
      })
      .catch(err => console.log(err));
  };

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  return (
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3">
        <Form.Label>Tên sách</Form.Label>
        <Form.Control name="book_name" value={book.book_name} onChange={handleChange}/>
      </Form.Group>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Kích thước</Form.Label>
          <Form.Control name="dimensions" value={book.dimensions} onChange={handleChange}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Số trang</Form.Label>
          <Form.Control type="number" name="pages" value={book.pages} onChange={handleChange}/>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Ngày xuất bản</Form.Label>
          <Form.Control type="date" name="publication_date" value={book.publication_date} onChange={handleChange}/>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridAddress2">
        <Form.Label>Nhà xuất bản</Form.Label>
        <Form.Control/>
      </Form.Group>
      </Row>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Chọn file ảnh</Form.Label>
        <Form.Control type="file" name="image" value={book.image} onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Mô tả</Form.Label>
        <Form.Control as="textarea" value={book.description} onChange={handleChange}/>
      </Form.Group>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridAddress2">
        <Form.Label>Đơn giá</Form.Label>
        <Form.Control type="number" name="unit_price" value={book.unit_price} onChange={handleChange}/>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridAddress2">
        <Form.Label>Số lượng tồn</Form.Label>
        <Form.Control type='number' name="qty" value={book.qty} onChange={handleChange}/>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridAddress2">
        <Form.Label>Tổng số lượng</Form.Label>
        <Form.Control type='number' name="total_qty" value={book.total_qty} onChange={handleChange}/>
      </Form.Group>
      
    </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Thể loại</Form.Label>
          <Form.Select name="category" value={book.category ? book.category.id : ''} onChange={handleChange}>
            <option>Choose...</option>
            {/* {categories.map(category => (
            <option key={category.id} value={category.id}>{category.category_name}</option>
          ))} */}
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Tác giả</Form.Label>
          <Form.Select name="author" value={book.author ? book.author.id : ''} onChange={handleChange}>
            <option>Choose...</option>
            {/* {authors.map(author => (
            <option key={author.id} value={author.id}>{author.author_name}</option>
          ))} */}
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Ngôn ngữ</Form.Label>
          <Form.Control name="language" value={book.language} onChange={handleChange}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Trạng thái</Form.Label>
          <Form.Select name="status" value={book.status} onChange={handleChange}>
            <option value="IN STOCK">Available</option>
            <option value="OUT OF STOCK">Out of stock</option>
          </Form.Select>
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
  );
}

export default UpdateBook;