export const checkIfTheCartItemExist = (cartItems, cartItemToAdd) => {
  const checkIfExist = cartItems.find((item) => item.id === cartItemToAdd.id);

  if (checkIfExist) {
    return cartItems.map((item) =>
      item.id === cartItemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
