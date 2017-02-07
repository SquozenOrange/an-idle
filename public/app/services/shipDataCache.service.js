angular.module('app').factory('shipDataCache', function(){
    
    var service = {
        
        data: [
            {
                name: "Ion-Pickaxe mk1",
                price: 100,
                description: "The bog standard reliable imperial mining ship. Fires a concentracted ion pulse which breaks away small chunks of ore.",
                orePerTick: 0.1,
                amountOwned: 1,
                imageUrl: 'http://wiki.eveuniversity.org/images/e/ef/Venture.jpg'
            },
            {
                name: "Gravity Hammer",
                price: 5000,
                description: "The Gravity Hammer is a mid size ship that utilises precise blasts of gravitational energy to dislodge chunks of ore in large amounts.",
                orePerTick: 1.5,
                amountOwned: 0,
                imageUrl: 'http://images.mediabiz.de/newspics/198/414198_1/b450x254.jpg'
            },
            {
                name: "Titan X5",
                price: 15000,
                description: "The top of the line mining vessel. Stocked out all the most technologically advanced mining equipment that I haven't been bothered to invent descriptions for yet.",
                orePerTick: 5,
                amountOwned: 0,
                imageUrl: 'http://www.avorion.net/press/avorion/images/ship1.png'
            }
        ],
        
        getData: function(){
            return service.data;
        }
        
    };
    
    return service;

});