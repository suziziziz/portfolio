let navbar_code = `
    <nav id="top-navbar" class="navbar navbar-inverse">
        <div class="container">
        <div class="navbar-header">
            <a href="/" class="navbar-brand">Portfólio</a>
        </div>
        <ul class="nav navbar-nav">
            <li><a href="/about/">Sobre</a></li>
            <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">HTML<span class="caret"></span></a>
                <ul class="dropdown-menu">
                    <li><a href="/html/code-reuse/">Reutilização de código</a></li>
                </ul>
            </li>
        </ul>
        </div>
    </nav>
`;
document.write(navbar_code);
