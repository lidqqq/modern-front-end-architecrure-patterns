import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <ul className={styles.container}>
      <li className={styles.li}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li className={styles.li}>
        <Link href="/ask">
          <a>Ask</a>
        </Link>
      </li>
    </ul>
  );
}
