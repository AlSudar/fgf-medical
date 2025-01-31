export interface WorkI {
  image: string;
  procedure: string;
  result: string;
}

export const MOCK_WORKS: WorkI[] = [
  {
    image: '/pages/specialists/works/first.png',
    procedure: 'Процедура, чья работа',
    result: 'Описание результата',
  },
  {
    image: '/pages/specialists/works/second.png',
    procedure: 'Процедура, чья работа',
    result: 'Описание результата',
  },
];
