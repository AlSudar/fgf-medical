import { Header } from '../Header';
import { Footer } from '../Footer';

export const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <main>{children}</main> <Footer />
    </>
  );
};
