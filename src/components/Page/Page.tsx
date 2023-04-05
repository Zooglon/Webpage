import "./Page.style.scss";
import { FC, ReactNode } from "react";

type PageProps = {
  children?: ReactNode;
};

const Page: FC<PageProps> = ({ children }) => {
  return <section className="page__container">{children}</section>;
};

export default Page;
