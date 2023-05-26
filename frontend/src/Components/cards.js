import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card1() {
    return (

        <>
            <h1 className="text-center"> Your Trips</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some q uick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Read more</Button>
                            </Card.Body>
                        </div>

                    </div>
                </div>
            </div>

            <div className="col-md-2">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Read more</Button>
                    </Card.Body>
                </Card>

            </div>

            <div className="col-md-3">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Read more</Button>
                    </Card.Body>
                </Card>

            </div>
        </>


    );
}

export default Card1;