import React from 'react';
import './BasicSlider.scss';
import SliderImg from '../../../../media/images/slider.png';
import SliderImg2x from '../../../../media/images/slider2x.png';

const BasicSlider = () => (
  <div className="basicSlider">
    <div className="basicSlider__content">
      <div className="basicSlider__content__image">
        <img src={SliderImg} srcSet={SliderImg2x} alt="" />
      </div>
      <div className="basicSlider__content__text">
        <h1>Marcenas mattis egestas</h1>
        <p>Erdum et malesuada fames ac ante ileum primmer in<br /> faucibus uspendisse porta.</p>
      </div>
      <div className="basicSlider__slider_navs">
        <div className="basicSlider__slider_navs_item active">&nbsp;</div>
        <div className="basicSlider__slider_navs_item">&nbsp;</div>
        <div className="basicSlider__slider_navs_item">&nbsp;</div>
        <div className="basicSlider__slider_navs_item">&nbsp;</div>
      </div>
    </div>
  </div>
);

export default BasicSlider;
