angular.module('app').component('resourcePanel', {
    
    templateUrl: '/app/resource-panel/resource-panel.template.html',
    
    controller: function ResourcePanelController(resourceDataCache){
        
        var ctrl = {};
        
        ctrl.data = resourceDataCache.getData();
        
        return ctrl;
        
    }
    
});