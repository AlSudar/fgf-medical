import { ReactElement } from 'react';
import { Fade } from 'react-awesome-reveal';

const FadeConfig = ({ children }: { children: ReactElement }) => {
  return (
    <Fade fraction={0.2} triggerOnce={true} duration={1200} direction='up'>
      {children}
    </Fade>
  );
};

export { FadeConfig };
