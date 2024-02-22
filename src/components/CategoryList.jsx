import products from "../products";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function CategoryList() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      {products.map((product, index) => (
        <Card style={{ width: "18rem" }} key={index}>
          <Card.Img variant="top" src={product.imgURL} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.desc}</Card.Text>
            <Button variant="primary">{product.price},000 DT</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CategoryList;
