import React, { useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleCard from '../../components/home/SimpleCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import DoneIcon from '@material-ui/icons/Done';
import Roll from 'react-reveal/Roll';
import Slide from 'react-reveal/Slide';
import HeadShake from 'react-reveal/HeadShake';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

import './Home.css'
// import { Height } from '@material-ui/icons';


export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000

  };
  return (
    <div>
      <div style={{ marginLeft: "11rem", marginTop: "5rem", display: "flex" }}>
        <div className="wrapper">
          <img id="slide" src="https://cdn.discordapp.com/attachments/762721371809382421/790225539196780564/baner4.png" />
          {/* <img src="https://cdn.discordapp.com/attachments/762721371809382421/790217100906987591/image2.png" /> */}
        </div>
        <div style={{ marginTop: "4rem", width: "55%", fontFamily: "Georgia", marginRight: "8rem" }} >
          <Slide right>
            <h1>AlphaPlus</h1>
            <h4> A feature rich school management software for all educational
            institutes. This school management software is for learning,
            administration and activities management in schools.
          </h4>
          </Slide>
        </div>
      </div>
      <Slider {...settings} style={{ marginTop: "2.8rem", marginLeft: "9rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div >
          <h3>
            <img src="https://d21zeai4l2a92w.cloudfront.net/wp-content/uploads/2017/05/teacher-appreciation-kindergarten.jpg" style={{ maxHeight: '400px', width: "60%", paddingLeft: "12rem", paddingTop: "1.5rem" }} />
          </h3>
        </div>
        <div >
          <h3>
            <img src="http://www.chuquxueba.com/wp-content/uploads/2020/01/trinity-grammar-school-027.jpg" style={{ maxHeight: '400px', width: "60%", paddingLeft: "12rem", paddingTop: "1.5rem" }} />
          </h3>
        </div>
        <div >
          <h3>
            <img src="https://www.trinity.nsw.edu.au/wp-content/uploads/2015/08/banner_home011.jpg" style={{ maxHeight: '400px', width: "60%", paddingLeft: "12rem", paddingTop: "1.5rem" }} />
          </h3>
        </div>
        <div>
          <h3>
            <img className="bodyImage" src="https://3.files.edl.io/ed5f/19/03/30/052542-6859498f-d8c6-4b3a-8c67-8b086629ceef.jpg" style={{ maxHeight: '400px', width: "60%", paddingLeft: "12rem", paddingTop: "1.5rem" }} />
          </h3>
        </div>
        <div >
          <h3>
            <img src="https://www.nelsonstar.com/wp-content/uploads/2019/06/17343520_web1_teacher.jpg" style={{ maxHeight: '400px', width: "60%", paddingLeft: "12rem", paddingTop: "1.5rem" }} />
          </h3>
        </div>
        <div>
          <h3>
            <img className="bodyImage" src="https://www.ousd.org/cms/lib/CA01001176/Centricity/ModuleInstance/22885/large/Students%20at%20desk20.jpeg" style={{ maxHeight: '400px', width: "60%", paddingLeft: "12rem", paddingTop: "1.5rem" }} />
          </h3>
        </div>
        <div>
          <h3>
            <img className="bodyImage" src="https://www.trinity.nsw.edu.au/wp-content/uploads/2015/08/banner_home02.jpg" style={{ maxHeight: '400px', width: "60%", paddingLeft: "12rem", paddingTop: "1.5rem" }} />
          </h3>
        </div>
        <div>
          <h3>
            <img className="bodyImage" src="https://3.files.edl.io/398f/19/03/30/052431-03cfe924-a73a-4108-a9ae-c234d5e8d190.jpg" style={{ maxHeight: '400px', width: "60%", paddingLeft: "12rem", paddingTop: "1.5rem" }} />

          </h3>
        </div>
        <div>
          <h3>
            <img className="bodyImage" src="https://3.files.edl.io/789e/19/03/30/052658-5f62156a-d55c-437b-8cd4-612d7b510db0.jpg" style={{ maxHeight: '400px', width: "60%", paddingLeft: "12rem", paddingTop: "1.5rem" }} />
          </h3>
        </div>
      </Slider>

      {/* <div className="slide-left1" style={{ flex: ".50" ,paddingTop:"6rem" , paddingLeft:"9rem" , msFlexDirection:"column"}}> */}
      {/* <div className="wrapper" style={{ flex: ".6" }}> */}
      {/* <div style={{ backgroundColor: "#60BF3A00", width: "89.5%", maxWidth: "90rem", maxHeight: "400px", marginLeft: "9rem", marginTop: "1rem", height: "250px" }} > */}
      <div style={{ background: "#00000030", height: "700px", display: "flex", marginBottom: "4rem", justifyContent: "center", alignItems: "center" }}>
        <div className="wrapper" style={{ flex: ".6" }}>
          <Slide left>
            <img style={{ maxWidth: "500px", paddingTop: "6rem", marginLeft: "16rem", height: "300px", width: "400px" }} src="https://cdn.discordapp.com/attachments/762721371809382421/790588651981373470/skooly-5.png"
            />
          </Slide>
        </div>
        <div style={{ flex: ".50", paddingTop: "6rem", paddingLeft: "9rem", msFlexDirection: "column" }}>
          <Slide right>
            <div >
              <h2>Why AlphaPlus is best school management software ?</h2>
              <div style={{ fontFamily: "Georgia", paddingTop: "2rem", }}>
                <p style={{ textAlign: "left" }}>
                  Besides from, AlphaPlus is a completely free online school management
                  software it has more school management features than any other online
                  school management system in the market. It does not ends here,
                  AlphaPlus <br />is still enhancing features. You will be automatically updated
                  as new feature will be a part of our free school management software.
                  Some main school management features are given below.
        </p>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex" }}>
                    <Slide right>
                      < DoneIcon style={{ marginTop: "1.1rem", marginLeft: ".7rem", paddingRight: ".5rem" }} /> <h5>An admin portal with all controls</h5>
                    </Slide>
                  </div>
                  <div style={{ display: "flex", paddingBottom: ".5rem" }}>
                    <Slide right>
                      < DoneIcon style={{ marginTop: "1.1rem", marginLeft: ".7rem", paddingRight: ".5rem" }} /> <h5>Portals for students/parents, staff and teachers.</h5>
                    </Slide>
                  </div>
                  <div style={{ display: "flex", paddingBottom: ".5rem" }}>
                    <Slide right>
                      < DoneIcon style={{ marginTop: "1.1rem", marginLeft: ".7rem", paddingRight: ".5rem" }} /> <h5>Students and staff complete data record system.</h5>
                    </Slide>
                  </div>
                  <div style={{ display: "flex", paddingBottom: ".5rem" }}>
                    <Slide right>
                      < DoneIcon style={{ marginTop: "1.1rem", marginLeft: ".7rem", paddingRight: ".5rem" }} /> <h5>Classes, Courses and Subjects management.</h5>
                    </Slide>
                  </div>
                  <div style={{ display: "flex", paddingBottom: ".5rem" }}>
                    <Slide right>
                      < DoneIcon style={{ marginTop: "1.1rem", marginLeft: ".7rem", paddingRight: ".5rem" }} /> <h5>Exams, class tests, home work and assignments management.</h5>
                    </Slide>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        </div>
      </div>
      <div style={{ backgroundColor: "#00000020", height: "500px", display: "flex", marginBottom: "4rem" }}>
        <Slide left>
          <div style={{ flex: ".65" }}>
            <HeadShake>
              <div style={{ paddingLeft: "7.8rem", paddingTop: "1.5rem" }}>
                <h2>Single Stop Solution For School Management </h2>
              </div>
            </HeadShake>
            <div style={{ paddingLeft: "12rem" }} >
              <p style={{ textAlign: "left", padding: ".5rem" }}>
                Managing any educational institute is not a piece of cake. Managing students, <br />
              staff,timetable,exams, class test, attendance, fees collection, accounts. <br />
              It does not ends here. Parents are always worried about their child performance <br />
              and they need satisfaction. They really care about their child academic statics. <br />
              Moreover we have seen schools using huge registers to mark attendance of their <br />
              students and staff. And we have also seen that schools manage their admission, <br />
              exams data,  class tests data ect, manually. We know it takes a lot of time and very
              difficlt to manage.

              Well ! it's time to put check on these worries. AlphaPlus presents you a free online school management software to make conventional tasks easier. This is one stop solution to manage, track and record everything within your school or organization. Our free online school management software includes admin, staff and students panel, exams madule, attendance madule, fees collection madule, salary and expense management, class tests management, inventory management, students and staff data record system and many more. It is very easy to use and manage because AlphaPlus is a free online school management software for end-users. If you can send an email you can use AlphaPlus.
      </p>
            </div>
          </div>
        </Slide>
        <div style={{ flex: ".4" }}>
        <Roll right>
          <img alt='native' style={{marginTop:"1.4rem"}} height='450px' src="https://media.discordapp.net/attachments/762721371809382421/791006742947037194/signin_native.png?width=229&height=473"/>
          </Roll>
        </div>
      </div>
      <div>
        <SimpleCard />
      </div>
      <footer style={{ paddingTop: "4rem" }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#00000095" }}>
          <div style={{ flex: ".5", paddingTop: "2rem" }}>
            <img style={{ paddingLeft: "2rem", height: "70px",marginTop: ".5rem" }} src="https://www.alphaplus.co.uk/wp-content/uploads/2018/04/alphaplus_white_logo.png" />
            <h5 style={{ paddingLeft: "8rem" }}> © 2020 AlphaPlus Consultancy Ltd, all rights reserved.</h5>
            <p style={{ textAlign: "left", marginLeft: "12.5rem" }}>AlphaPlus is world's best and no.1 free online school management softawre for lifetime with no limitations.
            Someone can manage their school, college, tuition center, academy or any kind of educational institute with
          AlphaPlus.Our school management software has more features than any school software in the market.</p>
          </div>
          <div style={{ flex: ".4" }}>
            <h3 style={{ marginTop: "3rem" }}>CONTACT US</h3>
            <h5 style={{ display: "flex", paddingTop: "1rem", justifyContent: "center", alignItems: "center", marginLeft: "-4.5rem" }}>
              <ChromeReaderModeIcon style={{ paddingRight: ".3rem" }} />
            AlphPlus
          </h5>
            <h5 style={{ display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "2rem" }}>
              <EditLocationIcon style={{ paddingRight: ".3rem" }} />
            Palestine,Nablus,16 Street
          </h5>
            <h5 style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingRight: "1rem", marginLeft: "2rem" }}>
              <EmailIcon style={{ paddingRight: ".3rem" }} />
            alphaplus@alpha.com
          </h5>
            <h5 style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingRight: "1rem", marginLeft: "2rem" }}>
              <PhoneIcon style={{ paddingRight: ".3rem" }} />
            phone:+972599043747
          </h5>
          </div>
          <div style={{ flex: ".25" }}>
            <h2 style={{marginTop: "3rem"}}>YOUR FEEDBACK</h2>
            <div>
              <label>
              <input style={{height:"1.5rem"}} type="text" placeholder="your name" name=""/>
              <input style={{marginTop:"1rem",marginBottom:"1rem", height:"1.5rem"}}type="text" placeholder="your Email" name=""/>
              <input style={{height:"60px"}}type="text" placeholder="Feedback" name=""/>
              </label>
              <div>
              <button>send</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


