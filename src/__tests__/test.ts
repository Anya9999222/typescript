import Cart from '../service/Cart';
import Movie from '../domain/Movie';


const cart = new Cart();

test('new card should be empty', () => {
  expect(cart.items.length).toBe(0);
});

test('adds new movie', () => {
    cart.add(new Movie(1, 'The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик'], 137, 550));
    expect(cart.items.length).toBe(1)
})

test('calculates cost without discount', () => {

    cart.add(new Movie(2, 'Intouchables', 2011, 'Франция', 'Sometimes you have to reach into someone else`s world', ['драма', 'комедия', 'биография'], 112, 450));
    const totalPrice = cart.calculateCost()
    expect(totalPrice).toBe(1000) 
})

test('calculates cost without discount', () => {
    const priceDiscount = cart.calculateCostWithDiscount(20)
    expect(priceDiscount).toBe(800) 
})

test('delete item', () => {
    cart.deleteItem(1);
    expect(cart._items.length).toBe(1)
})