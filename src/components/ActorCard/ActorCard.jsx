import { Link } from "react-router-dom";
 
 export default function ActorCard(props) {
    console.log(props)
    
   return (
     <div>
        <img src="https://picsum.photos/id/237/200/300" alt="" />
       {props.actor}
     </div>
   )
 }
 