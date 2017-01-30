angular
  .module('angularAuthentication')
  .factory('AuthInterceptor', AuthInterceptor);

AuthInterceptor.$inject = ['API', 'TokenService'];
function AuthInterceptor(API, TokenService){
  return {
    // request: function request(config){ es5
    request(config){
      //modification
      const token = TokenService.getToken();
      if (config.url.indexOf(API) === 0 && token){
        config.headers.Authorization = `Bearer ${token}`;
      }
      console.log('config', config);
      return config;
    },
    // response: function response(response){ es5
    response(res){
      //modification
      if (res.config.url.indexOf(API) === 0 && res.data.token){
        //setting token in local storage is it exists
        TokenService.setToken(res.data.token);
        console.log('token: ', res.data.token);
      }
      console.log('res', res);
      return res;
    }
  };
}
