import { useGeneratorContext } from "../context/generator-context";

import Wrapper from "./styles/Slider.styled";

const Slider = () => {
  const generator = useGeneratorContext()?.generator;
  const changeGenerator = useGeneratorContext()?.changeGenerator;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    changeGenerator?.(name, value, true, []);
  };

  return (
    <Wrapper
      className="form-control"
      range={(generator?.length || 0) / 20 / 0.01}
    >
      <div className="form-label flex">
        <h3 className="fs-100 text-gray">Chracter Length</h3>
        <p className="fs-400 text-green">{generator?.length}</p>
      </div>
      <input
        type="range"
        onChange={handleChange}
        name="length"
        min="1"
        max="20"
        value={generator?.length || 0}
      />
    </Wrapper>
  );
};

export default Slider;
// value / length / 0.01 == perc
