import React from "react";
import ImageContact from "./ImageContact";
const App = () => (
  <div className="container">
    <div className="images">
      <ImageContact title="alex" artistName="oswin blue" price="$1900" />
      <ImageContact title="bob" artistName="oswin blue" price="$2200" />
      <ImageContact title="alex" artistName="oswin blue" price="$1200" />
      <ImageContact title="alex" artistName="oswin blue" price="$1250" />
    </div>
  </div>
);

export default App;
