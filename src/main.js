import ClasseUsuario from './functions';

ClasseUsuario.info();

// 

import { idade } from './functions';
console.log(idade);

// 
import Usuario, { idade as IdadeUsuario } from './functions';
console.log('Idade Usuario: ' + IdadeUsuario);
