import Better from "@/Components/MainPage/Better";
import Copilot from "@/Components/MainPage/Copilot";
import Feature from "@/Components/MainPage/Feature";
import Main1 from "@/Components/MainPage/Main1";
import More from "@/Components/MainPage/More";
import Product from "@/Components/MainPage/Product";
import ProductImg from "@/Components/MainPage/ProductImg";
import Promote from "@/Components/MainPage/Promote";
import Video from "@/Components/MainPage/Video";

export default function Home() {
  return (
    <>
      <Main1></Main1>
      <Promote></Promote>
      <Feature></Feature>
      <Copilot></Copilot>
      <Video></Video>
      <Product></Product>
      <ProductImg></ProductImg>
      <Better></Better>
      <More></More>
    </>
  )
}