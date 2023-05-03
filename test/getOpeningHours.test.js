const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testa se getOpeningHours é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });

  it('Testa se o retorno da função getOpeningHours quando não recebe parâmetro é um objeto', () => {
    expect(typeof getOpeningHours()).toBe('object');
  });

  it('Testa o retorno da função getOpeningHours quando não recebe parâmetro', () => {
    expect(getOpeningHours()).toEqual({ Friday: { close: 8, open: 10 }, Monday: { close: 0, open: 0 }, Saturday: { close: 10, open: 8 }, Sunday: { close: 8, open: 8 }, Thursday: { close: 8, open: 10 }, Tuesday: { close: 6, open: 8 }, Wednesday: { close: 6, open: 8 } });
  });

  it('Testa o retorno da função getOpeningHours quando recebe uma string como parâmetro', () => {
    expect(() => getOpeningHours('qualquer coisa')).toThrow();
  });

  it('Testa se ao passar dia e hora validos a função getOpeningHours retorna o esperado', () => {
    expect(getOpeningHours('Sunday', '12:05-PM')).toBe('The zoo is open');
  });

  it('Testa se ao passar dia e hora em que o ZOO estaria fechado a função getOpeningHours retorna o esperado', () => {
    expect(getOpeningHours('Sunday', '00:05-AM')).toBe('The zoo is closed');
  });

  it('Testa se ao passar hora fora do formato PM-AM função getOpeningHours retorna o esperado', () => {
    expect(() => getOpeningHours('Sunday', '12:05-hour')).toThrow();
  });

  it('Testa se ao passar hora fora em dia de não funcionamento a função getOpeningHours retorna o esperado', () => {
    expect(getOpeningHours('Monday', '12:05-PM')).toBe('The zoo is closed');
  });

  it('Testa se ao passar hora fora do padrão 12h a função getOpeningHours retorna o esperado', () => {
    expect(() => getOpeningHours('Sunday', '13:05-PM')).toThrow();
  });

  it('Testa se ao passar minutos fora do padrão 60m a função getOpeningHours retorna o esperado', () => {
    expect(() => getOpeningHours('Sunday', '12:75-PM')).toThrow();
  });

  it('Testa se ao passar hora fora do padrão a função getOpeningHours retorna o esperado', () => {
    expect(() => getOpeningHours('Sunday', '12hour:0-PM')).toThrow();
  });
});
