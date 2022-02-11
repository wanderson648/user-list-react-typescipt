import { ReactNode } from 'react';

import { CardStyle } from './CardStyle';

interface CardPropsChildren {
  children: ReactNode;
} 


export function Card({ children }: CardPropsChildren) {

  return(
    <CardStyle>
      {children}
    </CardStyle>
  )
}