import HttpUtil from "./http.util";
import Router from "next/router";

const httpUtil = new HttpUtil({
  resErrorHandler: () => Router.push("/login"),
});
