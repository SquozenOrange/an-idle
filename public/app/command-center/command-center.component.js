angular.module('app').component('commandCenter', {
    
    templateUrl: '/app/command-center/command-center.template.html',
    
    controller: function CommandCenterController($location, shipDataCache){
        
        var ctrl = {};
        
        ctrl.data = shipDataCache.getData();
        
        // ALL OF THIS NEEDS TO BE MOVED TO A NEW SERVICE THAT HANDLES QUERY STRINGS AND DATA LOOKUPS
        
            ctrl.queryLocation = $location.search().ship ? $location.search() : {ship: 0};
            
            ctrl.getData = function(){
                if (ctrl.queryLocation.ship > (ctrl.data.length - 1)) {
                    return ctrl.data[0];
                } else {
                    return ctrl.data[ctrl.queryLocation.ship];
                }
            };
        
        // END OF ALL OF THIS 
        
        ctrl.buy = function(obj, amount){
            obj.amountOwned += amount;
            for(var i = 0; i < amount; i++){
                obj.price = (obj.price *= 1.015);
            }
        };
        
        return ctrl;
        
    }
    
});