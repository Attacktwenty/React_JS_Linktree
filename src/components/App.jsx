import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card.jsx";
import Links from "../Links.js";
import Avatar from "./Avatar.jsx";
import Icons from "./icons.jsx";

function CreateCard(link) {
  return <Card key={link.id} link={link.linkURL} details={link.name} />;
}

function App() {
  return (
    <div className="container">
      <Avatar />
      <p>@Jackdesigns</p>
      {Links.map(CreateCard)}
      <Icons />
    </div>
  );
}

export default App;
