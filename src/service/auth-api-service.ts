import { AuthStatus } from '@/utils/consts';

class AuthApiService {
  get authStatus() {
    return AuthStatus.Auth;
  }
}

export default new AuthApiService();
