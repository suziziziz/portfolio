
// var cur_type = 0;
function registerOrLogin( nType ) {
    // cur_type = nType;
    if ( nType == 1) {
        document.getElementById('to-register').style = "visibility: visible;";
        document.getElementById('to-login').style = "visibility: hidden;";
    } else if ( nType == 2 ) {
        document.getElementById('to-login').style = "visibility: visible;";
        document.getElementById('to-register').style = "visibility: hidden;";
    }
}