import React, { Component } from "react";
import { Parallax as Px } from "react-parallax";
import Tupac from "./imgs/tupac.png";
import Toopac from "./imgs/2pac.png";
import crosshair from "./imgs/crosshair.png";
import LosAng from "./imgs/LA.png";
import whiteTruck from "./imgs/white-moving-truck-near-pine-trees.png"
import Ak from "./imgs/ak-47.png";
import discs from "./imgs/discs.png";
class Home extends Component {
  render() {
    return (
      <div>
        <div className="Plax-Container">
          <Px
            className="Home-Header-Parallax"
            bgImage={whiteTruck}
            bgImageAlt="movers with white cross country moving truck doing long distance move in front of pine trees and hills"
            strength={500}
            blur={{ min: -15, max: 20 }}

          >
            <div className="Plax-Text">
              <div className="text-spacer"></div>
              <div><h1 >Best Movers gets moving companies near you</h1></div>
              <h3>Get 100% free moving quotes from cross country movers. </h3>
              <h3>Need long distance movers? Get 3 quotes right now. </h3> <h3>Want local movers? We can help as easy as 1 2 3!</h3>
              <div className="text-spacer"></div>

            </div>
          </Px>

        </div>

        <section className="hero">
          <div
            className="background-image"
            style={{ backgroundImage: "url()" }}
          />
        <h1> Want long distance movers?</h1>

            <h2>Our long distance moving companies are licesned by the Department of Transportation</h2>
            <p>We work with dozens of long distance moving companies, each one has all of the paperwork required by the United States Department of Transportation to legally move your items. Its very important to only hire a licensed moving carrier when planning a long distance move. Find out more about the difference between licensed moving companies as opposed to moving brokers. </p>
        <h2>Professional movers </h2>
            <p>Our moving companies only hire proessional movers who have passed background checks and drug testing. You can expect kind and courteous movers who will treat your items with the same care you would. </p>
            <h2>A large fleet of the newest moving trucks </h2>
            <p>Our moving trucks are modern moving trucks with air ride suspension which reduces the amount of vibrations and therefore keeps your household goods safe for the long trip cross country. Our moving trucks have clean maintenance records, and spotless trailers so you can relax and know that your items will be delivered in the exact same shape they were when they went on the moving truck.</p>
            <h2>Considering UHaul truck rental?</h2>
            <p>Forget about difficult options with lots of hidden costs like UHaul Truck Rental, and let us do the packing and loading for you.</p>




          <div>  <h2>Get a free moving quote now!</h2></div>

        </section>

        <section className="our-work">
          <h3 className="title">Googling how to prepare for your move?</h3>
          <p>
            Check out our blog posts and get some good ideas about how to decide between movers, how to pack, and all the other moving related questions you may have.
          </p>
          <br />

          <ul className="grid">
            <li className="small" style={{ backgroundImage: "url()" }} />
            <li className="large" style={{ backgroundImage: "url()" }} />
            <li className="large" style={{ backgroundImage: "url()" }} />
            <li className="small" style={{ backgroundImage: "url()" }} />
          </ul>
        </section>

        <section className="features">
          <h3 className="title">Features and services</h3>
          <p>
            What is it exactly that a full service moving company does?
          </p>
          <br />

          <ul className="grid">
            <li>
              <i className="fa fa-camera-retro" />
              <h4>Loading and unloading</h4>
              <p>
                Included with every move is a full loading and unloading service. Depending on the size of your move, we will send between 2-6 professional movers to handle all of the labor neccessary to get your move taken care of. Our men will load all of the things you need to have shipped, and stack them neatly on our truck ensuring that everything will stay in place for the long journey to your new home. On the day of the delivery, one of our professional moving teams will also unload every last item off of the truck and get your entire house set up so you can relax, and get cozy in your new home that same day.
              </p>
            </li>
            <li>
              <i className="fa fa-cubes" />
              <h4>Disassembly and reassembly</h4>
              <p>
               Any items which will be easier to move, or which need to be taken apart to move safely or even to make it down the stairs or out the front door our movers will dissaemble with care. All the little nuts and bolts and screws will be bagged in ziplocs so that every single washer will be there when we get to your new home and reassemble all of your furniture.
              </p>
            </li>
            <li>
              <i className="fa fa-newspaper-o" />
              <h4>Basic Packing</h4>
              <p>
                Included with every long distance move, or local move is a basic packing service. Our movers will wrap all of your snug as a bug in a rug in moving blankets and padded moving quilts before loading them onto our moving trucks. Any other packing materials you may need we will have on the truck just in case :)
              </p>
            </li>
          </ul>
        </section>

        <section className="reviews">
          <h3 className="title">What others say:</h3>

          <p className="quote">
          Wow I can't believe what a great job these guys did. My only problem? Why did I do so many moves myself when I could have just hired Best Movers to do it for me?
          </p>
          <p className="author">— Bob Smith</p>

          <p className="quote">
            I was in a jam and Best Movers saved the day. Had to move my mother after my father died. She was alone, miserable and dreading the move. Best Movers came in, packed the whole house up in a day, and got all of my mothers stuff out to us in no time. They were so nice to her and really helped my family through a time and helped us get our best foot forward. Love you guys
          </p>
          <p className="author">— Jimmy Cohn</p>

          <p className="quote">
            Best Movers work like gangbusters. We needed my entire startup moved to our new location across town like yesterday and I had no idea how to get this sorted. Comes Best Movers to pack up 30 workstations, cubicles, desks, office supplies and get my entire staff set up the next day. Did such a great job on that one that I've now used them a dozen times to move my team all around the country. These guys really are the best movers Coast to Coast for both local movers, or cross country movers. A team you can trust for any job. Highly recommend.
          </p>
          <p className="author">— Gary V</p>
        </section>

        <section className="contact">
          <h3 className="title">Join our newsletter</h3>
          <p>
            כל הדברים שבגמרא הבבלי חייבין כל ישראל ללכת בהם וכופין כל עיר ועיר
            וכל מדינה ומדינה לנהוג בכל המנהגות שנהגו חכמי הגמרא
          </p>
          <br />

          <form>
            <input type="email" placeholder="Email" />
            <a href="#" className="btn">
              Subscribe now
            </a>
          </form>
        </section>
      </div>
    );
  }
}
export default Home;
