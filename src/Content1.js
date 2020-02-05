import React, { Component } from "react";
import womanHoldingBox from "./imgs/woman-holding-moving-box.jpg";
import movingTruck from "./imgs/moving-truck-clear-sky-expressway.jpg"
import places from "./places"


class Content1 extends Component {
  render() {
    return (
      <div className="MovingFaq">
        <section className="hero">
          <div
            className="background-image"
            style={{ backgroundImage: `url(${womanHoldingBox})` }}
          />
        <h1>Moving Faq</h1>
          <h3>Lets answer the most frequently asked questions about moving</h3>
        </section>
        <section className="our-work">
          <h2>How can I find movers near me?</h2>
          <p>Well you are certainly in the right place now! Our team is happy to find you local movers near you who will do a great job and get you into your new home in no time.</p>
          <spacer></spacer>
          <h2>How should I pack dishes?</h2>
          <p>Check out our handy guide on how to pack! Keep in mind our movers can also provide you with a full packing service where we will bring every kind of packing material you could possibly need. Everything from small moving boxes, or medium moving boxes, to the bubble wrap, shrink wrap, or even hanging wardrobe boxes so that your clothes can all stay nice and neat on their hangars and arrive crisp and ready to wear. </p>
        <spacer></spacer>
        <h2>Can you ship pianos?</h2>
        <p>Sure can! We've moved everything from Steinway Grands to the classic Fender Rhodes. We give discounts if you can play Chopins nocturnes :) </p>
        <spacer></spacer>
        <h2>Do you handle auto shipping?</h2>
        <p>Absolutely! We work with the nations top auto shipping companies and can offer you a number of great solutions for shipping your car or shipping motorcycles. Check out more information on auto shipping here. </p>
        <spacer></spacer>
        <h2>Whats a binding quote? Or a binding moving estimate?</h2>
        <p> A binding quote is the contract which licensed moving companies use to make a formal agreement to fulfill your move. The way these quotes work is that we say based on this amount of stuff, we can all agree that the bill is this amount per unit.  Movers charge either by the foot or by the pound for any cross country move, and sometimes also for local moves. Shorter distance local moves are typically billed by the hour. The binding part of this estimate is that the license requires the movers to honor the rate they agree to on the day of the move. This is one of the big advantages of using a licensed moving company as opposed to a broker agency. Unfortunately brokers are notorious for bait and switch tactics and holding peoples items hostage. Licensed moving carriers such as the companies we partner with will honor their rates on move day. Check out Understanding my moving quote </p>
          <spacer></spacer>
          <h2> So are you a moving company? Or are you moving brokers?</h2>
          <p> Actually we are neither. We are like the travel agents of the moving industry. We deal with thousands of moves per month and can therefore get you great deals on your move, and help you find a company which will best fit your needs. We handle the logistical side of building estimates, scheduling moves, and keeping customers happy for a few dozen moving companies around the country. With us, you get the best of both worlds. All of the advantages of working with only licensed moving companies, and all of the advantages while also having the advanage of multiple options so that you can get the best deal for your move. </p>
            <h2>I have a relocation package, can you work with my HR Department</h2>

            <p>First of all congratulations on having such an amazing job that they are taking care of you like this! We handle thousands of moves every month, and its rare for a compnay offer a relocation package which will cover the cost of hiring a moving company for your cross country move. That being said, we work with HR Departments all the time and are happy to accomodate. In our experience what most HR Departments require in order to pay for your relocation is to have 3 or 4 binding estimates. Nine times out of ten your company will want to pay for the lowest priced quote you submit. Keep in mind that once they approve a price they will not want to pay more so it's really important to get an accurate quote which leaves some buffer in case there are any last minute additions.</p>

      </section>
      <section className="hero">
        <div
          className="background-image"
          style={{ backgroundImage: `url(${movingTruck})` }}
        />
      <h1>Ready to hit the road?</h1>
    </section>

      <section className="reviews">
        <h3 className="title">What others say:</h3>

        <p className="quote">
        "I've moved a half dozen times for work in the last 4 years. Never had such an easy exprience until I found Best Movers.
      "  </p>
        <p className="author">Bill Hitchins</p>

        <p className="quote">"Got a quote from another moving company for less than half of the price and felt like maybe something wasn't quite right. Called Best Movers and really liked them but their quote came in high. Took the lowball offer and should have gone with my gut. When those clows showed up all of a sudden they demanded more than triple what they had quoted me! Luckily Best Movers was still able to get a truck out to me and saved me a fortune.
      "  </p>
        <p className="author">Rick Sanchez</p>

        <p className="quote">
        "Such nice movers"
        </p>
        <p className="author">Monique D</p>
      </section>

        <h1> Do you have a moving company near me?</h1>

        <h2> </h2>
        {places.map( (place, i)=> (<h2 key={i}>Do you have movers in {place}?</h2>)) }

{/*try using flatmap to work thru different sentences here for different h2s questions.map or questions.flatmap*/}


      </div>
    );
  }
}
export default Content1;
