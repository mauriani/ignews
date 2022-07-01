import { GetServerSideProps } from "next";
import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";

import styles from "./home.module.scss";

export default function Home(props) {
  console.log(props);
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about the <span>React</span> word.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for $9.90 month</span>
          </p>
          <SubscribeButton />
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
}

// o nome da função tem que ser assim, de dentro do next conseguimos importar a typagem .
// .. por isso escrevemos como const
export const getServerSideProps: GetServerSideProps = async () => {
 // const price = await stri
  return {
    props: {
      nome: "Mauriani",
    },
  };
};
