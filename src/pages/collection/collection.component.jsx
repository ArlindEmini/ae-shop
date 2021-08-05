import React from "react";

import "./collection.styles.scss";

const CollectionPage = ({ match }) => {
  console.log("matchi", match);
  return (
    <div className="collection">
      <h1>COLLECTION PAGE</h1>
    </div>
  );
};

export default CollectionPage;
