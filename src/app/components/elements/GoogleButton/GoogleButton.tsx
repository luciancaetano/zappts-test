import React from 'react';
import './GoogleButton.scss';
import GoogleLogo from '../../../../media/images/google-logo.svg';

interface IProps {
  text: string;
}

const GoogleButton = ({ text }: IProps) => (
  <button className="googleButton" type="button">
    <img src={GoogleLogo} alt="G" />&nbsp;{text}
  </button>
);

export default GoogleButton;
