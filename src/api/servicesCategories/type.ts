export interface ServicesCategoryI {
  title: string;
  categoryId: string;
  visible: boolean;
  services: ServiceI[];
}

export interface ServiceI {
  title: string;
  link: string;
  visible: boolean;
}
