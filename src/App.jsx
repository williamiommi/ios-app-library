import PhoneFrame from "./components/PhoneFrame";
import BackdropLayer from "./components/BackdropLayer";

function App() {
  return (
    <div className="grid min-h-screen bg-purple-50 place-items-center">
      <PhoneFrame>
        <BackdropLayer />
      </PhoneFrame>
    </div>
  );
}

export default App;
