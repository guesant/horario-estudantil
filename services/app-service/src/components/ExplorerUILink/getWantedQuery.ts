import omit from 'lodash/omit';
import pick from 'lodash/pick';

export const getWantedQuery = (
  query: any,
  keep: string[] = [],
  ignore: string[] = [],
) => omit(pick(query, ['ue', ...keep]), [...ignore]);
