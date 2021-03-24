import { httpUtil } from "../utils";

export const get = async (): Promise<any> => {
  const data: any = await httpUtil.get<any>("/user");
  return data;
};
