import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import "./App.css";

function App() {
  let items = ["Nairobi", "Kenya"];
  return (
    <div>
      <ListGroup
        items={items}
        heading="List"
        onSelectItem={() => {}}
      ></ListGroup>
    </div>
  );
}

export default App;
