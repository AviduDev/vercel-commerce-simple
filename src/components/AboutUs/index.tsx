import Img from "components/Img";
import { AboutWrapper } from "./styled";

function AboutUs() {
  return (
    <AboutWrapper>
      <div className="content">
        <div className="panel">
          <h2>About us</h2>
          <Img
            src="/img/img (2).webp"
            objectFit="cover"
            data-scroll
            data-scroll-speed="-0.5"
            data-scroll-direction="horizontal"
          />
        </div>

        <div className="panel">
          <div className="paragraph">
            <p>
              Lord Henry looked at him. Yes, he was certainly wonderfully
              handsome, with his finely curved scarlet lips, his frank blue
              eyes, his crisp gold hair. There was something in his face that
              made one trust him at once. All the candour of youth was there, as
              well as all youth’s passionate purity. One felt that he had kept
              himself unspotted from the world. No wonder Basil Hallward
              worshipped him. “You are too charming to go in for philanthropy,
              Mr. Gray—far too charming.” And Lord Henry flung himself down on
              the divan and opened his cigarette-case.
            </p>

            <p>
              The painter had been busy mixing his colours and getting his
              brushes ready. He was looking worried, and when he heard Lord
              Henry’s last remark, he glanced at him, hesitated for a moment,
              and then said, “Harry, I want to finish this picture to-day. Would
              you think it awfully rude of me if I asked you to go away?”
            </p>

            <p>
              Lord Henry smiled and looked at Dorian Gray. “Am I to go, Mr.
              Gray?” he asked.
            </p>
          </div>
          <Img
            src="/img/img (47).webp"
            objectFit="cover"
            data-scroll
            data-scroll-speed="0.5"
            data-scroll-direction="horizontal"
          />
        </div>
      </div>
    </AboutWrapper>
  );
}

export default AboutUs;
