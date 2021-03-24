import useSWR from "swr";
import { userService } from "@@services";
import { SWR_KEYS } from "@@commons";

export const useUser = () => {
  const { data, error } = useSWR(SWR_KEYS.USE_USER, () => userService.get());

  const loading = !data && !error;

  return [data, loading];
};
