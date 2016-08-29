// Reselect selector
// Takes a list and picks out selected items
// by combining different pieces of state

// To help with selector logic
import _ from 'lodash';

// requires npm install reselect
import { createSelector } from 'reselect';

// Create select functions to grab pieces of state
// needed for calculation
const itemsSelector = state => state.items;
const selectedItemsSelector = state => state.selectedItemIds;

// selector logic
const getItems = (items, selectedItemIds) => {
  // get selected by filter thru callback
  const selectedItems = _.filter(
    items,
    // checks if item id is on selected items list
    item => _.contains(selectedItemIds, item.id)
  );

  return selectedItems;
};

export default createSelector(
  itemsSelector, // pick off piece of state
  selectedItemsSelector, // pick off another piece
  getItems // last argument is function with select logic
);
