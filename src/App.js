import "./App.css";
import { WishList } from "./Components/WishList";
import { Vegetables } from "./Components/Vegetables";

function App() {
  return (
    <div className="App">
      {/* you can comment the one of the Component to see the as a question require output */}
      <WishList />
      <Vegetables />
    </div>
  );
}

export default App;
