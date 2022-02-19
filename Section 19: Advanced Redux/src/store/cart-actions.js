import {uiActions} from './ui-slice';
import {cartActions} from './cart-slice';

const CART_URL = 'https://react-http-2f56a-default-rtdb.firebaseio.com/cart.json';

export const fetchCartData = () => {
  return async dispatch => {
    const fetchData = async () => {
      const response = await fetch(CART_URL);

      if (!response.ok) {
        throw new Error('Could not fetch cart data!');
      }

      return await response.json();
    };

    try {
      const cartData = await fetchData();
      dispatch(
          cartActions.replaceCart({
            items: cartData.items || [],
            totalQuantity: cartData.totalQuantity,
          }),
      );
    } catch (e) {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Fetching cart data failed!',
      }));
    }
  };
};

export const sendCartData = (cart) => {
  return async dispatch => {
    dispatch(uiActions.showNotification({
      status: 'pending',
      title: 'Sending...',
      message: 'Sending cart data!',
    }));

    const sendRequest = async () => {
      const response = await fetch(
          CART_URL, {
            method: 'PUT',
            body: JSON.stringify({
              items: cart.items,
              totalQuantity: cart.totalQuantity,
            }),
          },
      );

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }
    };

    try {
      await sendRequest();

      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully!',
      }));
    } catch (e) {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sent cart data failed!',
      }));
    }
  };
};
