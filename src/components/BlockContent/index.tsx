import { PropsWithChildren } from "react";
import { BlockContentWrapper } from "./styled";

function BlockContent({ children }: PropsWithChildren) {
  return <BlockContentWrapper>{children}</BlockContentWrapper>;
}

export default BlockContent;
