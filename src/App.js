import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const names = ["Nazmus", "Shakib", "Sourav", "Jobayer", "Tusar"];
  const friends = [
    { Name: "Jabbar", Age: "24" },
    { Name: "Rafiq", Age: "37" },
    { Name: "Borkot", Age: "28" },
  ];
  const products = [
    { name: "PhotoShop", price: "$ 90.99" },
    { name: "Illustrator", price: "$ 80.99" },
    { name: "PDF Reader", price: "$ 70.99" },
    { name: "Premier Pro", price: "$ 450.99" },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Count></Count>
        <User></User>
        <ul>
          {friends.map((friend) => (
            <li>{friend.Name}</li>
          ))}

          {names.map((name) => (
            <li>{name}</li>
          ))}

          {products.map((product) => (
            <li>{product.name}</li>
          ))}
        </ul>
        {friends.map((fnd) => (
          <Friend friend={fnd}></Friend> // to call all element of an array in a arrow function
        ))}

        {products.map((pd) => (
          <Product product={pd}></Product> // to call all element of an array in a arrow function
        ))}

        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}

        {/* <Product name={products[1].name} price={products[1].price}></Product>
        <Product name={products[2].name} price={products[2].price}></Product> */}

        <Person name={names[0]} age="24" Year="2020"></Person>
        <Person name={names[1]} age="28" Year="2021"></Person>
        <Person name={names[2]} age="16" Year="2022"></Person>
        <Person name={names[3]} age="24" Year="2023"></Person>
      </header>
    </div>
  );
}
function User() {
  const [users, setUsers] = useState([]); // define state of the site (Changeable option of a website)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // load data from server
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h3>Dynamic User: {users.length}</h3>
      <ul>
        {users.map((user) => (
          <li>{user.email}</li>
        ))}
      </ul>
    </div>
  );
}

function Count() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1); // change state using hook

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

function Friend(props) {
  const friendStyle = {
    border: "2px solid gray",
    width: "400px",
    margin: "10px",
  };
  const { Name, Age } = props.friend; // to avoid writing of props.friend.propertyName many time
  return (
    <div style={friendStyle}>
      <h3>Name: {Name}</h3>
      <h5>Age: {Age}</h5>
    </div>
  );
}

function Product(props) {
  const productStyle = {
    border: "2px solid gray",
    borderRadius: "15px",
    backgroundColor: "lightgray",
    height: "200px",
    width: "200px",
    float: "left",
    margin: "10px",
  };

  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h4>{price}</h4>

      {/* <h3>{props.product.name}</h3> // two ways to call and print the objects
      <h4>{props.product.price}</h4> */}
      <button>Buy Now</button>
    </div>
  );
}

function Person(props) {
  const personStyle = {
    border: "2px solid yellow",
    margin: "10px",
    padding: "10px",
    width: "800px",
  };
  //console.log(props);
  // to pass data dynamically
  return (
    <div style={personStyle}>
      <h1>
        Name: {props.name} & Age: {props.age}
      </h1>
      <h3>Hero of the {props.Year} </h3>
    </div>
  );
}

export default App;
