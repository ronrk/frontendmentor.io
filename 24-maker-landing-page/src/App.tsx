import Header from "./components/Header";
import Feature from "./components/Feature";
import Pricing from "./components/Pricing";
import GetinTouch from "./components/GetinTouch";

function App() {
  return (
    <div className="bg-black">
      <Header />
      <div className="features container">
        <Feature
          img={"/assets/illustration-passions.svg"}
          title={"Indulge your passions"}
          context={
            "Your passions shouldn't be just for the weekend. Earn a living doing what you love."
          }
        />
        <Feature
          img={"/assets/illustration-financial-freedom.svg"}
          title={"Gain financial freedom"}
          context={
            "Start making money work for you. There’s nothing quite like earning while you sleep. "
          }
        />
        <Feature
          img={"/assets/illustration-lifestyle.svg"}
          title={"Choose your lifestyle"}
          context={
            "Own your daily schedule. Fancy a lie-in? Go for it! Take charge of your week."
          }
        />
        <Feature
          img={"/assets/illustration-work-anywhere.svg"}
          title={"Work from anywhere"}
          context={
            "Selling online means not being pinned down. Want to work AND travel? Go for it!"
          }
        />
      </div>
      <div className="container">
        <h3 className="pricing-header fs-600 text-white text-center">
          Our pricing plans
        </h3>
        <p className="fs-400 text-white-5 text-center">
          We only make money when our creators make money. Our plans are always
          affordable, and it’s completely free to get started.
        </p>
        <div className="pricings">
          <Pricing
            img={"/assets/icon-free.svg"}
            title={"Dip your toe"}
            context={
              "Just getting started? No problem at all! Our free plan will take you a long way."
            }
            listTitle={"Free"}
            listItems={[
              "Unlimited products",
              "Basic analytics",
              "Limited marketplace exposure",
              "10% fee per transaction",
            ]}
            free={true}
            color="white"
          />
          <Pricing
            img={"/assets/icon-paid.svg"}
            title={"Dive right in"}
            context={
              "Ready for the big time? Our paid plan will help you take your business to the next level."
            }
            listTitle={"$25.00"}
            listItems={[
              "Custom domain",
              "Advanced analytics and reports",
              "High marketplace visibility",
              "5% fee per transaction",
            ]}
            color="black"
          />
        </div>
      </div>
      <GetinTouch />
    </div>
  );
}

export default App;
