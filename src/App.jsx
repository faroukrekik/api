import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import FoodList from "./FoodList";

function App() {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState("");
  const [text, setText] = useState("");
  const options = {
    method: "GET",
    url: "https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser",
    params: {
      "nutrition-type": "cooking",
      "category[0]": "generic-foods",
      "health[0]": "alcohol-free",
      ingr: text,
    },
    headers: {
      "X-RapidAPI-Key": "aae36b20b0msh75fa3551b516807p1dae7fjsn2dd7f0c61377",
      "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
    },
  };

  const FetchDAT = async () => {
    try {
      const response = await axios.request(options);
      setUser(response.data.hints);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    FetchDAT();
  };

  return (
    <div className="App">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">GET FOOD</button>
      </form>
      {<FoodList user={user} loading={loading} />}
    </div>
  );
}

export default App;
