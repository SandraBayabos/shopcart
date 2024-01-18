import { Provider } from "react-redux";
import "./App.css";
import Cart from "./component/Cart";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      {/* All children in App get access to store */}
      <div className="App">
        <header className="App-header">
          <Cart />
        </header>
      </div>
    </Provider>
  );
}

export default App;
