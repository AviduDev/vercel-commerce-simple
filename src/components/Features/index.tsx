import Img from "components/Img";
import { FeaturesWrapper } from "./styled";

function Features() {
  return (
    <FeaturesWrapper>
      <div className="content">
        <div className="panel panel-features">
          <h2>Why Commit</h2>
          <div className="features-grid">
            <div className="feature">
              <span>__</span>
              <span>Worldwide shop</span>
              <p>We deliver all over the world. We dont have limits.</p>
            </div>
            <div className="feature">
              <span>__</span>
              <span>Free Shipping</span>
              <p>For all purchases over $1500.</p>
            </div>
            <div className="feature">
              <span>__</span>
              <span>Free return</span>
              <p>
                If something does not suit you, you can exchange the item within
                7 days.
              </p>
            </div>
            <div className="feature">
              <span>__</span>
              <span>Worldwide brands</span>
              <p>We work with the most famous shoe brands.</p>
            </div>
          </div>
        </div>

        <div className="panel panel-image">
          <div className="image">
            <Img
              src="/img/img (3).webp"
              objectFit="cover"
              data-scroll
              data-scroll-speed="1"
              data-scroll-direction="horizontal"
            />
          </div>
        </div>
      </div>
    </FeaturesWrapper>
  );
}

export default Features;
