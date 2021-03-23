import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { startMock } from "../mocks";

if (process.env.NODE_ENV === "development") {
  startMock();
}

function MyApp({ Component, pageProps }: any) {
  return <Component {...pageProps} />;
}

export default MyApp;
