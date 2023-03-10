import React, {useState} from 'react';

import MapComponent from '../../components/Map';
import BikerInformation from '../../components/BikerInformation';
import OrderSlider from '../../components/OrderSlider';

import orderInfo from '../../constants/orderInfo';
import markerArrays from '../../constants/markerArrays';

import './styles.scss';
import cardsInfo from '../../constants/cardsInfo';

export function FollowOrder() {
  const onNextState = () => {
      setOrderStatus(prev=> (prev + 1) % Object.keys(cardsInfo).length);
  };

  const onPrevState = () => {
      setOrderStatus(prev=> {
          let prevIndex = prev - 1;
          if(prevIndex < 0)
              prevIndex = Object.keys(cardsInfo).length - 1;
          return prevIndex;
      });
  };

  const [orderStatus, setOrderStatus] = useState(0);
  return (
    <>
      <div className="stateHandler">
        <button data-testid="next-state" onClick={onNextState}>
          وضعیت بعد
        </button>
        <button data-testid="prev-state" onClick={onPrevState}>
          وضعیت قبل
        </button>
      </div>
      <BikerInformation orderInfo={orderInfo} />
      <div className={'container'}>
        <MapComponent
          zoom={14}
          padding={[
            [50, 200],
            [50, 50]
          ]}
          markerArrays={markerArrays}
          mapPosition={[orderInfo.vendorLatitude, orderInfo.vendorLongtitude]}
        />
        <OrderSlider orderStatus={orderStatus} />
      </div>
    </>
  );
}

export default FollowOrder;
