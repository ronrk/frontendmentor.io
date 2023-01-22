import Wrapper from "./GetinTouch.styled";

const GetinTouch = () => {
  return (
    <Wrapper className="">
      <h2 className="fs-700 fw-m text-white">Get notified when we launch</h2>
      <div className="form-control">
        <input
          placeholder="Email address"
          type="email"
          className="bg-secondary text-white fs-500"
        />
        <button className="bg-primary fs-500 text-black fw-b">
          Get notified
        </button>
      </div>
    </Wrapper>
  );
};

export default GetinTouch;
