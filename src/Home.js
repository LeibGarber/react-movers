import React, { Component } from "react";
import { Parallax as Px } from "react-parallax";
import Tupac from "./imgs/tupac.png";
import Toopac from "./imgs/2pac.png";
import crosshair from "./imgs/crosshair.png";
import LosAng from "./imgs/LA.png";
import Ak from "./imgs/ak-47.png";
import discs from "./imgs/discs.png";
class Home extends Component {
  render() {
    return (
      <div>
        <div className="Plax-Container">
          <Px
            className="Home-Header-Parallax"
            bgImage={LosAng}
            strength={500}
            blur={{ min: -15, max: 20 }}
          >
            <img src={Tupac} className="Tupac" />
          </Px>
          <Px
            className="Crosshair"
            strength={300}
            bgImage="none"
            renderLayer={pg => (
              <img
                src={crosshair}
                style={{
                  position: "fixed",
                  top: pg * 40 * Math.sin(7 * pg) + 20 + "vh",
                  left: 100 * pg - 50 + "vw",
                  display: pg > 0.95 ? "none" : ""
                }}
              />
            )}
          />
        </div>

        <section className="hero">
          <div
            className="background-image"
            style={{ backgroundImage: "url()" }}
          />
          <h1>Reppin the best coast beeeyach!</h1>
          <h3>Write soome other things here about this here thing.</h3>
          <img src={Ak} className="Ak" />
          <Px
            className="discs"
            strength={250}
            bgImage="none"
            renderLayer={pg => (
              <img
                src={discs}
                style={{
                  position: "fixed",
                  top: "50vh",
                  left: 100 * pg + "vw",
                  display: pg < 0.37 ? "none" : ""
                }}
              />
            )}
          />
        </section>

        <section className="our-work">
          <h3 className="title">Some recent work</h3>
          <p>
            כל הדברים שבגמרא הבבלי חייבין כל ישראל ללכת בהם וכופין כל עיר ועיר
            וכל מדינה ומדינה לנהוג בכל המנהגות שנהגו חכמי הגמרא
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
            כל הדברים שבגמרא הבבלי חייבין כל ישראל ללכת בהם וכופין כל עיר ועיר
            וכל מדינה ומדינה לנהוג בכל המנהגות שנהגו חכמי הגמרא
          </p>
          <br />

          <ul className="grid">
            <li>
              <i className="fa fa-camera-retro" />
              <h4>Photography</h4>
              <p>
                כל הדברים שבגמרא הבבלי חייבין כל ישראל ללכת בהם וכופין כל עיר
                ועיר וכל מדינה ומדינה לנהוג בכל המנהגות שנהגו חכמי הגמרא
              </p>
            </li>
            <li>
              <i className="fa fa-cubes" />
              <h4>Web Development</h4>
              <p>
                כל הדברים שבגמרא הבבלי חייבין כל ישראל ללכת בהם וכופין כל עיר
                ועיר וכל מדינה ומדינה לנהוג בכל המנהגות שנהגו חכמי הגמרא
              </p>
            </li>
            <li>
              <i className="fa fa-newspaper-o" />
              <h4>Content Editing</h4>
              <p>
                כל הדברים שבגמרא הבבלי חייבין כל ישראל ללכת בהם וכופין כל עיר
                ועיר וכל מדינה ומדינה לנהוג בכל המנהגות שנהגו חכמי הגמרא
              </p>
            </li>
          </ul>
        </section>

        <section className="reviews">
          <h3 className="title">What others say:</h3>

          <p className="quote">
            Have you ever noticed that anybody driving slower than you is an
            idiot, and anyone going faster than you is a maniac?
          </p>
          <p className="author">— George Carlin</p>

          <p className="quote">
            'Cause I'm leavin' on a jet plane Don't know when I'll be back again
            Oh babe, I hate to go
          </p>
          <p className="author">— John Denver</p>

          <p className="quote">
            I'm not so mean. I wouldn't ever set out to hurt anyone deliberately
            unless it was, you know, important - like a league game or
            something.{" "}
          </p>
          <p className="author">— Dick Butkiss</p>
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
