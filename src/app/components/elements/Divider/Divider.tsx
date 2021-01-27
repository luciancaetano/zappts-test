import React from 'react';
import './Divider.scss';

interface IProps {
  label: string;
}

const Divider = ({ label } : IProps) => (
  <div className="divider">
    {label}
  </div>
);

export default Divider;
