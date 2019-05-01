import React from "react";

const withAuthenticate = HOCComp => HOCComp2 =>
  class extends React.Component {
    render() {
      if (localStorage.getItem("username")) {
        return <HOCComp />;
      } else {
        return <HOCComp2 />;
      }
    }
  };

export default withAuthenticate;
