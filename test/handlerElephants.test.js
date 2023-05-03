const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se handlerElephants é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });

  it('Testa se retorna undefine caso a função seja chamada sem parâmetro', () => {
    expect(handlerElephants()).toBe(undefined);
  });

  it('Testa o retorno caso o parâmetro não seja uma string', () => {
    expect(handlerElephants(1)).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('Testa o retorno ao se passar uma string', () => {
    expect(handlerElephants('animal')).toBe(null);
  });

  it('Testa o retorno ao se passar a string "count"', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('Testa o retorno ao se passar a string "names"', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('Testa o retorno ao se passar a string "averageAge"', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });

  it('Testa o retorno ao se passar a string "location"', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
});
