import React from "react";
import {Carousel} from 'react-bootstrap';
import slide1 from '../images/Pixel True Mockup ultra.png';
import slide2 from '../images/LinkedIn.png';
import slide3 from '../images/Facebook.png';
import slide4 from '../images/Twitter.png';
import linked from '../images/linkedIn1.png';
import followLi from '../images/followLinked.png';
import follow from '../images/followus.png';
import fb from '../images/fb.png';
import twitt from '../images/twitt.png';
import follotwi from '../images/follow tiwtt.png';
import twi from '../images/twi.png';


function Blog() {
    return (
        <div id='blog'>
          <Carousel>
            <Carousel.Item interval={1000}>
              <div className="d-flex">
                <div className="w-50">
                  <img
                    className="d-block w-100"
                    src={slide1}
                    alt="First slide"
                  />
                </div>
                <div className="w-50 hright">
                  <h2>It’s The Time For Testing. Join Us as a Beta Tester NOW</h2>
                <p>
                    Get the opportunity to experience Next Generation SOS System at first. 200 users will be selected as a Beta Tester on a first come first serve basis. Testing will be done in 8 phases. Each phase’s duration will be 7 days nd there will be 200 Testers.
                </p>
                <button className='beta'>Join As Beta Tester</button>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item interval={500}>
            <div className="d-flex">
                <div className="w-50">
                  <img
                    className="d-block w-100"
                    src={slide2}
                    alt="Second slide"
                  />
                </div>
                <div className="w-50 hright">
                  <h3>Follow Us on</h3>
            <img className='imgg' src={linked} alt="LinkedIn" width={500} />
                <p>
                Get the opportunity to experience ext Generation SOS System at first. 200 users will be selected as a eta Tester on a first come first serve basis.
                </p>
                <button className='followB'><img src={followLi} alt="follow us" /></button>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item interval={500}>
            <div className="d-flex">
                <div className="w-50">
                  <img
                    className="d-block w-100"
                    src={slide3}
                    alt="Third slide"
                  />
                </div>
                <div className="w-50 hright">
                  <h3>Connect With Us on</h3>
                <img className='imgg' src={fb} alt="facebook" width={500} />
                <p>
                Get the opportunity to experience ext Generation SOS System at first. 200 users will be selected as a eta Tester on a first come first serve basis.
                </p>
                <button className='followB'><img src={follow} alt="follow us" /></button>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="d-flex">
                <div className="w-50">
                  <img
                    className="d-block w-100 image-tiw"
                    src={slide4}
                    alt="Fourth slide"
                  />
                </div>
                <div className="w-50 hright">
                  <h3>Follow Us on</h3>
            <img className='imgg' src={twitt} alt="LinkedIn" width={500} />
                <p>
                Get the opportunity to experience ext Generation SOS System at first. 200 users will be selected as a eta Tester on a first come first serve basis.
                </p>
                <img className='logotwi' src={twi} alt="Logo" width={100}/>
                <button className='followtwit'><img src={follotwi} alt="follow us" /></button>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
    )
}

export default Blog;