import { useState } from 'react';

export const useAuth = () => {
  const [isAuthenticated] = useState<boolean>(false);

  return {
    isAuthenticated,
  };
};