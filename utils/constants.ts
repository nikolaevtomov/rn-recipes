export interface Category {
  id: string;
  name: string;
  color: string;
}

export const CATEGORIES: Array<Category> = [
  {id: 'c1', name: 'Italian', color: '#f5428d'},
  {id: 'c2', name: 'Quick & Easy', color: '#f54242'},
  {id: 'c3', name: 'Hamburgers', color: '#f5a442'},
  {id: 'c4', name: 'German', color: '#f5d142'},
  {id: 'c5', name: 'Light & Lovely', color: '#368dff'},
  {id: 'c6', name: 'Exotic', color: '#41d95d'},
  {id: 'c7', name: 'Breakfast', color: '#9eecff'},
  {id: 'c8', name: 'Asian', color: '#b9ffb0'},
  {id: 'c9', name: 'French', color: '#ffc7ff'},
  {id: 'c10', name: 'Summer', color: '#47fced'},
];
