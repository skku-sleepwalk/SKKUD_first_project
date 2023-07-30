import Header from '@/components/header/header'
import { SignInForm } from '@/components/SignIn/SignInForm';

export default function index() {
    return <div>
        <style jsx global>
        {`
          body {
            margin: 0px;
            padding: 0px;
          }
        `}
      </style>
        
        <Header />
        <SignInForm />
    </div>;
  }
  