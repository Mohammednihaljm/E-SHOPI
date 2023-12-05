import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Rating from "../components/Rating";
import CardBody from "react-bootstrap/esm/CardBody";
import { Helmet } from "react-helmet-async";
// import { Button } from "bootstrap";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, product: action.payload, loading: false };
    case "FETCH_Fail":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const ProductScreen = () => {
  const params = useParams();
  const { slug } = params;

  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: "",
  });

  // const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(`/api/products/slug/${slug}`);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_Fail", payload: err.message });
      }
      // setProducts(result.data)
    };
    fetchData();
  }, [slug]);

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div>
      <Row>
        <Col md={6}>
          <img
            className="img-large"
            src={product.image}
            alt={product.name}
          ></img>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Helmet>
                <title>{product.name}</title>
              </Helmet>
              <h1>{product.name}</h1>
              
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                rating={product.rating}
                numReviews={product.numReviews}
              ></Rating>
            </ListGroup.Item>
            <ListGroup.Item>Price : $ {product.price}</ListGroup.Item>
            <ListGroup.Item>Description:<p> {product.description}</p></ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <CardBody>
              <ListGroup  variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>${product.price}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>{product.countInStock>0?
                    <Badge bg="success">in stock</Badge>:
                    <Badge bg="danger">unavailable</Badge>}
                    </Col>
                  </Row>
                </ListGroup.Item>
                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <div className="d-grid">
                      <Button variant="primary">
                        ADD TO CART
                      </Button>

                    </div>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductScreen;
