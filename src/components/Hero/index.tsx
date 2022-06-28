import Img from "components/Img";
import { useEffect } from "react";
import { HeroWrapper } from "./styled";
import gsap from "gsap";

function Hero() {
  useEffect(() => {
    /* gsap.registerPlugin(ScrollTrigger); */

    const revealContainers = document.querySelectorAll(".reveal");

    revealContainers.forEach((container) => {
      const image = container.querySelector("img");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: "restart none none reset",
        },
      });

      tl.set(container, { autoAlpha: 1 });
      tl.from(container, 1.5, {
        xPercent: -100,
        ease: "power2.out",
      });
      tl.from(image, 1.5, {
        xPercent: 100,
        scale: 1.3,
        delay: -1.5,
        ease: "power2.out",
      });
    });
  }, []);

  return (
    <HeroWrapper>
      <div className="content">
        <div className="image reveal">
          <Img
            src="/img/img (62).webp"
            objectFit="cover"
            data-scroll
            data-scroll-speed="-0.6"
          />
        </div>

        <div className="description" data-scroll data-scroll-speed="2">
          <div>
            <h2>Discover fashion.</h2>
            <br />
            <h2>
              New <span>sneakers</span>
            </h2>
            <br />
            <h2>collection</h2>
          </div>
          <p>
            We are a global platform for the footwear industry. Our goal is to
            unite designers, boutiques and buyers on one site. Commit offers
            unique shopping opportunities and the largest selection of leading
            brands on one platform.
          </p>
        </div>
      </div>
    </HeroWrapper>
  );
}

export default Hero;
