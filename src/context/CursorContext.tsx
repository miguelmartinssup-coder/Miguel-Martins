import { createContext, useContext, useState, ReactNode } from 'react';

interface CursorContextType {
  isHovering: boolean;
  cursorLabel: string;
  setHovering: (hovering: boolean, label?: string) => void;
}

export const CursorContext = createContext<CursorContextType>({
  isHovering: false,
  cursorLabel: '',
  setHovering: () => {},
});

export function CursorProvider({ children }: { children: ReactNode }) {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorLabel, setCursorLabel] = useState('');

  const setHovering = (hovering: boolean, label: string = '') => {
    setIsHovering(hovering);
    setCursorLabel(label);
  };

  return (
    <CursorContext.Provider value={{ isHovering, cursorLabel, setHovering }}>
      {children}
    </CursorContext.Provider>
  );
}

export const useCursor = () => useContext(CursorContext);
