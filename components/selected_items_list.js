import React from 'react';
import { connect } from 'react-redux';
import SelectedItemsSelector from './selectors/selected_items';

const SelectedItemsList = (props) => {
  return (
    <ul className="list-group">
      {
        props.items.map(item => {
          return <li className="list-group-item" key={item.id}>{item.title}</li>
        });
      }
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    // passing global state to selector
    items: SelectedItemsSelector(state)
  };
};

export default connect(mapStateToProps)(SelectedItemsList);

// SelectedItemsList can now be imported into main list component
