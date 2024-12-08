import { AuthStatus } from '@/utils/consts';

class AuthApiService {
  get authStatus() {
    return AuthStatus.NoAuth;
  }
}

export default new AuthApiService();
