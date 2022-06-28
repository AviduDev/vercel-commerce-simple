import Header from "./Header";
import { LayoutWrapper } from "./styled";
import { useRef, useEffect } from "react";
import Footer from "./Footer";

function Layout({ children,  lightMode}: any) {
  const scrollRef = useRef();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const scroll: any = import("locomotive-scroll" as string).then(
      (LocomotiveScroll) => {
        new LocomotiveScroll.default({
          el: scrollRef.current,
          smooth: true,
        });
      }
    );

    return () => scroll.destroy();
  }, []);

  return (
    <LayoutWrapper ref={scrollRef as any}>
      <Header lightMode={lightMode} />
      {children}
      <Footer />
    </LayoutWrapper>
  );
}

export default Layout;
