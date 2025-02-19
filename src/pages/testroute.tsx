import { JSX } from "react";

const TestPage = (): JSX.Element => {
  return (
    <div>
      <p>Test page</p>
      <p>Sample public Vite env val: {import.meta.env.VITE_ENV_VALUE}</p>
    </div>
  );
};

export default TestPage;
