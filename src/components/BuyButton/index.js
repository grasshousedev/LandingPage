import React from 'react';

import { LoadScript } from 'components/Script';
import * as S from './styles';

//icons
import faApple from '../../icons/apple.svg';
import { isDev } from 'utils/dev-prod';

//env
const { REACT_APP_PADDLE_VENDOR, REACT_APP_PADDLE_PRODUCT_ID } = process.env;

function BuyButton({ startLoading }) {
  const buy = async () => {
    if (isDev) {
      return alert('Buying app...');
    }
    if (window) {
      const { Paddle } = window;
      await Paddle.Setup({ vendor: parseInt(REACT_APP_PADDLE_VENDOR) });
      Paddle.Checkout.open({
        product: parseInt(REACT_APP_PADDLE_PRODUCT_ID),
        allowQuantity: false,
        quantity: 1
      });
    }
  };

  return (
    <LoadScript startLoading={startLoading} src="https://cdn.paddle.com/paddle/paddle.js">
      {ready => (
        <S.Button
          disabled={!ready}
          onClick={ready ? buy : null}
          role="button"
          tabIndex={0}
          onKeyPress={e => {
            if (e.which === 13 && ready) {
              buy(e);
            }
          }}
        >
          <S.AppleIcon icon={faApple} />
          <span>Buy for macOS</span>
        </S.Button>
      )}
    </LoadScript>
  );
}

export default BuyButton;
