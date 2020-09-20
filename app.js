// debugger;

Trello.authorize({
  name: "RAWR",
  // persist: false,
  expiration: "1hour",
  success: (maw) => {
    console.log(maw, 'SUCCESS')
    Trello.members.get(
      "me",
      { fields: "username,fullName" },
      (rawr) => console.log({rawr}),
      (meow) => console.error({meow})
    );
  },
  error: (maw) => console.error(maw, 'NO!')
});
