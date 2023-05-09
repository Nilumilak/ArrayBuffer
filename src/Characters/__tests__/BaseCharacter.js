import BaseCharacter from '../BaseCharacter';

test('Base health', () => {
    const character = new BaseCharacter('Name', 'Bowman');
    expect(character.health).toBe(100);
});

test('Base level', () => {
    const character = new BaseCharacter('Name', 'Bowman');
    expect(character.level).toBe(1);
});

test.each([
    ['Short name', 'S', 'Bowman', 'Name cannot be either less than 2 or bigger than 10'],
    ['Long name', 'Longgggggggggggg', 'Bowman', 'Name cannot be either less than 2 or bigger than 10'],
    ['Wrong type', 'Name', 'Wrong Type', 'Wrong type'],
])('Testing error: %s', (_, name, type, errMsg) => {
    expect(() => new BaseCharacter(name, type)).toThrow(errMsg);
});

test('Level Up: Level', () => {
    const character = new BaseCharacter('Name', 'Bowman', 100, 100);
    character.levelUp();
    expect(character.level).toBe(2);
});

test('Level Up: Attack', () => {
    const character = new BaseCharacter('Name', 'Bowman', 100, 100);
    character.levelUp();
    expect(character.attack).toBe(120);
});

test('Level Up: Defence', () => {
    const character = new BaseCharacter('Name', 'Bowman', 100, 100);
    character.levelUp();
    expect(character.defence).toBe(120);
});

test('Level Up: Health', () => {
    const character = new BaseCharacter('Name', 'Bowman', 100, 100);
    character.health = 50;
    character.levelUp();
    expect(character.health).toBe(100);
});

test('Level Up: Error', () => {
    const character = new BaseCharacter('Name', 'Bowman', 100, 100);
    character.health = 0;
    expect(() => character.levelUp()).toThrow('Bowman, Name is dead');
});

test('Damage test: Health', () => {
    const character = new BaseCharacter('Name', 'Bowman', 50, 50);
    character.damage(100);
    expect(character.health).toBe(50);
});

test('Damage test: Error', () => {
    const character = new BaseCharacter('Name', 'Bowman', 50, 50);
    character.health = 0;
    expect(() => character.damage(50)).toThrow('Bowman, Name is dead');
});

test('Stoned Test', () => {
    const character = new BaseCharacter('Name', 'Bowman', 50, 50);
    character.stoned = true;
    expect(character.stoned).toBe(true);
});

test('Fight Test (Not Stoned)', () => {
    const character1 = new BaseCharacter('Name', 'Bowman', 100, 0);
    const character2 = new BaseCharacter('Name', 'Bowman', 100, 0);
    character1.attackEnemy(character2, 2);
    expect(character2.health).toBe(10);
});

test('Fight Test (Stoned)', () => {
    const character1 = new BaseCharacter('Name', 'Bowman', 100, 0);
    const character2 = new BaseCharacter('Name', 'Bowman', 100, 0);
    character1.stoned = true;
    character1.attackEnemy(character2, 2);
    expect(character2.health).toBe(15);
});
