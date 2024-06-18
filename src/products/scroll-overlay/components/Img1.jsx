import DefaultImgViewContainer from "./DefaultImgViewContainer";

export default function Img1() {
  const property = { bgColor: "#604CC3", topY: 800 };

  return <DefaultImgViewContainer ref={property}>Img1</DefaultImgViewContainer>;
}
