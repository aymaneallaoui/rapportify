import { LoginNav } from "@/components/layouts/LoginNav";
import { FC, ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className=" bg-background ">
      <LoginNav /> {children}
    </div>
  );
};

export default AuthLayout;
