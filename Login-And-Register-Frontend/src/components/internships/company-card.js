import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';


function Company(props) {
  return (
    // <div className="term">
    // <Card style={{ width: '18rem' }}>
    //   <Card.Img variant="top" src={props.image} />
    //   <Card.Body>
    //     <Card.Title>{props.name}</Card.Title>
    //     <Card.Text className='content'>
    //       {props.content}
    //     </Card.Text>
    //     <Button variant="primary">{props.duration}</Button>
    //   </Card.Body>
    // </Card>
    // </div>
    <div className="card">
        <div className='imageBox'>
    <dt>
        <img className='image' role="img" src={props.image} />
        {/* <span>{props.name}</span> */}
    </dt>
    </div>
    <div className='flexible'>
    <dd>
        {props.content}
    </dd>
    </div>
    <dd>
        <span>Duration - {props.duration}</span>
    </dd>
    <dt>
        <Button variant="primary" size="sm">Apply Now</Button>
        <Button variant="secondary" size="sm" onClick={() => {
            props.onClicked(props.id);
        }}>View Details</Button>
    </dt>
</div>
  );
}

export default Company;