import "./App.css";
import { useGetPokemonsQuery } from "./api/productApi";

function App() {
  const { data } = useGetPokemonsQuery();
  console.log(data);
  return (
    <div className="box">
      {data &&
        data.results.map((pokemon) => (
          <div className="cart" key={pokemon.name}>
            <h3>{pokemon.name}</h3>
            <img
              style={{
                backgroundImage: `url(${pokemon.url})`,
                width: "100px",
                height: "100px",
              }}
              alt={pokemon.name}
            />
          </div>
        ))}
    </div>
  );
}

export default App;
