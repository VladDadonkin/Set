
import Team from "../src/set.js";

class Character {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    };
}

describe('Tests team class', () => {
    let team;
    let hero1, hero2, hero3;


    beforeEach(() => {
        team = new Team;
        hero1 = new Character('warrior', 3);
        hero2 = new Character('archer', 6);
        hero3 = new Character('wizard', 2);


    });

    test('метод add(), добавление персонажа', () => {
        team.add(hero1);
        expect(team.toArray()).toContain(hero1);
    });

    test('проверка ошибки в методе add()', () => {
        team.add(hero1);
        expect(() => team.add(hero1)).toThrow('Этот персонаж уже в команде');
    })

    test('проверка метода addAll()', () => {
        team.addAll(hero1,hero2,hero3);
        expect(team.toArray()).toContain(hero1);
        expect(team.toArray()).toContain(hero2);
        expect(team.toArray()).toContain(hero3);
        
    });
    

    test('проверка метода addAll() на игнор дублирования ', () => {
        team.addAll(hero1,hero2,hero1);
        expect(team.toArray()).toEqual([hero1, hero2]);
    })

    test('конвертация Set в array', () => {
        team.addAll(hero1, hero2);
        const array = team.toArray();
        expect(array).toBeInstanceOf(Array);
        expect(array).toHaveLength(2);
        expect(array).toEqual(expect.arrayContaining([hero1, hero2]));
    })

    test('toArray() возращает пустой массив', () => {
        expect(team.toArray()).toEqual([]);
    })
}) 