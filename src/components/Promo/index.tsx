import Img from "components/Img";
import { PromoWrapper } from "./styled";

function Promo() {
  return (
    <PromoWrapper>
      <div className="content">
        <h2>Adizero running</h2>
        <p>
          Created by design experts and pro athlete feedback, with innovative
          technologies that gelp you take your turn to the next level. Check out
          the new models of the adizero running franchise.
        </p>
        <div className="image">
          <Img src="/img/img (6).webp" objectFit="cover" data-scroll data-scroll-speed="1" />
        </div>
      </div>
    </PromoWrapper>
  );
}

export default Promo;
