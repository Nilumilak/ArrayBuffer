import BaseCharacter from './BaseCharacter';

export default class Zombie extends BaseCharacter {
    constructor(name) {
        super(name, 'Zombie', 40, 10);
    }
}
