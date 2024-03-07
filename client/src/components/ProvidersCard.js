import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ProvidersCard = (props) => {
    return ( 
        <>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <img src={props.provider.image} alt={props.provider.name} />
        <Card.Title>{props.provider.name}</Card.Title>
        <Card.Text>
          {props.provider.specialty}
        </Card.Text>
      <Card.Text>
          <a> </a>{props.provider.rating} {props.provider.reviewCount} 
      </Card.Text>
      {props.provider.tags.map((tag, index) => (
                        <span key={index} className='badge badge-pill'>{tag}</span>
      ))}
      </Card.Body>
    </Card>

        </>
     );
}
 
export default ProvidersCard;