//exercicio 1
class Usuario {
    constructor(email, senha) {
        this.email = email; //Anotando na propriedade da classe
        this.senha = senha; //Anotando na propriedade da classe
    }

    isAdmin() {
        return this.admin === true;
    }
}

class Admin extends Usuario {
    constructor(email, senha) {
        super(email, senha);
        this.admin = true;
    }
}

const User1 = new Usuario("email@teste.com", "senha123");
const Adm1 = new Admin("email@teste.com", "senha123");

// console.log(User1.isAdmin()); // false
// console.log(Adm1.isAdmin()); // true

//exercicio 2
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

//2.1
let idades = usuarios.map(usuario => usuario.idade);
// console.log(idades);

//2.2
let trabalhadores = usuarios.filter(function (item) {
    return item.empresa === "Rocketseat" && item.idade >= 18;
})
// console.log(trabalhadores);

//2.3
let procura = usuarios.find(item => item.empresa === "Google")
// console.log(procura);

//2.4
let unindo = usuarios
    .map(usuario => ({ ...usuario, idade: usuario.idade * 2 }))
    .filter(usuario => usuario.idade <= 50);

// console.log(unindo);

//exercicio 3
// 3.1
const arr = [1, 2, 3, 4, 5];
arr.map(item => item + 10);

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };

const mostraIdade = usuario => usuario.idade;
mostraIdade(usuario);

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;

const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });

mostraUsuario(nome, idade);
mostraUsuario(nome);

// 3.4
const promise = () => new Promise((resolve, reject) => resolve())
