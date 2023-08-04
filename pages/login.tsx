import Header from "@/components/header/header";
import { Login } from "@/components/Login/Login";
import { isLogin } from "./listPage";

export default function index() {
  return (
    <div>
      <style jsx global>
        {`
          body {
            margin: 0px;
            padding: 0px;
          }
        `}
      </style>
      <Header isLogin={isLogin} />
      <Login />
    </div>
  );
}
