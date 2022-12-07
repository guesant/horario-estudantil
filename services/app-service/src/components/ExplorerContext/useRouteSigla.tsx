import { useContext } from 'react';
import { ExplorerRoutingContext } from '../ExplorerRoutingContext/ExplorerRoutingContext';

export const useRouteSigla = () => {
  const { query } = useContext(ExplorerRoutingContext);

  return query.ue;
};
