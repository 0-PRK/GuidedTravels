import React from "react";
import img1 from "./images/bkt.jpg";
import img2 from "./images/lum.jpg";
import img3 from "./images/boud.jpg";
import img4 from "./images/chit.webp";
import img5 from "./images/pkh.webp";

export default function Home() {
  return (
    <>
      <div className="center">
        <div div className="bg img-fluid ">
          <div className="align">
            <br />
            <br />
            WELCOME TO
            <br />
            THE
            <br />
            <div style={{ color: "#FFFFFF" }}>
              "LAND OF THE MOUNTAINS" <br />
              <br />
              <br /> <br />
            </div>
          </div>
          <div className="bg1">
            <div className="align1">
              <div className="align2">
                <br />
              </div>
              LET'S GO
              <br />
              <div className="align2">
                From the soaring peaks of the Himalayas to the serene beauty of
                its many lakes and rivers, Nepal is a land of astonishing
                natural wonders. Explore the natural beauty and discover the
                warmth and hospitality of Nepalese people.
                <br />
                <br />
              </div>
            </div>
            {/* <div className="card" style={{ width: "25rem" }}>
                <img
                  src={img1}
                  className=" card-img-top"
                  alt="Logo"
                  width="500"
                  height="300"
                />
                <div className="card-body">
                  <div className="align3">
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div> 
               </div>
        </div>*/}
            <div className="row">
              <div className="col-lg-6 mb-4">
                <div
                  className="card"
                  style={{
                    borderTopLeftRadius: "50px",
                    borderTopRightRadius: "50px",
                    borderBottomLeftRadius: "50px",
                    borderBottomRightRadius: "50px",
                  }}
                >
                  <img
                    src={img1}
                    className=" card-img-top"
                    alt="Logo"
                    width="500"
                    height="300"
                    style={{
                      borderTopLeftRadius: "50px",
                      borderTopRightRadius: "50px",
                    }}
                  />
                  <div className="align4">
                    <div
                      className="card-body"
                      style={{
                        borderBottomLeftRadius: "50px",
                        borderBottomRightRadius: "50px",
                      }}
                    >
                      <p className="card-text">BHAKTAPUR</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="accordion" id="accordionExample1">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne1"
                            aria-expanded="true"
                            aria-controls="collapseOne1"
                          >
                            ROYAL
                          </button>
                        </h2>
                        <div
                          id="collapseOne1"
                          className="accordion-collapse collapse show"
                          data-bs-parent="#accordionExample1"
                        >
                          <div className="accordion-body">
                            <strong>
                              This is the first item's accordion body.
                            </strong>{" "}
                            It is shown by default, until the collapse plugin
                            adds the appropriate classNamees that we use to
                            style each element. These classNamees control the
                            overall appearance, as well as the showing and
                            hiding via CSS transitions. You can modify any of
                            this with custom CSS or overriding our default
                            variables. It's also worth the appropriate
                            classNamees that we use to style each element. These
                            classNamees control the overall appearance, as well
                            as the showing and hiding via CSS transitions. You
                            can modify any of this with custom CSS or overriding
                            our default variables. It's also worth the
                            appropriate classNamees that we use to style each
                            element. These classNamees control the overall
                            appearance, as well as the showing and hiding via
                            CSS transitions. You can modify any of this with
                            custom CSS or overriding our default variables. It's
                            also worth noting that just about any HTML can go
                            within the <code>.accordion-body</code>, though the
                            transition does limit overflow.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo1"
                            aria-expanded="false"
                            aria-controls="collapseTwo1"
                          >
                            HISTORICAL
                          </button>
                        </h2>
                        <div
                          id="collapseTwo1"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample1"
                        >
                          <div className="accordion-body">
                            <strong>
                              This is the second item's accordion body.
                            </strong>{" "}
                            It is hidden by default, until the collapse plugin
                            adds the appropriate classNamees that we use to
                            style each element. These classNamees control the
                            overall appearance, as well as the showing and
                            hiding via CSS transitions. You can modify any of
                            this with custom CSS or overriding our default
                            variables. It's also worth noting that just about
                            any HTML can go within the{" "}
                            <code>.accordion-body</code>, though the transition
                            does limit overflow.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree1"
                            aria-expanded="false"
                            aria-controls="collapseThree1"
                          >
                            CULTURAL
                          </button>
                        </h2>
                        <div
                          id="collapseThree1"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample1"
                        >
                          <div className="accordion-body">
                            <strong>
                              This is the third item's accordion body.
                            </strong>{" "}
                            It is hidden by default, until the collapse plugin
                            adds the appropriate classNamees that we use to
                            style each element. These classNamees control the
                            overall appearance, as well as the showing and
                            hiding via CSS transitions. You can modify any of
                            this with custom CSS or overriding our default
                            variables. It's also worth noting that just about
                            any HTML can go within the{" "}
                            <code>.accordion-body</code>, though the transition
                            does limit overflow.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="line" />
            <br />
            <div className="row">
              <div className="col-lg-6 mb-4">
                <div
                  className="card"
                  style={{
                    borderTopLeftRadius: "50px",
                    borderTopRightRadius: "50px",
                    borderBottomLeftRadius: "50px",
                    borderBottomRightRadius: "50px",
                  }}
                >
                  <img
                    src={img4}
                    className=" card-img-top"
                    alt="Logo"
                    width="500"
                    height="300"
                    style={{
                      borderTopLeftRadius: "50px",
                      borderTopRightRadius: "50px",
                    }}
                  />
                  <div className="align4">
                    <div className="card-body">
                      <p className="card-text">CHITWAN</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="accordion" id="accordionExample2">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne2"
                            aria-expanded="true"
                            aria-controls="collapseOne2"
                          >
                            DIVERSE WILDLIFE
                          </button>
                        </h2>
                        <div
                          id="collapseOne2"
                          className="accordion-collapse collapse show"
                          data-bs-parent="#accordionExample2"
                        >
                          <div className="accordion-body">
                            <strong>
                              This is the first item's accordion body.
                            </strong>{" "}
                            It is shown by default, until the collapse plugin
                            adds the appropriate classNamees that we use to
                            style each element. These classNamees control the
                            overall appearance, as well as the showing and
                            hiding via CSS transitions. You can modify any of
                            this with custom CSS or overriding our default
                            variables. It's also worth noting that just about
                            any HTML can go within the{" "}
                            <code>.accordion-body</code>, though the transition
                            does limit overflow.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo2"
                            aria-expanded="false"
                            aria-controls="collapseTwo2"
                          >
                            NATURE
                          </button>
                        </h2>
                        <div
                          id="collapseTwo2"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample2"
                        >
                          <div className="accordion-body">
                            <strong>
                              This is the second item's accordion body.
                            </strong>{" "}
                            It is hidden by default, until the collapse plugin
                            adds the appropriate classNamees that we use to
                            style each element. These classNamees control the
                            overall appearance, as well as the showing and
                            hiding via CSS transitions. You can modify any of
                            this with custom CSS or overriding our default
                            variables. It's also worth noting that just about
                            any HTML can go within the{" "}
                            <code>.accordion-body</code>, though the transition
                            does limit overflow.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree2"
                            aria-expanded="false"
                            aria-controls="collapseThree2"
                          >
                            PEACEFUL
                          </button>
                        </h2>
                        <div
                          id="collapseThree2"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample2"
                        >
                          <div className="accordion-body">
                            <strong>
                              This is the third item's accordion body.
                            </strong>{" "}
                            It is hidden by default, until the collapse plugin
                            adds the appropriate classNamees that we use to
                            style each element. These classNamees control the
                            overall appearance, as well as the showing and
                            hiding via CSS transitions. You can modify any of
                            this with custom CSS or overriding our default
                            variables. It's also worth noting that just about
                            any HTML can go within the{" "}
                            <code>.accordion-body</code>, though the transition
                            does limit overflow.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="line" />
            <br />
            <div className="row">
              <div className="col-lg-6 mb-4">
                <div
                  className="card"
                  style={{
                    borderTopLeftRadius: "50px",
                    borderTopRightRadius: "50px",
                    borderBottomLeftRadius: "50px",
                    borderBottomRightRadius: "50px",
                  }}
                >
                  <img
                    src={img3}
                    className=" card-img-top"
                    alt="Logo"
                    width="500"
                    height="300"
                    style={{
                      borderTopLeftRadius: "50px",
                      borderTopRightRadius: "50px",
                    }}
                  />
                  <div className="align4">
                    <div className="card-body">
                      <p className="card-text">BOUDDHA</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="accordion" id="accordionExample3">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne3"
                            aria-expanded="true"
                            aria-controls="collapseOne3"
                          >
                            SACRED
                          </button>
                        </h2>
                        <div
                          id="collapseOne3"
                          className="accordion-collapse collapse show"
                          data-bs-parent="#accordionExample3"
                        >
                          <div className="accordion-body">
                            <strong>
                              This is the first item's accordion body.
                            </strong>{" "}
                            It is shown by default, until the collapse plugin
                            adds the appropriate classNamees that we use to
                            style each element. These classNamees control the
                            overall appearance, as well as the showing and
                            hiding via CSS transitions. You can modify any of
                            this with custom CSS or overriding our default
                            variables. It's also worth noting that just about
                            any HTML can go within the{" "}
                            <code>.accordion-body</code>, though the transition
                            does limit overflow.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo3"
                            aria-expanded="false"
                            aria-controls="collapseTwo3"
                          >
                            PEACEFUL
                          </button>
                        </h2>
                        <div
                          id="collapseTwo3"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample3"
                        >
                          <div className="accordion-body">
                            <strong>
                              This is the second item's accordion body.
                            </strong>{" "}
                            It is hidden by default, until the collapse plugin
                            adds the appropriate classNamees that we use to
                            style each element. These classNamees control the
                            overall appearance, as well as the showing and
                            hiding via CSS transitions. You can modify any of
                            this with custom CSS or overriding our default
                            variables. It's also worth noting that just about
                            any HTML can go within the{" "}
                            <code>.accordion-body</code>, though the transition
                            does limit overflow.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree3"
                            aria-expanded="false"
                            aria-controls="collapseThree3"
                          >
                            VIBRANT ENERGY
                          </button>
                        </h2>
                        <div
                          id="collapseThree3"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample3"
                        >
                          <div className="accordion-body">
                            <strong>
                              This is the third item's accordion body.
                            </strong>{" "}
                            It is hidden by default, until the collapse plugin
                            adds the appropriate classNamees that we use to
                            style each element. These classNamees control the
                            overall appearance, as well as the showing and
                            hiding via CSS transitions. You can modify any of
                            this with custom CSS or overriding our default
                            variables. It's also worth noting that just about
                            any HTML can go within the{" "}
                            <code>.accordion-body</code>, though the transition
                            does limit overflow.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg3">
              <br />
              <br />
              <div className="align6">
                <br />
                EXPLORE
              </div>
              <div className="align7"> NEPAL</div>
              
            </div>
            <div className="align8">Discover your next favorite destination</div>
            <div className="alignLeft"><img
                    src={img5}
                    alt="Logo"
                    width="500"
                    height="500"
                    style={{
                    borderRadius:250,
                    }}
                  /><span>{'  '}</span>BREATHTAKING VIEWS </div>
                             <br/><br/> <div className="alignRight">MAJESTICS TEMPLES<span>{' '}</span><img
                    src={img2}
                    alt="Logo"
                    width="500"
                    height="500"
                    style={{
                    borderRadius:250,
                    }}
                  /></div>
          </div>
        </div>
      </div>

    </>
  );
}
