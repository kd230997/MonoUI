import "./App.css";
import { Button } from "./component";

function App() {
  return (
    <>
      <Button
        eventClick={() => {
          console.log("Button was clicked");
        }}
        btnName="Click Me"
        customClass="text-3xl font-bold underline hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
      />
    </>
  );
}

export default App;
