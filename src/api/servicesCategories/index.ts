import { API_URL } from '@/constants/data';

export const getServicesCategories = async (): Promise<any> =>
  await fetch(`${API_URL}/categories?populate=*`).then((data) => data.json());
