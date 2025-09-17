export type UserData = {
  username: string;
  tag: string;
  location: string;
  avatar: string;
  stats: {
    followers: number;
    views: number;
    likes: number;
  };
};

export type FriendData = {
  avatar: string;
  name: string;
  isOnline: boolean;
  id: number;
};

export type TransactionsData = {
  id: string;
  type: string;
  amount: string;
  currency: string;
};
