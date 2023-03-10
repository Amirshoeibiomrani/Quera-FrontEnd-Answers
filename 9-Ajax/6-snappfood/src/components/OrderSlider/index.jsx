import React, {useEffect} from 'react';
import {isIOS} from 'react-device-detect';
import './styles.scss';

import cardsInfo from '../../constants/cardsInfo';

function OrderCardRenderer({order}) {
    return (
        <div className={'cardContainer'}>
      <span className={'icon'}>
        {order.enableImg ? (
            <img
                src={order.isActive ? order.enableImg : order.disableImg}
                className={'cardImg'}
                alt="loading"
            />
        ) : (
            <order.icon isActive={order.isActive}/>
        )}
      </span>
            <span className={'text'}>
        <div className={'title'}>
          <span>{order.title}</span>
        </div>
        <div className={'description'}>
          <span>{order.description}</span>
        </div>
      </span>
        </div>
    );
}

/**
 * @param {number} orderStatus
 */
function getOrderItem(orderStatus) {
    const targetKey = Object.keys(cardsInfo)[orderStatus];
    return cardsInfo[targetKey];
}

function deActiveOrderItems() {
    Object.keys(cardsInfo).forEach(cardKey => cardsInfo[cardKey].isActive = false);
}

export default function OrderSlider({orderStatus}) {
    deActiveOrderItems();
    getOrderItem(orderStatus).isActive = true;

    useEffect(() => {
        let elmnt = document.getElementById('card_true');
        if (elmnt) elmnt.scrollIntoView({behavior: 'smooth', inline: 'center'});
    }, [orderStatus]);


    return (
        <div
            id="order_slider"
            className={'orderSlider'}
            onTouchStart={() => {
                if (isIOS) {
                    document.ontouchmove = event => {
                        event.stopPropagation();
                    };
                }
            }}
            onTouchEnd={() => {
                if (isIOS) {
                    document.ontouchmove = event => {
                        event.preventDefault();
                    };
                }
            }}
        >
            {Object.keys(cardsInfo).map(cardInfoKey => <div
                className={'card'}
                id={cardsInfo[cardInfoKey].isActive ? 'card_true' : ''}
            >
                <OrderCardRenderer order={cardsInfo[cardInfoKey]}/>
            </div>)}
        </div>
    );
}
