import React from "react";
import CardList from "./CardList";

const FoodList = ({ user, loading }) => {
  console.log(user);
  return (
    <div>
      {loading ? (
        <h1>loading....</h1>
      ) : (
        user.map((el, i) => <CardList el={el} key={i} />)
      )}
    </div>
  );
};

export default FoodList;
