// https://api.github.com/users/filyp3r
var my_perfil;
async function getMyPerfil(  ) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            my_perfil = JSON.parse(this.responseText);
            document.getElementById("my-perfil-image").setAttribute('src', my_perfil['avatar_url']);
            document.getElementById("my-perfil-name" ).innerHTML = my_perfil['name'];
            document.getElementById("my-perfil-bio"  ).innerHTML = my_perfil['bio'];
        }
    };
    xhttp.open('GET', 'https://api.github.com/users/filyp3r', true);
    xhttp.send();
}
getMyPerfil();
