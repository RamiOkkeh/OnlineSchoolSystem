import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
// import { Height } from '@material-ui/icons';

export default function Home() {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div>
      <div style={{ marginLeft: "11rem", marginTop: "5rem", display: "flex" }}>
        <div className="wrapper">
          <img
            id="slide"
            src="https://cdn.discordapp.com/attachments/762721371809382421/790225539196780564/baner4.png"
          />
          {/* <img src="https://cdn.discordapp.com/attachments/762721371809382421/790217100906987591/image2.png" /> */}
        </div>
        <div
          className="slide-left"
          style={{
            marginTop: "4rem",
            width: "55%",
            fontFamily: "Georgia",
            marginRight: "8rem",
          }}
        >
          <h1>ONLINE SCHOOL SYSTEM</h1>
          <h4>
            {" "}
            A feature rich school management software for all educational
            institutes. This school management software is for learning,
            administration and activities management in schools.
          </h4>
        </div>
      </div>
      <Slider {...settings} style={{ marginTop: "2.8rem", marginLeft: "9rem" }}>
        <div>
          <h3>
            <img
              src="https://d21zeai4l2a92w.cloudfront.net/wp-content/uploads/2017/05/teacher-appreciation-kindergarten.jpg"
              style={{
                maxHeight: "400px",
                width: "60%",
                paddingLeft: "12rem",
                paddingTop: "1.5rem",
              }}
            />
          </h3>
        </div>
        <div>
          <h3>
            <img
              src="http://www.chuquxueba.com/wp-content/uploads/2020/01/trinity-grammar-school-027.jpg"
              style={{
                maxHeight: "400px",
                width: "60%",
                paddingLeft: "12rem",
                paddingTop: "1.5rem",
              }}
            />
          </h3>
        </div>
        <div>
          <h3>
            <img
              src="https://www.trinity.nsw.edu.au/wp-content/uploads/2015/08/banner_home011.jpg"
              style={{
                maxHeight: "400px",
                width: "60%",
                paddingLeft: "12rem",
                paddingTop: "1.5rem",
              }}
            />
          </h3>
        </div>
        <div>
          <h3>
            <img
              className="bodyImage"
              src="https://3.files.edl.io/ed5f/19/03/30/052542-6859498f-d8c6-4b3a-8c67-8b086629ceef.jpg"
              style={{
                maxHeight: "400px",
                width: "60%",
                paddingLeft: "12rem",
                paddingTop: "1.5rem",
              }}
            />
          </h3>
        </div>
        <div>
          <h3>
            <img
              src="https://www.nelsonstar.com/wp-content/uploads/2019/06/17343520_web1_teacher.jpg"
              style={{
                maxHeight: "400px",
                width: "60%",
                paddingLeft: "12rem",
                paddingTop: "1.5rem",
              }}
            />
          </h3>
        </div>
        <div>
          <h3>
            <img
              className="bodyImage"
              src="https://www.ousd.org/cms/lib/CA01001176/Centricity/ModuleInstance/22885/large/Students%20at%20desk20.jpeg"
              style={{
                maxHeight: "400px",
                width: "60%",
                paddingLeft: "12rem",
                paddingTop: "1.5rem",
              }}
            />
          </h3>
        </div>
        <div>
          <h3>
            <img
              className="bodyImage"
              src="https://www.trinity.nsw.edu.au/wp-content/uploads/2015/08/banner_home02.jpg"
              style={{
                maxHeight: "400px",
                width: "60%",
                paddingLeft: "12rem",
                paddingTop: "1.5rem",
              }}
            />
          </h3>
        </div>
        <div>
          <h3>
            <img
              className="bodyImage"
              src="https://3.files.edl.io/398f/19/03/30/052431-03cfe924-a73a-4108-a9ae-c234d5e8d190.jpg"
              style={{
                maxHeight: "400px",
                width: "60%",
                paddingLeft: "12rem",
                paddingTop: "1.5rem",
              }}
            />
          </h3>
        </div>
        <div>
          <h3>
            <img
              className="bodyImage"
              src="https://3.files.edl.io/789e/19/03/30/052658-5f62156a-d55c-437b-8cd4-612d7b510db0.jpg"
              style={{
                maxHeight: "400px",
                width: "60%",
                paddingLeft: "12rem",
                paddingTop: "1.5rem",
              }}
            />
          </h3>
        </div>
      </Slider>
      <div
        style={{
          backgroundColor: "#00000040",
          width: "89.5%",
          maxWidth: "90rem",
          maxHeight: "400px",
          marginLeft: "9rem",
          marginTop: "1rem",
          height: "250px",
        }}
      >
        <div>
          <button
            className="button button4"
            style={{ marginTop: "6.0rem", marginRight: "1rem" }}
          >
            Click here to view DashBoard
          </button>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#00000040",
          width: "89.5%",
          maxWidth: "90rem",
          maxHeight: "400px",
          marginLeft: "9rem",
          marginTop: "2rem",
          height: "150px",
        }}
      >
        <div style={{ fontStyle: "italic" }}>
          <h3 style={{ marginTop: "1px" }}>
            <br />
            With a wide range of activities on offer,
            <br />
            Trinity is the perfect place to grow into an individual with a
            number of talents,
            <br />
            both inside and outside of the classroom.
          </h3>
        </div>
      </div>
      <div>
        <img
          src="http://www.chuquxueba.com/wp-content/uploads/2020/01/trinity-grammar-school-002.jpg"
          style={{ paddingTop: "3rem", maxHeight: "650px", width: "100%" }}
        />
      </div>
      <div
        style={{
          backgroundColor: "#00000070",
          width: "89.5%",
          maxWidth: "90rem",
          maxHeight: "400px",
          marginLeft: "9rem",
          marginTop: "2rem",
          height: "150px",
        }}
      >
        <div>
          <h3>
            <br />
            <br />
            Trinity caters for all my needs, whether they be academic,
            <br />
            sporting, musical or spiritual.
          </h3>
        </div>
      </div>
      <div>
        <img
          src="http://www.chuquxueba.com/wp-content/uploads/2020/01/trinity-grammar-school-032.jpg"
          style={{ paddingTop: "3rem", maxHeight: "650px", width: "100%" }}
        />
      </div>
      <div
        style={{
          backgroundColor: "#00000070",
          width: "89.5%",
          maxWidth: "90rem",
          maxHeight: "400px",
          marginLeft: "9rem",
          marginTop: "2rem",
          height: "150px",
        }}
      >
        <div>
          <h3>
            <br />
            With a wide range of activities on offer,
            <br />
            Trinity is the perfect place to grow into an individual with a
            number of talents,
            <br />
            both inside and outside of the classroom.
          </h3>
        </div>
      </div>
      <div>
        <img
          src="http://www.chuquxueba.com/wp-content/uploads/2020/01/trinity-grammar-school-011.jpg"
          style={{ paddingTop: "3rem", maxHeight: "650px", width: "100%" }}
        />
      </div>

      <footer id="site-footer">
        <div className="container">
          <div
            className="footer-item"
            style={{ marginLeft: "12rem", marginBottom: ".7" }}
          >
            <h3>Summer Hill Campus</h3>
            (Kindergarten – Year 12)
            <br />
            119 Prospect Road
            <br />
            Summer Hill NSW 2130
            <br />
            p. + 61 2 9581 6000
          </div>
          <div className="footer-item" style={{ marginLeft: "12rem" }}>
            <h3>Strathfield CAMPUS</h3>
            (Pre-Kindergarten to Year 6)
            <br />
            115-125 The Boulevarde
            <br />
            Strathfield NSW 2135
            <br />
            p. + 61 2 8732 4600
          </div>
          <div className="footer-item">
            <div className="logo"></div>
          </div>
        </div>
        <div className="container">
          <div className="footer-links">
            Copyright 2020 corna School School |{" "}
            <a
              href="https://www.trinity.nsw.edu.au/wp-content/uploads/2016/03/TGS_PrivacyPolicy.pdf"
              target="_blank"
            >
              Privacy Policy
            </a>{" "}
            | Council of Trinity Grammar School Cricos Code: 02308G
            <p>
              Website designed and developed by{" "}
              <a
                title="Web Design Sydney"
                href="http://www.digeratisolutions.com.au"
                target="_blank"
              >
                Digerati Solutions
              </a>
            </p>
            <a
              style={{
                display: "inline-block",
                fontSize: "14px",
                fontWeight: "bold",
                letterSpacing: "1px",
                overflow: "hidden",
                lineHeight: "25px",
              }}
              href="mailto:feedback@trinity.nsw.edu.au?subject=Feedback - Website"
            >
              <img
                style={{
                  margin: "0 10px 0 0",
                  float: "left",
                  maxHeight: "25px",
                }}
                src="https://www.trinity.nsw.edu.au/wp-content/themes/trinity/img/icon-envelope.png"
                alt="Feedback"
              />
              Feedback
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
