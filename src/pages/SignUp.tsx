import { LoginForm } from "@/components/LoginForm";
import { createUser } from "@/api/user";
import { useNavigate } from "react-router";

const SignUpPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <h2>Sign Up</h2>
      <LoginForm
        onSubmit={createUser}
        onSuccess={() => navigate("/signin", { replace: true })}
        submitFormText="Create account"
      />
      <p>
        Already have an account? <a href="/">Sign in</a>
      </p>
    </>
  );
};
export { SignUpPage };
