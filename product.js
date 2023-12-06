import { useState } from "react";
function Product(props) {
   let [done,isDone] = useState('incomplete')
   function check() {
    isDone('completed')
   }
   
    return (
        <div className="product">
            <h1>{props.id}</h1>
            <img src={props.url}/>
            <h1>{props.day}</h1>
            <h2>{props.topic}</h2>
            <h3>{done}</h3>
            <button onClick={check}>done</button>
        </div>
    );
}

export default Product;
