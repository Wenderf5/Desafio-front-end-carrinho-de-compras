import style from "./page.module.css";
import { Header } from "@/components/header/header";
import { Title } from "@/components/title/title";
import { Cart } from "@/components/cart/cart";
import { Sumary } from "@/components/sumary/sumary";

export default function Home() {
  return (
    <>
      <Header />
      <main className={style.main}>
        <Title />
        <section className={style.container_cart}>
          <Cart />
          <Sumary />
        </section>
      </main>
    </>
  );
}
