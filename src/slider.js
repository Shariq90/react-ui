import React , {Component} from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import './style.css';
import {
 Glyphicon
}from 'react-bootstrap';
/* import Footer from './footer'; */

const title ="Clean and efficient web interface";
const content ="Fast, efficient (well monitored), and friendly service with good  web interface. Thanks.";

class New extends Component {
    render(){
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1700,
          initialSlide: 0,
          };
        return(
            <div>
                
        <Slider {...settings} >
        
          <div  id='Slide1'>
            <div className='slider-icon'>
              <Glyphicon glyph='glyphicon glyphicon-star'> </Glyphicon>
              <Glyphicon glyph='glyphicon glyphicon-star'> </Glyphicon>
              <Glyphicon glyph='glyphicon glyphicon-star'> </Glyphicon>
              <Glyphicon glyph='glyphicon glyphicon-star'> </Glyphicon>
              <Glyphicon glyph='glyphicon glyphicon-star'> </Glyphicon>
            </div>

            <div className='SlideHeading'>
              <h2>{title}</h2>
            </div>

            <div className='Slidecontent'>
            <p>{content}</p>            
            </div>
          </div>

           <div  id='Slide1'>
            <div className='slider-icon'>
              <Glyphicon glyph='glyphicon glyphicon-star'> </Glyphicon>
              <Glyphicon glyph='glyphicon glyphicon-star'> </Glyphicon>
              <Glyphicon glyph='glyphicon glyphicon-star'> </Glyphicon>
              <Glyphicon glyph='glyphicon glyphicon-star'> </Glyphicon>
              <Glyphicon glyph='glyphicon glyphicon-star'> </Glyphicon>
            </div>

            <div className='SlideHeading'>
              <h2>{title}</h2>
            </div>
            
            <div className='Slidecontent'>
            <p>{content}</p>            
            </div>
          </div>
          

           <div  id='Slide1'>
            <div className='slider-icon'>
              <Glyphicon glyph='glyphicon glyphicon-star'> </Glyphicon>
              <Glyphicon glyph='glyphicon glyphicon-star'> </Glyphicon>
              <Glyphicon glyph='glyphicon glyphicon-star'> </Glyphicon>
              <Glyphicon glyph='glyphicon glyphicon-star'> </Glyphicon>
              <Glyphicon glyph='glyphicon glyphicon-star'> </Glyphicon>
            </div>

            <div className='SlideHeading'>
              <h2>{title}</h2>
            </div>
            
            <div className='Slidecontent'>
            <p>{content}</p>            
            </div>
          </div>

           <div  id='Slide1'>
            <div className='slider-icon'>
              <Glyphicon glyph='glyphicon glyphicon-star'> </Glyphicon>
              <Glyphicon glyph='glyphicon glyphicon-star'> </Glyphicon>
              <Glyphicon glyph='glyphicon glyphicon-star'> </Glyphicon>
              <Glyphicon glyph='glyphicon glyphicon-star'> </Glyphicon>
              <Glyphicon glyph='glyphicon glyphicon-star'> </Glyphicon>
            </div>

            <div className='SlideHeading'>
              <h2>{title}</h2>
            </div>
            
            <div className='Slidecontent'>
            <p>{content}</p>            
            </div>
          </div>

           
          
          
          
         
        </Slider>
            </div>
        );
    }
}

export default New;