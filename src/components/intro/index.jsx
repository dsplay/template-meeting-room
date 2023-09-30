/* eslint-disable linebreak-style */
import { useMemo } from 'react';
import { useScreenInfo, screen } from '@dsplay/react-template-utils';
import BeautyLoader from '../beautyloader';
import './style.sass';

// component

function Intro(props) {
  const {
    w, h, screenFormat,
  } = useScreenInfo();

  const spinnerDimension = useMemo(() => {
    let dimension = Math.min(w, h) / 8;

    switch (screenFormat) {
      case screen.LANDSCAPE:
        break;
      case screen.PORTRAIT:
        break;
      case screen.SQUARE:
        break;
      case screen.BANNER_H:
      case screen.BANNER_V:
        dimension = Math.min(w, h) / 2;
        break;
      default:
        break;
    }

    return dimension;
  }, [w, h, screenFormat]);

  const imageStyle = {
    width: `${spinnerDimension}px`,
    height: `${spinnerDimension}px`,
  };

  const { className } = props;

  return (
    <div {...props} className={`intro ${className || ''}`}>
      <div style={imageStyle}>
        <BeautyLoader />
      </div>
    </div>
  );
}

export default Intro;
