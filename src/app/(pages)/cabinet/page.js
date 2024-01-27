import Image from "next/image";
import styles from "./page.module.css";
import Menu from "@/components/Menu/Menu";

export default function Cabinet() {
  return (
    <main className={styles.main}>
      <Menu/>
      <div>
        Кабинет
      </div>
      <form className={styles.form}>
        <input className={styles.input}></input>
        <input className={styles.input}></input>
        <button className={styles.button}>Войти</button>
      </form>
    </main>
  );
}
