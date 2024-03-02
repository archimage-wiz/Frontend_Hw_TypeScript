import Cart from "./service/Cart";
import Book from "./domain/Book";
import Movie from "./domain/Movie";
import MusicAlbum from "./domain/MusicAlbum";

const cart = new Cart();

cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
cart.add(
  new Movie(
    1008,
    "Avengers",
    999,
    2012,
    "USA",
    "Avengers Assemble!",
    ["Action", "Adventure", "Sci-Fi"],
    { hours: 2, minutes: 30 }
  )
);

cart.removeCartItem(cart.items[0]);

console.log(cart.purchaseSum(10));

console.log(cart.items);
