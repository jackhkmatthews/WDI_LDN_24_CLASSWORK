angular
  .module('angularAuthentication')
  .service('TokenService', TokenService);

TokenService.$inject = ['$window', 'jwtHelper'];
function TokenService($window, jwtHelper){
  const self = this;

  self.setToken = function(token){
    $window.localStorage.setItem('auth-token', token);
  };

  self.getToken = function(){
    return $window.localStorage.getItem('auth-token');
  };

  self.decodeToken = function(){
    const token = self.getToken();
    return token ? jwtHelper.decodeToken(token) : null;
  };

  self.removeToken = function(){
    $window.localStorage.clear();
  };
}
