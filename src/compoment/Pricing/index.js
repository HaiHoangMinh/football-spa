import React from 'react';
import Zoom from 'react-reveal/Zoom';
import MyButton from '../untils/MyButton';

const Pricing = () => {
    return (
      <div className="pricing_section">
        <div className="bck_black">
          <h2>Các loại vé</h2>
        <Zoom>
          <div className="pricing_wrapper">
            <div className="pricing_item">
                <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                        <span>$100 </span>
                        <span>Vé thường</span>
                    </div>
                     <div className="pricing_description">
                     Bạn sẽ được thưởng thức trận đấu gần gũi với một chỗ ngồi hợp lý
                     </div>
                     <div className="pricing_buttons"> <MyButton/></div>
                   
              </div>

            </div>
            <div className="pricing_item">
                <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                        <span>$150 </span>
                        <span>Vé chỗ đẹp</span>
                    </div>
                     <div className="pricing_description">
                     Bạn sẽ được xem các càu thủ thi đấu một cách cuồng nhiệt và rõ ràng nhất
                     </div>
                     <div className="pricing_buttons"> <MyButton/></div>
              </div>

            </div>
            <div className="pricing_item">
                <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                        <span>$200 </span>
                        <span>Vé VIP</span>
                    </div>
                     <div className="pricing_description">
                     Bạn sẽ được xem trận đấu một cách thoải mái nhất cùng với việc được phục vũ đồ ăn thức uống một các tận tình chua đáo từ các nhân viên của SVĐ
                     </div>
                     <div className="pricing_buttons"> <MyButton/></div>
              </div>

            </div>
          </div>
          </Zoom>
        </div>
      </div>
    );
};

export default Pricing;