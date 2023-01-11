import React from "react";
import Wrapper from "./Design.styled";

import { Link } from "react-router-dom";

const DesignSystem = () => {
  return (
    <Wrapper className="container bg-dark text-white">
      <h1>Design System</h1>

      <section id="colors">
        <h2 className="numbered-title">
          <span>01</span>colors
        </h2>
        <div className="flex">
          <div style={{ flexGrow: 1 }}>
            <div
              className="bg-dark text-white ff-serif fs-500"
              style={{ padding: "3rem 1rem 1rem", border: "1px solid white" }}
            >
              #0B0D17
            </div>
            <p>
              <span className="text-light">RGB</span> 11, 13, 23
            </p>
            <p>
              <span className="text-light">HSL</span> 230°, 35%, 7%
            </p>
          </div>

          <div style={{ flexGrow: 1 }}>
            <div
              className="bg-light text-dark ff-serif fs-500"
              style={{ padding: "3rem 1rem 1rem", border: "1px solid white" }}
            >
              #D0D6F9
            </div>
            <p>
              <span className="text-light">RGB</span> 208, 214, 249
            </p>
            <p>
              <span className="text-light">HSL</span> 231°, 77%, 90%
            </p>
          </div>

          <div style={{ flexGrow: 1 }}>
            <div
              className="bg-white text-dark ff-serif fs-500"
              style={{ padding: "3rem 1rem 1rem", border: "1px solid white" }}
            >
              #FFFFFF
            </div>
            <p>
              <span className="text-light">RGB</span> 255, 255, 255
            </p>
            <p>
              <span className="text-light">HSL</span> 0°, 0%, 100%
            </p>
          </div>
        </div>
      </section>

      <section id="typography" style={{ margin: "4rem 0" }}>
        <h2 className="numbered-title">
          <span>02</span>Typography
        </h2>
        <div class="flex">
          <div className="flow" style={{ flexBasis: "100%" }}>
            <div>
              <p className="text-light">
                Heading 1 - Bellefair Regular - 150px
              </p>
              <p className="fs-900 uppercase ff-serif">Earth</p>
            </div>
            <div>
              <p className="text-light">
                Heading 2 - Bellefair Regular - 100px
              </p>
              <p className="fs-800 uppercase ff-serif">Venus</p>
            </div>
            <div>
              <p className="text-light">Heading 3 - Bellefair Regular - 56px</p>
              <p className="fs-700 uppercase ff-serif">Jupiter & Saturn</p>
            </div>
            <div>
              <p className="text-light">Heading 4 - Bellefair Regular - 32px</p>
              <p className="fs-600 uppercase ff-serif">
                Uranus, Neptune, & Pluto
              </p>
            </div>
            <div>
              <p className="text-light">
                Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character
                Space
              </p>
              <p className="fs-500 uppercase ff-sans-cond letter-spacing-1 text-light">
                So, you want to travel to space
              </p>
            </div>
          </div>

          <div className="flow" style={{ flexBasis: "100%" }}>
            <div>
              <p className="text-light">
                Subheading 1 - Bellefair Regular - 28px
              </p>
              <p className="fs-500 uppercase ff-serif">384,400 km</p>
            </div>
            <div>
              <p className="text-light">
                Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character
                Space
              </p>
              <p className="fs-200 uppercase ff-sans-cond letter-spacing-3">
                Avg. Distance
              </p>
            </div>
            <div>
              <p className="text-light">
                Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space
              </p>
              <p className="fs-300 uppercase ff-sans-cond letter-spacing-2">
                Europa
              </p>
            </div>
            <div>
              <p className="text-light">Body Text</p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
                neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
                ligula sollicitudin laoreet viverra, tortor libero sodales leo,
                eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
                Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh
                nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel,
                nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor
                libero sodales leo, eget blandit nunc tortor eu nibh. Nullam
                mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit
                amet, consectetuer adipiscing elit. Phasellus hendrerit.
                Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel,
                dapibus id, mattis vel, nisi.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="flow" id="interactive-elements">
        <h2 class="numbered-title">
          <span>03</span>Interactive elements
        </h2>

        {/* <!-- navigation --> */}
        <div>
          <nav>
            <ul className="primary-navigation underline-indicators flex">
              <li className="active">
                <Link
                  className="uppercase text-white letter-spacing-2"
                  to="/design"
                >
                  <span>01</span>
                  Active
                </Link>
              </li>
              <li>
                <Link
                  className="uppercase text-white letter-spacing-2"
                  to="/design"
                >
                  <span>02</span>
                  Hovered
                </Link>
              </li>
              <li>
                <Link
                  className="uppercase text-white letter-spacing-2"
                  to="/design"
                >
                  <span>03</span>
                  Idle
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div class="flex">
          {/* <!-- explore button --> */}
          <div
            style={{
              marginTop: "5rem",
              marginBottom: "5rem",
              marginRight: "auto",
              marginLeft: "5rem",
            }}
          >
            <Link
              to="/design"
              className="btn--explore bg-white text-dark uppercase ff-serif fs-600"
            >
              Explore
            </Link>
          </div>
        </div>
        <div className="flow">
          {/* <!-- Tabs --> */}
          <div className="tab-list underline-indicators flex">
            <button
              aria-selected="true"
              className="btn uppercase text-light ff-sans-cond letter-spacing-2"
            >
              Moon
            </button>
            <button
              aria-selected="false"
              className="btn uppercase text-light ff-sans-cond letter-spacing-2"
            >
              Mars
            </button>
            <button
              aria-selected="false"
              className="btn uppercase text-light ff-sans-cond letter-spacing-2"
            >
              Europa
            </button>
          </div>

          {/* <!-- Dots --> */}

          <div className="dot-indicators flex ">
            <button aria-selected="true">
              <span className="sr-only">slide title</span>
            </button>
            <button aria-selected="false">
              <span className="sr-only">slide title</span>
            </button>
            <button aria-selected="false">
              <span className="sr-only">slide title</span>
            </button>
          </div>

          {/* <!-- Numbers --> */}

          <div className="numbers-indicators flow">
            <button
              aria-selected="true"
              className="bg-dark btn text-white fs-400 ff-serif"
            >
              1
            </button>
            <button
              aria-selected="false"
              className="bg-dark btn text-white fs-400 ff-serif"
            >
              2
            </button>
            <button
              aria-selected="false"
              className="bg-dark btn text-white fs-400 ff-serif"
            >
              3
            </button>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default DesignSystem;
