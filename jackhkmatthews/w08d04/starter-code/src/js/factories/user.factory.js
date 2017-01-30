angular
  .module('angularAuthentication')
  .factory('User', userFactory);

userFactory.$inject = ['API', '$resource'];
function userFactory(API, $resource){
  return $resource(`${API}/users/:id`,
    { id: '@_id'}, {
      'register': {
        method: 'POST',
        url: `${API}/register`
      },
      'login': {
        method: 'POST',
        url: `${API}/login`
      }
    }
  );
}

// {
//   'get': {method: 'GET'},
//   'save': {method: 'POST'},
//   'remove': {method: 'DELETE'},
//   'delete': {method: 'DELETE'},
//   'query': {method: 'GET', isArray: true}
// }
