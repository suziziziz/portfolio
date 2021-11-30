import Piece from '../components/Piece'
import Project from '../components/Project'
import Social from '../components/Social'

export default function Home() {
  let pieceIndex = -1

  return (
    <div>
      <Piece id={++pieceIndex} luna pyramid notPrevious fadeTo='black' >
        <h1>PORTFÓLIO</h1>
        <p>de Filype Rodrigues</p>
        <Social href='https://www.linkedin.com/in/suziziziz' src='/logo-linkedin.svg' alt='Linkedin' />
        <Social href='https://suziziziz.itch.io' src='/logo-itch.svg' alt='Itch' />
        <Social href='https://gamejolt.com/@suziziziz' src='/logo-gamejolt.png' alt='GameJolt' />
      </Piece>

      <Piece id={++pieceIndex} style={{background: '#000'}} interrogation>
        <h1>SOBRE MIM</h1>
      </Piece>

      <Piece id={++pieceIndex} style={{background: '#000'}}>
        <h1>QUEM SOU EU?</h1>
        <p>Meu nome é Filype, sou Web/Game Developer.</p>
        <p>Em relação a desenvolvimento web, eu sou iniciante nisso, comecei a estudar sobre isso no início de 2021, mas adquiri conhecimento suficiente para desenvolver qualquer coisa.</p>
        <p>Já em relação a desenvolvimento de jogos, eu programo há quase 4 anos.</p>
      </Piece>

      <Piece id={++pieceIndex} style={{background: '#000'}}>
        <h1>QUAIS OS MEUS CONHECIMENTOS?</h1>
        <p>Tenho conhecimento em HTML, CSS, JavaScript, React, Next, ReactNative (Desenvolvimento Mobile) e Electron (Desenvovimento Desktop).</p>
        <p>Na área de desenvolvimento de jogos, eu tenho conhecimento nas engines Godot e GameMaker:Studio.</p>
      </Piece>

      <Piece id={++pieceIndex} fadeTo='transparent'>
        <h1>MEUS PROJETOS COMO WEBDEV</h1>
      </Piece>
      
      <Piece id={++pieceIndex}>
        <Project href='https://lulacoin.org' src='/lulacoin.jpg' alt='Lula Coin' />
        <Project href='https://www.bellamodels.com.br/promolandingpage' src='/bellamodels.jpg' alt='Bella Models + Projects (Promotion Landing Page)' />
      </Piece>

      <Piece id={++pieceIndex} fadeTo='black'>
        <h1>MEUS PROJETOS COMO GAMEDEV</h1>
        <h2>(DO MELHOR PARA O PIOR)</h2>
      </Piece>
      
      <Piece id={++pieceIndex} notNext style={{background: '#000'}}>
        <Project href='https://github.com/suziziziz/godot-nicks-tower' src='/nicks-tower.png' alt="Nick's Tower" />
        <Project href='https://github.com/suziziziz/ce64' src='/ce64.png' alt="CE64" />
        <Project href='https://github.com/suziziziz/gamemaker-studio-again' src='/again.png' alt="Again" />
        <Project href='https://github.com/suziziziz/gamemaker-studio-n14' src='/n14.png' alt="N14" />
      </Piece>
    </div>
  )
}
