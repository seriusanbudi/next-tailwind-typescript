import { 
  titleize, 
  humanize,
  money,
  options,
} from './format';

// Money Format
test('Format money with value = 1000', () => {
  expect(money(1000)).toBe("1,000.00");
});

test('Format money with comma value = 1000.23', () => {
  expect(money(1000.23)).toBe("1,000.23");
});

test('Format money with round up = 1000.236', () => {
  expect(money(1000.236)).toBe("1,000.24");
});

test('Format money with round down = 1000.232', () => {
  expect(money(1000.232)).toBe("1,000.23");
});

// Titleize text format
test('Format word to titleize', () => {
  expect(titleize("budi")).toBe("Budi");
});

test('Format words to titleize', () => {
  expect(titleize("budi harta")).toBe("Budi Harta");
});

// Humanize text format
test('Format word to humanize', () => {
  expect(humanize("budi_harta")).toBe("budi harta");
})

// Options generator
test('Create options from given array', () => {
  const friends = [
    { id: 1, name: "Budi", address: "Giayar" },
    { id: 2, name: "Harta", address: "Denpasar" },
  ]

  const expectedResult = [
    { key: 1, label: "Budi" },
    { key: 2, label: "Harta" },
  ]

  expect(options(friends, "id", "name")).toMatchObject(expectedResult);
})