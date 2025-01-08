//aqui faz se a troca do tema

function togglemode () {  
    const html = document.documentElement
    html.classList.toggle('light')
    
    // aqui pega a imagem do css #profile 
   // adicionadana no modo principal ou seja o dark 
   // para mim
  const img = document.querySelector("#profile img")

// substituir a imagem
  if (html.classList.contains('light')) {
 // se tiver light mode, adiciona a imagem light
 img.setAttribute("src", './assets/avatar-light.png')

  } else {
    // se tiver sem light mode, manter a imagem normal
 img.setAttribute("src", './assets/avatar.png')

  }
       
  //quando ta apagado assim, mostra que é apenas outra forma
  //de fazer o botão mudar o tema do app
  //que ja existe na ferramenta vs code
  //  ou em qualquer outra usada.
  
    }
  