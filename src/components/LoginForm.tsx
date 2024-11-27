import { useCallback, useState } from "react";
import { FormError } from "./FormError";
import "./LoginForm.module.css";

interface LoginFormProps {
  onSubmit: (userData: User) => Promise<void>;
  onSuccess: () => void;
  submitFormText?: string;
}

const LoginForm = ({ onSubmit, onSuccess, submitFormText = "Log in" }: LoginFormProps) => {
  const [error, setError] = useState<Error>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const userData = Object.fromEntries(formData.entries()) as User;
      await onSubmit(userData);
      onSuccess();
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        setError(error);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          autoComplete="username"
          id="username"
          name="username"
          placeholder="username"
          required
          type="text"
        />
        <label htmlFor="password">Password</label>
        <input
          autoComplete="current-password"
          id="password"
          minLength={12}
          name="password"
          placeholder="12+ characters"
          required
          type="password"
        />
        <button disabled={isLoading} type="submit">
          {submitFormText}
        </button>
      </form>
      {error && <FormError errorMessage={error.message} />}
    </>
  );
};

export { LoginForm };
