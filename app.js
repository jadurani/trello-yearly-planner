// debugger;

Trello.authorize({
  name: "RAWR",
  persist: false,
  expiration: "1hour",
  success: (maw) => console.log(maw, 'DUCCESS'),
  error: (maw) => console.error(maw, 'NO!')
});