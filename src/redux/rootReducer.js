import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./User/user.reducer";
import productsReducer from "./Products/products.reducer";
import requestsReducer from "./Requests/requests.reducer";
import cartReducer from "./Cart/cart.reducer";
import ordersReducer from "./Orders/orders.reducer";
import searchReducer from "./Search/search.reducer";
import auctionReducer from "./Auction/auctions.reducer";
import notificationsReducer from "./Notifications/notifications.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  productsData: productsReducer,
  cartData: cartReducer,
  ordersData: ordersReducer,
  requestsData: requestsReducer,
  searchData: searchReducer,
  auctionData: auctionReducer,
  notificationsData: notificationsReducer,
});

const configStorage = {
  key: "root",
  storage,
  whitelist: ["cartData"],
};

export default persistReducer(configStorage, rootReducer);
