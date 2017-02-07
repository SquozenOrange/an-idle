angular.module('app').component('commandCenter', {
    
    templateUrl: '/app/command-center/command-center.template.html',
    
    controller: function CommandCenterController($location){
        
        var ctrl = {};
        
        ctrl.queryLocation = $location.search().ship ? $location.search() : {ship: 0};
        
        ctrl.data = [
            {
                name: "Pickaxe mk1",
                price: 100,
                description: "The bog standard reliable imperial mining ship.",
                orePerTick: 0.1,
                amountOwned: 1
            },
            {
                name: "Gravity Hammer",
                price: 5000,
                description: "The Gravity Hammer is a mid size ship that utilises precise blasts of gravitational energy to dislodge chunks of ore in large amounts.",
                orePerTick: 1.5,
                amountOwned: 0
            },
            {
                name: "Titan X5",
                price: 15000,
                description: "The top of the line mining vessel. Stocked out all the most technologically advanced mining equipment that I haven't been bothered to invent descriptions for yet.",
                orePerTick: 5,
                amountOwned: 0
            }
        ];
        
        ctrl.getData = function(){
            if (ctrl.queryLocation.ship > (ctrl.data.length - 1)) {
                return ctrl.data[0];
            } else {
                return ctrl.data[ctrl.queryLocation.ship];
            }
        };
        
        return ctrl;
        
    }
    
});