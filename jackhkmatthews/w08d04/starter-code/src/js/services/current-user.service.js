angular
  .module('angularAuthentication')
  .service('CurrentUserService', CurrentUserService);

CurrentUserService.$inject = ['TokenService', 'User', '$rootScope'];
function CurrentUserService(TokenService, User, $rootScope) {
  const self = this;

  self.getUser = () => {
    const decoded = TokenService.decodeToken();
    console.log(decoded);

    if (decoded) {
      User
        .get({id: decoded.id})
        .$promise
        .then(data => {
          self.currentUser = data;
          $rootScope.$broadcast('loggedIn');
          console.log(data);
        });
    }
  };

  self.getUser();

  self.removeUser = () => {
    self.currentUser = null;
    TokenService.removeToken();
    $rootScope.$broadcast('loggedOut');
  };

}
