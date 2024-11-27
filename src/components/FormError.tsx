import styles from "./FormError.module.css";

const FormError = ({ errorMessage }: { errorMessage: string }) => (
  <div className={styles["form-error"]}>{errorMessage}</div>
);

export { FormError };
