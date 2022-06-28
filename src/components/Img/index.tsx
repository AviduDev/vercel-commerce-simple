import Image from "next/image";

function Img(props: any) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        paddingBottom: "20%",
      }}
    >
      <Image alt="Image Alt" layout="fill" objectFit="contain" {...props} />
    </div>
  );
}

export default Img;
