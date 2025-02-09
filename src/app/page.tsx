import style from "./page.module.css";
import { Header } from "@/components/header/header";
import { Title } from "@/components/title/title";
import { ListOfProducts } from "@/components/ListOfProducts/listOfProducts";
import { Sumary_mobile } from "@/components/sumary_mobile/sumary_mobile";

export default function Home() {
  return (
    <>
      <Header />
      <main className={style.main}>
        <Title />
        <ListOfProducts />
      </main>
      <Sumary_mobile />
    </>
  );
}
