if (window.innerWidth && window.innerWidth <= 480) {
$(document).ready(function(){
$('#header ul').addClass('show');
$('#header ul').addClass('hide');
$('#header').append('<div class="leftButton" onclick="toggleMenu()">Menu</div>');});
function toggleMenu() {
$('#header ul').toggleClass('show');
$('#header .leftButton').toggleClass('pressed');
$('#header ul').toggleClass('hide');
}
}