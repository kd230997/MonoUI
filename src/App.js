import "./App.css";
import { Button } from "./component";

function App() {
  return (
    <div className="bg-teal-50 w-full min-h-full h-fit py-7 flex flex-col gap-y-7 items-center">
      <Button
        eventClick={() => {
          alert("Button was clicked");
        }}
        btnName="Click Me"
      />

      <Button
        eventClick={() => {
          alert("Button was clicked");
        }}
        btnName="Click Me"
      />
      <Button
        eventClick={() => {
          alert("Button was clicked");
        }}
        btnName="Click Me"
      />
      <Button
        eventClick={() => {
          alert("Button was clicked");
        }}
        btnName="Click Me"
      />
      <Button
        eventClick={() => {
          alert("Button was clicked");
        }}
        btnName="Click Me"
      />
    </div>
  );
}

export default App;
