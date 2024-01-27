import Image from "next/image";
import styles from "./page.module.css";
import Menu from "@/components/Menu/Menu";

export default function Contacts() {
  return (
    <main className={styles.main}>
      <Menu/>
      <div>
        Контакты
      </div>
      <div className={styles.contacts}>
        Телефон: +71234567890<br></br>
        Адрес: ABCD@mail.ru
      </div>
    </main>
  );
}
