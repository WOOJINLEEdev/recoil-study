export interface ITodoItem {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface IItemProps {
  completed: boolean;
}
