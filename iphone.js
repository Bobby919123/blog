if (window.innerWidth && window.innerWidth <= 2000) {
    $(document).ready(function(){
        $('#header ul').addClass('show');
        $('#header').append('<div class="leftButton" onclick="toggleMenu()">Menu</div>');
    });
    function toggleMenu() {
        $('#header ul').toggleClass('hide');
        $('#header .leftButton').toggleClass('pressed');
    }
}