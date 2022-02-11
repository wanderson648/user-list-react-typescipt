import { ReactNode } from 'react';

import { Content } from './ButtonStyle';

interface ButtonProps {
  children: ReactNode;
  type: 'submit' | 'button';
  onClick?: ()=> void;
}


export function Button({ children, type, onClick }: ButtonProps) {
  return(
    <Content
      type={type || 'button'}
      onClick={onClick}
    >
      {children}
    </Content>
  )
}