/*
  create reducer actions
*/
import * as Types from './types';

export const getCategories = () => {
  return {
    type: Types.GET_CATEGORIES
  };
};