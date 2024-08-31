import { Footer } from "./Footer";
import { GNB } from "./GNB";

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <GNB />
      {children}
      <Footer />
    </>
  );
};
