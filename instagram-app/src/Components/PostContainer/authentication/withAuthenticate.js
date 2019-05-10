import React from "react";

const withAuthenticate = HOCComp =>
  class extends React.Component {
    render() {
      return <HOCComp />;
    }
  };

export default withAuthenticate;
