const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {});
it('ao nao receber parametro retornar undefined', () => {
  expect(handlerElephants()).toBeUndefined();
});
it('se handlerElephants é uma fuinção', () => {
  expect(typeof handlerElephants).toBe('function');
});
it('ao receber um numero retorna parametro invalido', () => {
  expect(handlerElephants(5)).toBe('Parâmetro inválido, é necessário uma string');
});
it('ao receber parametro count retornar numero de elefantes', () => {
  expect(handlerElephants('count')).toBe(4);
});
it('ao receber parametro names retornar um arrau com nomes de elefantes', () => {
  const actual = handlerElephants('names');
  const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
  expect(actual).toEqual(expected);
});
it('ao receber parametro averageAge retornar um array com nomes de elefantes', () => {
  const actual = handlerElephants('averageAge');
  const expected = 10.5;
  expect(actual).toEqual(expected);
});
it('ao receber parametro location retornar um local', () => {
  const actual = handlerElephants('location');
  const expected = 'NW';
  expect(actual).toEqual(expected);
});
it('ao receber parametro location retornar a inteligencia dos elefantes', () => {
  const actual = handlerElephants('popularity');
  const expected = 5;
  expect(actual).toEqual(expected);
});
it('ao receber parametro availability retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
  const actual = handlerElephants('availability');
  const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
  expect(actual).toEqual(expected);
});
