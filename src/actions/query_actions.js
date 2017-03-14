import {
  UPDATE_QUERY_SEARCH_STRING
} from '../constants/query_constants';

export const update_query_search_string = search_string => ({
  type: UPDATE_QUERY_SEARCH_STRING,
  search_string
});
