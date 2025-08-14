import { ReactNode } from "react";

export const Button = ({
  onClick,
  children,
}: {
  children: ReactNode;
  onClick: () => void;
}) => {
  return <button onClick={onClick}>{children}</button>;
};
