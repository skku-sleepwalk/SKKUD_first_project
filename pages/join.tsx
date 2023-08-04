import { Join } from "@/components/Join/Join";
import Header from "@/components/header/header";

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

      <Header isLogin={false} />
      <Join />
    </div>
  );
}
