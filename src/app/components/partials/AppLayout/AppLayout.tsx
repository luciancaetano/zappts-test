import React from 'react';
import './AppLayout.scss';
import classNames from 'classnames';

interface IProps {
  className?: string;
  id?: string;
}

const AppLayout = ({ children, className, id }: React.PropsWithChildren<IProps>) => (
  <div id={id} className={classNames('layout', className)}>
    {children}
  </div>
);

export default AppLayout;
