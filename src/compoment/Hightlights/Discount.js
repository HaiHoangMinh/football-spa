import React, { Component } from 'react';
import Roll from 'react-reveal/Roll';
import Slide  from 'react-reveal/Slide';

import MyButton from '../untils/MyButton'

class Discount extends Component {
    render() {



        return (
          <div className="center_wrapper">
            <div className="discount_wrapper">
              <Roll>
                <div className="discount_porcentage">
                  <span>15%</span>
                  <span>Giảm giá coupon</span>
                </div>
              </Roll>
            <Slide right>
                <div className="discount_description">
                <h3>Mua ngay !! Mua ngay !! </h3>
                <p>
                  <em>
                  Để có thể có được những tấm vé sớm nhất để đến với các trận cầu đỉnh cao của vòng bán kêt cúp C1 cũng như C2. Hãy đồng hành cùng đội bóng mà mình yêu thích trên con đường chinh phục 2 chiếc cúp danh giá này !!!
                  
                  </em>
                </p>

                <MyButton/>
              </div>
            </Slide>
              
            </div>
          </div>
        );
    }
}

export default Discount;