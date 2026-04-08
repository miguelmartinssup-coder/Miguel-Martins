import { createContext, useContext, useState, ReactNode } from 'react';

type CursorVariant = 'default' | 'link' | 'project' | 'button';

interface CursorContextType {
  variant: CursorVariant;
  setVariant: (v: CursorVariant) => void;
}

export const CursorContext = createContext<CursorContextType>({
  variant: 'default',
  setVariant: () => {},
});

export function CursorProvider({ children }: { children: ReactNode }) {
  const [variant, setVariant] = useState<CursorVariant>('default');

  return (
    <CursorContext.Provider value={{ variant, setVariant }}>
      {children}
    </CursorContext.Provider>
  );
}

export const useCursor = () => useContext(CursorContext);
