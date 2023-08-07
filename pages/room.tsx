import { Login } from "@/components/Login/Login";
import { isLogin } from "./listPage";
import AppShell from "@/components/Common/AppShell/AppShell";

export default function index() {
  return (
    <AppShell isLogin={isLogin}>
      <Login />
    </AppShell>
  );
}
