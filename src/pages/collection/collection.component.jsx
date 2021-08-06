import React from "react";

import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  console.log("match=======", collection);
  // const { title, items } = match;
  return (
    <div className="collection">
      <h1> ss</h1>
    </div>
  );
};

const mapStateToProps = (state, otherProps) => ({
  collection: selectCollection(otherProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
