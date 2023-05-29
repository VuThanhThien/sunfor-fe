import { IForgotPassDto, ILoginDto, IRegisterDto } from 'src/types/user';
import api from './api';
import TokenService from './token.service';

class AuthService {
  login(userDto: ILoginDto) {
    return api
      .post('/auth/login', userDto)
      .then((response) => {
        if (response.data.accessToken) {
          TokenService.setUser(response.data);
        }
        return response.data;
      })
      .catch((_e) => {});
  }

  logout() {
    TokenService.removeUser();
  }

  register(userDto: IRegisterDto) {
    return api
      .post('/user/signup', userDto)
      .then((response) => {
        return response.data;
      })
      .catch((_e) => {
        console.log(_e);
      });
  }

  forgotPass(forgotPassDto: IForgotPassDto) {
    return api
      .put('/user/forgot-password', forgotPassDto)
      .then((response) => {
        return response.data;
      })
      .catch((_e) => {
        console.log(_e);
      });
  }
}

export default new AuthService();