type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

type UserWithAuth = User & {
  email: string;
  token: string;
}

export type { User, UserWithAuth };
