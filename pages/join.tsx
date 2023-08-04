import { Join } from "@/components/Join/Join";
import Header from "@/components/header/header";
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
      <Join />
    </div>
  );
}
