// debugger;

Trello.authorize({
  name: "RAWR",
  persist: false,
  expiration: "1hour",
  scope: { read: true, write: true, account: false },
  success: (maw) => {
    console.log(maw, 'SUCCESS')
    Trello.members.get(
      "me",
      { fields: "username,fullName" },
      (rawr) => console.log({rawr}),
      (meow) => console.error({meow})
    );

    Trello.post(
      "organizations",
      {
        displayName: "2114-test-org",
        desc: "test desc",
        name: "sample name",
      },
      (postOrg) => console.log({postOrg}),
      (postOrgErr) => console.error({postOrgErr})
    );


    Trello.members.get(
      "me/organizations",
      // { fields: "username,fullName" },
      (rawr) => console.log({rawr}),
      (meow) => console.error({meow})
    );
  },
  error: (maw) => console.error(maw, 'NO!')
});
