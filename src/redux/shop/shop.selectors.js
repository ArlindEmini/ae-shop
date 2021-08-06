import memoize from "lodash.memoize";

import { createSelector } from "reselect";

const collectionsId = {
  hats: 1,
  jackets: 2,
  sneakers: 3,
  womens: 4,
  mens: 5,
};

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector([selectCollections], (collections) => collections[1])
);
