import React, { Component } from "react";
import { Parallax as Px } from "react-parallax";
import cityTruck from "./imgs/open-truck-parked-in-city.png";
class LocalMovers extends Component {
  render() { return (
    <div>
    <div className="Plax-Container">
      <Px
        className="Home-Header-Parallax"
        bgImage={cityTruck}
        bgImageAlt="box truck parked in city in front of home being loaded "
        strength={500}
        blur={{ min: -15, max: 20 }}

      >
        <div className="Plax-Text">
          <div className="text-spacer"></div>
          <div><h1 >Local Movers near you</h1></div>



        </div>
      </Px>

    </div>

    </div>

  );
}
}
export default LocalMovers;
