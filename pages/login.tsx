import Header from '@/components/header/header'
import { LoginHeader, LoginForm } from '@/components/Login/Login';
import style from './login.module.css'

export default function index() {
    return <div>
        <style jsx global>
        {`
          body {
            margin: 0px;
            padding: 0px;
            background-color: #81C690;
          }
        `}
      </style>
        <Header />
        <LoginHeader />
        <LoginForm />
    </div>;
  }
  