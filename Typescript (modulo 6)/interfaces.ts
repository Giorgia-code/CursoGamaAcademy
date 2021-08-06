// Só existe aqui no typescript nao existe no JS. É mais indicado usar Interface do que Type Alias

interface Usuario {
  nome: string;
  email: string;
  address?: string;
}

function getUser(): Usuario {
  return {
    nome: 'Giorgia',
    email: 'g.isa.maia@hotmail.com'
  }
}

function setUser(usuario: Usuario) {
  
}