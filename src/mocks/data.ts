import { Character } from '../models/character';
import { Counselor } from '../models/counselor';
import { Fighter } from '../models/fighter';
import { King } from '../models/king';
import { Squire } from '../models/squire';
import { TasksStructure } from '../models/tasks';

const personajes = [];

const rey = new King('Joffrey', 'Baratheon', 51, 20);
personajes.push(rey);
const luchador = new Fighter('Jaime', 'Lannister', 40, 'Sword', 8);
personajes.push(luchador);
const luchadora = new Fighter('Daenerys', 'Targaryen', 32, 'Dragons', 9);
personajes.push(luchadora);
const asesor = new Counselor('Tyrion', 'Lannister', 45, personajes[3]);
personajes.push(asesor);
const escudero = new Squire('Bronn', 'James', 30, 10, personajes[2]);
personajes.push(escudero);
