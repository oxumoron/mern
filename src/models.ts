export interface IColor {
  id: string;
  title: string;
  color: string;
  rating: number;
  remove?: () => void;
  onRate?: (rating: number) => void;
}
