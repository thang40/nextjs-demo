import Head from "next/head";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import { useUser } from "@@hooks";

export default function Home() {
  const [user, loading] = useUser();
  return (
    <div className={styles.container}>
      <Head>
        <title>Demo - Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {loading && <div>...Loading</div>}
        {!loading && user && <div>{user.username}</div>}
      </main>
    </div>
  );
}
