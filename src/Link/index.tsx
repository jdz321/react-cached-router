import React, { FC, ReactNode } from 'react';
import { useCachedRouterContext } from '../CachedRouter/RouterContext';

export const Link: FC<{ to: string; children: ReactNode }> = ({
  to,
  children,
}) => {
  const { setPath } = useCachedRouterContext();
  return <span onClick={setPath.bind(null, to)}>{children}</span>;
};
