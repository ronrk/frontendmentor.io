import Checkbox from "./Components/Checkbox";
import Generate from "./Components/Generate";
import Slider from "./Components/Slider";
import Strength from "./Components/Strength";
import TextField from "./Components/TextField";

const App = () => {
  return (
    <div className="app bg-gray-dark-2">
      <h1 className="text-gray fs-300 text-to-center">Password Generator</h1>
      <TextField />
      <form
        className="form bg-gray-dark container flex-col"
        onSubmit={(e) => e.preventDefault()}
      >
        <Slider />
        <Checkbox />
        <Strength />
        <Generate />
      </form>
    </div>
  );
};

export default App;
