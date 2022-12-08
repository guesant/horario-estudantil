import { createContext, MouseEventHandler, useCallback, useState } from 'react';
import { ExplorerSelectInstituicaoDialog } from '../ExplorerSelectInstituicaoButton/ExplorerSelectInstituicaoDialog';

const FALLBACK_HREF = '/configuracoes/instituicao';

type IExplorerDialogSelectInstituicaoContext = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  handleClick: MouseEventHandler<HTMLElement>;

  href: string;
};

export const ExplorerDialogSelectInstituicaoContext = createContext(
  {} as IExplorerDialogSelectInstituicaoContext,
);

export const ExplorerDialogSelectInstituicaoContextProvider = (props: {
  children?: any;
}) => {
  const { children } = props;

  const [isOpen, setIsOpen] = useState(false);

  const handleClick: MouseEventHandler<HTMLElement> = useCallback((event) => {
    event.preventDefault();
    setIsOpen(true);
  }, []);

  return (
    <>
      <ExplorerDialogSelectInstituicaoContext.Provider
        value={{ isOpen, setIsOpen, handleClick, href: FALLBACK_HREF }}
      >
        {children}

        <ExplorerSelectInstituicaoDialog
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </ExplorerDialogSelectInstituicaoContext.Provider>
    </>
  );
};
