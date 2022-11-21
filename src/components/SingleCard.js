import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function SingleCard({ data }) {
  return (
    <div>
      {data?.map((item, i) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant='top' src={item?.photos} />
          <Card.Body>
            <Card.Title>{item?.name}</Card.Title>
            <Card.Text>
              {item?.description}
            </Card.Text>
          </Card.Body>
          <ListGroup className='attributes'>
            <ListGroup.Item>Age: {item?.age}</ListGroup.Item>
            <ListGroup.Item>Gender: {item?.gender}</ListGroup.Item>
            <ListGroup.Item>Size: {item?.size}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            {/* <Card.Link href='#'>Card Link</Card.Link>
            <Card.Link href='#'>Another Link</Card.Link> */}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default SingleCard;
