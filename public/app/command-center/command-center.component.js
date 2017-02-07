angular.module('app').component('commandCenter', {
    
    templateUrl: '/app/command-center/command-center.template.html',
    
    controller: function CommandCenterController($location, shipDataCache){
        
        var ctrl = {};
        
        ctrl.data = shipDataCache.getData();
        
        ctrl.queryLocation = $location.search().ship ? $location.search() : {ship: 0};
        
        ctrl.getData = function(){
            if (ctrl.queryLocation.ship > (ctrl.data.length - 1)) {
                return ctrl.data[0];
            } else {
                return ctrl.data[ctrl.queryLocation.ship];
            }
        };
        
        ctrl.buy = function(obj, amount){
            obj.amountOwned += amount;
            obj.price = ~~(obj.price *= 1.05); // ~~ means floor
        };
        
        return ctrl;
        
    }
    
});