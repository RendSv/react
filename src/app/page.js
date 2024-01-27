import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Menu from "@/components/Menu/Menu";

export default function Home() {
  return (
    <main className={styles.main}>
      <Menu/>
      <div>
        Домашняя
      </div>
    </main>
  );
}
