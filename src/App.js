import React from "react";

const App = () => (
  <div className="container">
    <div className="images">
      <div className="image">
        <img src={require("./01 small.png")} />
        <h3>alex</h3>
        <p className="paragraph">artist: oswin blue</p>
        <p className="paragraph">price: $1900</p>
      </div>

      <div className="image">
        <img src={require("./02 small.png")} />
        <h3>bob</h3>
        <p className="paragraph">artist: oswin blue</p>
        <p className="paragraph">price: $2100</p>
      </div>

      <div className="image">
        <img src={require("./03 small.png")} />
        <h3>dave</h3>
        <p className="paragraph">artist: oswin blue</p>
        <p className="paragraph">price: $1500</p>
      </div>

      <div className="image">
        <img src={require("./04 small.png")} />
        <h3>karl</h3>
        <p className="paragraph">artist: oswin blue</p>
        <p className="paragraph">price: $1200</p>
      </div>
    </div>
  </div>
);

export default App;
