const getOpeningHours = require('../src/getOpeningHours');

const dayError = 'The day must be valid. Example: Monday';

describe('Testes da função getOpeningHours', () => {
  it('ao nao receber parametro retornar undefined', () => {
    const allDays = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(allDays);
  });
  it('se getOpeningHours é uma fuinção', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  it('ao passar um dia que o zoo nao abre ele retorna a info', () => {
    expect(getOpeningHours('monday', '6:20-pm')).toBe('The zoo is closed');
  });
  it('ao passar um dia que o zoo abre ele retorna a info', () => {
    expect(getOpeningHours('Wednesday', '8:20-am')).toBe('The zoo is open');
  });
  it('caso nao seja colocado am ou pm deverá ser lançado um error', () => {
    expect(() => getOpeningHours('wednesday', '8:20-cm')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('caso nao seja colocado um parametro no formato correto deverá ser lançado um error', () => {
    expect(() => getOpeningHours('ola')).toThrow(dayError);
  });
  it('caso nao seja colocado um numero que exceda 59 sera lançado um error', () => {
    expect(() => getOpeningHours('wednesday', '8:80-pm')).toThrow('The minutes must be between 0 and 59');
  });
  it('caso nao seja colocado um numero que exceda 12 ser lançado um error', () => {
    expect(() => getOpeningHours('wednesday', '18:30-pm')).toThrow('The hour must be between 0 and 12');
  });
  it('caso nao seja colocado um numero no campo horas deverá ser lançado um error', () => {
    expect(() => getOpeningHours('wednesday', 'ola:80-pm')).toThrow('The hour should represent a number');
  });
  it('caso nao seja colocado um numero no campo minutos deverá ser lançado um error', () => {
    expect(() => getOpeningHours('wednesday', '8:ola-pm')).toThrow('The minutes should represent a number');
  });
});
