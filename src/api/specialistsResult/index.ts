import { API_URL } from '@/constants/data';

export const getSpecialistsResult = async (): Promise<any> =>
  await fetch(`${API_URL}/results-specialists?populate=*`).then((data) =>
    data.json()
  );
