import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LightButton from "./components/buttons/LightButton";

function App() {
  return (
    <div className={"bg-peach"}>
      <h1>{"The quick brown fox jumps over the lazy dog"}</h1>
      <h2>{"The quick brown fox jumps over the lazy dog"}</h2>
      <h3>{"The quick brown fox jumps over the lazy dog"}</h3>
      <p className={"bg-lightPeach text-darkGrey"}>
        {
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nun. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti."
        }
      </p>
      <LightButton label={"Learn More"} />
    </div>
  );
}

export default App;
