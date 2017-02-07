angular.module('app').factory('resourceDataCache', function(){
    
    var service = {
        
        data: {
            ore: 0,
            money: 1000
        },
      
        getData: function(){
            return service.data;
        }
        
    };
    
    return service;
    
});