import { GET_BOOKS } from '~/shared/constants/api';
import request from '~/shared/services/request';

export const searchBooks = async (text: string, index: number) => {
  try {
    const response = await request.get(GET_BOOKS, { text, index });
    return response;
  } catch {
    return null;
  }
};
