import memoize from "lodash.memoize";

import { createSelector } from "reselect";

const collectionId = {
  hats: 0,
  sneakers: 1,
  jackets: 2,
  womens: 3,
  mens: 4,
};

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  )
);
