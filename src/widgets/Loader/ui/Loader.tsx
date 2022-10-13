import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import './Loader.scss';

interface LoaderProps {
  className?: string,
}

const Loader:FC<LoaderProps> = (props) => {
  const {
    className,
    ...otherProps
  } = props;
  return (
    <div
      className={classNames('lds-ellipsis')}
      {...otherProps}
    >
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export default Loader;
