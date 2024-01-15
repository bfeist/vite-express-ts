const globalTeardown = async (): Promise<void> => {
  console.log("jest globalTeardown");
};

export default globalTeardown;
