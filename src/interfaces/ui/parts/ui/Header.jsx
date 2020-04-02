import Link from "next/link";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import styles from "./Header.module.css";
import { commonLoadStart } from "../../../../store/ducks/app/index.js";

export default function Header() {
  const disppatch = useDispatch();
  const onClick = useCallback(() => {
    disppatch(commonLoadStart());
  }, [disppatch, commonLoadStart]);
  return (
    <ul className={styles.container}>
      <li className={styles.li} onClick={onClick}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li className={styles.li} onClick={onClick}>
        <Link href="/ask">
          <a>Ask</a>
        </Link>
      </li>
    </ul>
  );
}
