export interface ServiceI {
  title: string;
  url: string;
  hide: boolean;
}

export interface CategoryI {
  title: string;
  href: string;
  image: string;
  services: ServiceI[];
}

export const MOCK_CATEGORIES: CategoryI[] = [
  {
    title: 'Инъекционная <br /> косметология',
    href: 'inekcionnaya-kosmetologiya',
    image: '/pages/services/ListCategories/first.png',
    services: [
      { title: 'Акне', url: 'akne', hide: false },
      { title: 'Розацеа', url: 'rozacea', hide: false },
      { title: 'Коррекция губ', url: 'lol', hide: false },
      { title: 'Суха кожа', url: 'suhay-koja', hide: false },
      { title: 'Скрытая услуга', url: 'skritaya-uskuga', hide: true },
    ],
  },
  {
    title: 'Аппаратная <br /> косметология',
    href: 'apparatnaya-kosmetologiya',
    image: '/pages/services/ListCategories/second.png',
    services: [
      { title: 'Акне', url: 'akne', hide: false },
      { title: 'Розацеа', url: 'rozacea', hide: false },
      { title: 'Коррекция губ', url: 'lol', hide: false },
      { title: 'Суха кожа', url: 'suhay-koja', hide: false },
      { title: 'Скрытая услуга', url: 'skritaya-uskuga', hide: true },
    ],
  },
  {
    title: 'Дерматология',
    href: 'dermatologiya',
    image: '/pages/services/ListCategories/third.png',
    services: [
      { title: 'Акне', url: 'akne', hide: false },
      { title: 'Розацеа', url: 'rozacea', hide: false },
      { title: 'Коррекция губ', url: 'lol', hide: false },
      { title: 'Суха кожа', url: 'suhay-koja', hide: false },
      { title: 'Скрытая услуга', url: 'skritaya-uskuga', hide: true },
    ],
  },
  {
    title: 'Трихология',
    href: 'trihologiya',
    image: '/pages/services/ListCategories/four.png',
    services: [
      { title: 'Акне', url: 'akne', hide: false },
      { title: 'Розацеа', url: 'rozacea', hide: false },
      { title: 'Коррекция губ', url: 'lol', hide: false },
      { title: 'Суха кожа', url: 'suhay-koja', hide: false },
      { title: 'Скрытая услуга', url: 'skritaya-uskuga', hide: true },
    ],
  },
  {
    title: 'Уходовые <br /> процедуры',
    href: 'uhodovye-procedury',
    image: '/pages/services/ListCategories/five.png',
    services: [
      { title: 'Акне', url: 'akne', hide: false },
      { title: 'Розацеа', url: 'rozacea', hide: false },
      { title: 'Коррекция губ', url: 'lol', hide: false },
      { title: 'Суха кожа', url: 'suhay-koja', hide: false },
      { title: 'Скрытая услуга', url: 'skritaya-uskuga', hide: true },
    ],
  },
  {
    title: 'Эстетическая <br /> гинекология',
    href: 'esteticheskaya-ginekologiya',
    image: '/pages/services/ListCategories/six.png',
    services: [
      { title: 'Акне', url: 'akne', hide: false },
      { title: 'Розацеа', url: 'rozacea', hide: false },
      { title: 'Коррекция губ', url: 'lol', hide: false },
      { title: 'Суха кожа', url: 'suhay-koja', hide: false },
      { title: 'Скрытая услуга', url: 'skritaya-uskuga', hide: true },
    ],
  },
  {
    title: 'Флебология',
    href: 'flebologiya',
    image: '/pages/services/ListCategories/seven.png',
    services: [
      { title: 'Акне', url: 'akne', hide: false },
      { title: 'Розацеа', url: 'rozacea', hide: false },
      { title: 'Коррекция губ', url: 'lol', hide: false },
      { title: 'Суха кожа', url: 'suhay-koja', hide: false },
      { title: 'Скрытая услуга', url: 'skritaya-uskuga', hide: true },
    ],
  },
  {
    title: 'Превентивная <br /> медицина',
    href: 'preventivnaya-medicina',
    image: '/pages/services/ListCategories/eigth.png',
    services: [
      { title: 'Акне', url: 'akne', hide: false },
      { title: 'Розацеа', url: 'rozacea', hide: false },
      { title: 'Коррекция губ', url: 'lol', hide: false },
      { title: 'Суха кожа', url: 'suhay-koja', hide: false },
      { title: 'Скрытая услуга', url: 'skritaya-uskuga', hide: true },
    ],
  },
  {
    title: 'Косметология тела',
    href: 'kosmetologiya-tela',
    image: '/pages/services/ListCategories/nine.png',
    services: [
      { title: 'Акне', url: 'akne', hide: false },
      { title: 'Розацеа', url: 'rozacea', hide: false },
      { title: 'Коррекция губ', url: 'lol', hide: false },
      { title: 'Суха кожа', url: 'suhay-koja', hide: false },
      { title: 'Скрытая услуга', url: 'skritaya-uskuga', hide: true },
    ],
  },
  {
    title: 'Продукция',
    href: 'produkciya',
    image: '/pages/services/ListCategories/ten.png',
    services: [
      { title: 'Акне', url: 'akne', hide: false },
      { title: 'Розацеа', url: 'rozacea', hide: false },
      { title: 'Коррекция губ', url: 'lol', hide: false },
      { title: 'Суха кожа', url: 'suhay-koja', hide: false },
      { title: 'Скрытая услуга', url: 'skritaya-uskuga', hide: true },
    ],
  },
];
