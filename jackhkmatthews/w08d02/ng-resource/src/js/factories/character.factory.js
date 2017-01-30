angular
  .module('lightsaberApp')
  .factory('Character', Character);

Character.$inject = ['API', '$resource'];
function Character(API, $resource){
  return $resource(`${API}/characters/:id`,
    { id: '@_id'},
    { update: { method: 'PUT'}}
    // {
    //   'get': {method: 'GET'},
    //   'save': {method: 'POST'},
    //   'remove': {method: 'DELETE'},
    //   'delete': {method: 'DELETE'},
    //   'query': {method: 'GET', isArray: true}
    // }
  );
}
