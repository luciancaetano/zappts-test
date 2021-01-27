import React from 'react';
import './SubmitButton.scss';
import classnames from 'classnames';

interface IProps {
  onClick?: () => void;
  label: string;
  className?: string;
}

const SubmitButton = ({ label, onClick, className }: IProps) => (
  <button onClick={onClick} className={classnames('submitButton', className)} type="submit">
    {label}
  </button>
);

export default SubmitButton;
