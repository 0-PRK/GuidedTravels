// import Carousel from 'react-bootstrap/Carousel';
// import Card1 from "./cards";
// import UseFetch from "../Hooks/UseFetch";
// import { useParams } from "react-router-dom";

// function Carousel1() {
//   const { id } = useParams();
//   const { user } = UseFetch(`http://localhost:4000/plans/user/plan/${id}`);
//   const numCards = user ? user.planCount : 0;

//   // Calculate the number of Carousel items needed
//   const numItems = Math.ceil(numCards / 4);

//   return (
//     <Carousel>
//       {/* Loop through the `user.plan` and generate Carousel items */}
//       {user && user.plans.map((plan, index) => (
//         <Carousel.Item key={index}>
//           <Card1 plan={plan} />
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// }

// export default Carousel1;