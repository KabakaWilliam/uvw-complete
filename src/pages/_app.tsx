import { type AppType } from "next/app";

import { api } from "y/utils/api";

import "y/styles/globals.css";
import { RecoilRoot } from "recoil";
RecoilRoot;
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
};

export default api.withTRPC(MyApp);
