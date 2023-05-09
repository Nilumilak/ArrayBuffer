import Zombie from '../Zombie';

test('Base Zombie Attack', () => {
    const character = new Zombie('Name');
    expect(character.attack).toBe(40);
});

test('Base Zombie Defence', () => {
    const character = new Zombie('Name');
    expect(character.defence).toBe(10);
});
