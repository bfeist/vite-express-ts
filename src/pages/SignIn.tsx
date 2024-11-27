import { LoginForm } from "@/components/LoginForm";
import { loginUser } from "@/api/user";
import { useNavigate } from "react-router";

const SignInPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <h2>Sign in</h2>
      <LoginForm onSubmit={loginUser} onSuccess={() => navigate("/profile", { replace: true })} />
      <p>
        Don't have an account? <a href="signup">Sign up!</a>
      </p>
    </>
  );
};

export { SignInPage };
