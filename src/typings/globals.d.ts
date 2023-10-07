declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

export type RespExampleType = {
  id: number;
  text: string;
};
