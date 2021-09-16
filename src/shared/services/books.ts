import { GET_BOOKS } from '../constants/api';
import request from './request';

export const searchBooks = async (text: string) => {
  try {
    const response = await request.get(GET_BOOKS, text);
    return response;
  } catch {
    return null;
  }
};
