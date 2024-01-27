import Link from "next/link";
import styles from "./Menu.module.css";

export default function Menu() {
  return (
      <uli className={styles.menu}>
        <li className={styles.Link}><Link href={"/"}>Домашняя</Link></li>
        <li className={styles.Link}><Link href={"/cabinet"}>Кабинет</Link></li>
        <li className={styles.Link}><Link href={"/contacts"}>Контакты</Link></li>
      </uli>
  );
}
