import { createSelector } from 'reselect';
// import memoize from 'lodash.memoize';

const selectShop = state => state.shop;



export const selectCollections = createSelector (
    [selectShop],
    shop => shop.collections
);

// A selector to converts an object into an array
export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => 
    collections ? Object.keys(collections).map(key => collections[key]) : []
  );

// Find collection.id matching the url parameter of collection id map
export const selectCollection = collectionURLParam => 
createSelector (
[selectCollections],
collections => (collections ? collections[collectionURLParam] : null )
);