angular.module('app').component('navBar', {
    
    templateUrl: '/app/nav-bar/nav-bar.template.html',
    
    controller: function NavBarController(){
        
        !(function($){
            $(function(){
                
                $(document).on('click', '.navLink', function(e){
                    $('.navLink').removeClass('active');
                    $(e.target).parent().addClass('active');
                });
                
            });
        })(jQuery);
        
    }
    
});