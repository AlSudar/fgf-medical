import { API_URL } from '@/constants/data';

export const getListCategories = async (): Promise<any> =>
  await fetch(`${API_URL}/list-categories`).then((data) => data.json());
