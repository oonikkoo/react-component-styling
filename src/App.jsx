import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <Button name="Primary" color="primary" />
        <Button name="Secondary" color="secondary" />
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert message="This is error alert box" severity="error" />
        <Alert message="This is a warning alert box" severity="warning" />
        <Alert message="This is an info alert box" severity="info" />
        <Alert message="This is a success alert box" severity="success" />
      </div>
    </div>
  );
}

export default App;
