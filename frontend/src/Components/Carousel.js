import Carousel from 'react-bootstrap/Carousel';
import Card1 from "./cards";

function Carousel1() {
  const numCards = 5; // Assuming you have the total number of cards

  // Calculate the number of Carousel items needed
  const numItems = Math.ceil(numCards / 4);

  // Create an array with `numItems` elements
  const carouselItems = Array.from({ length: numItems });

  return (
    <Carousel>
      {/* Loop through the `carouselItems` and generate Carousel items */}
      {carouselItems.map((_, index) => (
        <Carousel.Item key={index}>
          {/* Calculate the range of cards to be displayed in the current item */}
          {Array.from({ length: 4 }).map((_, cardIndex) => (
            <Card1 key={index * 4 + cardIndex} index={index * 4 + cardIndex} />
          ))}
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Carousel1;
