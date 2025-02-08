import { API_URL } from '@/constants/data';

export const getSpecialistOnMainPage = async (): Promise<any> =>
  await fetch(`${API_URL}/main-specialists?populate=*`).then((data) =>
    data.json()
  );
