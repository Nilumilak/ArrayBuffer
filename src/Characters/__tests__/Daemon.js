import Daemon from '../Daemon';

test('Base Daemon Attack', () => {
    const character = new Daemon('Name');
    expect(character.attack).toBe(10);
});

test('Base Daemon Defence', () => {
    const character = new Daemon('Name');
    expect(character.defence).toBe(40);
});
