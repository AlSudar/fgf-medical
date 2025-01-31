import { RootLayout } from '@/layouts/Root/Content';
import { Header } from '@/layouts/Root/Header';

const RootTemplate = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header />
      <RootLayout> {children}</RootLayout>
    </>
  );
};

export default RootTemplate;
