import {useRouter} from "next/router";

export const useRouteRequiresSigla = () => {
  const router = useRouter();

  const {pathname} = router;

  return pathname.startsWith("/h/");
};