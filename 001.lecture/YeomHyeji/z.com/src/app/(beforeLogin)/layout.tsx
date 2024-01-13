import { ReactNode } from "react";
import styles from "@/app/(beforeLogin)/_component/main.module.css";

interface IProps {
  children: ReactNode;
  modal: ReactNode;
}

export default function Layout({ children, modal }: IProps) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
}
