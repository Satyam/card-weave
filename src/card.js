export const WIDTH = 17;
const LS_KEY = 'card-weave';
export function newRow() {
  return [true].concat(new Array(WIDTH - 2).fill(null), true);
}

export function saveCard(card) {
  window.localStorage.setItem(LS_KEY, JSON.stringify(card));
}

export function readCard() {
  const lsItem = window.localStorage.getItem(LS_KEY);
  if (lsItem) {
    const card = JSON.parse(lsItem);
    if (card.length) return card;
  }
  return [newRow()];
}
