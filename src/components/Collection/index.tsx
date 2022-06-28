import Img from "components/Img";
import { CollectionWrapper } from "./styled";

function Collection() {
  return (
    <CollectionWrapper>
      <div className="content">
        <div className="panel">
          <h2>New Collection</h2>
        </div>

        <div className="panel cards">
          <div className="card">
            <Img src="/img/img (11).webp" objectFit="cover" />
            <span>Nike ambush</span>
          </div>
          <div className="card">
            <Img src="/img/img (19).webp" objectFit="cover" />
            <span>Converse Giano</span>
          </div>
          <div className="card">
            <Img src="/img/img (25).webp" objectFit="cover" />
            <span>Balenciaga Triple S</span>
          </div>
        </div>
      </div>
    </CollectionWrapper>
  );
}

export default Collection;
