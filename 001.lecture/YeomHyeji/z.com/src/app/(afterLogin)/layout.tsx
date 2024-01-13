import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export default function AfterLoginLayout({ children }: IProps) {
  return <div>{children}</div>;
}
