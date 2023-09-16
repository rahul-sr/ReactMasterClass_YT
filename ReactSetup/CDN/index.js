// import React from "react";

function Car(props) {
  const { brand, color } = props;
  return (
    <section>
      <h2>Car</h2>
      <p>
        This is a {brand} Car with {color} color
      </p>
      <Wheel number="1" />
      <Wheel number="2" />
      <Wheel number="3" />
      <Wheel number="4" />
    </section>
  );
}

function Wheel(props) {
  const { number } = props;
  return <div>Wheel {number}</div>;
}

const container = document.getElementById("myApp");
const root = ReactDOM.createRoot(container);
const element = <Car brand="Mercedes" color="red" />;

root.render(element);
