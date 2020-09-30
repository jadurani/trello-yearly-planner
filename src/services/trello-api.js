const Trello = {...window.Trello};
const moment = window.moment;

export const auth = () => {
  return new Promise((resolve, reject) => {
    Trello.authorize({
      // name: "RAWR",
      persist: true,
      expiration: "1hour",
      scope: { read: true, write: true, account: false },
      success: () => resolve(),
      error: (maw) => {console.error(maw, 'NO!'); reject()}
    });
  })
}

export const createTeam = (displayName) => {
  return new Promise((resolve, reject) => {
    Trello.post(
      "organizations",
      {
        displayName: displayName,
        name: displayName,
      },
      (postOrg) => {
        console.log({postOrg})
        resolve(postOrg)
      },
      (postOrgErr) => {
        console.error({postOrgErr})
        reject(postOrgErr)
      }
    );
  });
};

// export const getTeam = () => {
//   return new Promise((resolve, reject) => {
//     Trello.get(
//       `organizations/5f6757c16319908b79546dbc`,
//       {
//         displayName: "2114-test-org",
//         desc: "test desc",
//         name: "sample name",
//       },
//       (postOrg) => {
//         console.log({postOrg})
//         resolve(postOrg)
//       },
//       (postOrgErr) => {
//         console.error({postOrgErr})
//         reject(postOrgErr)
//       }
//     );
//   });
// };

const createBoard = async (boardName, teamId) => {
  return new Promise((resolve, reject) => {
    Trello.post(
      "boards",
      {
        "name": boardName,
        "defaultLabels": "false",
        "defaultLists": "false",
        "idOrganization": teamId,
        "keepFromSource": "none",
        "prefs_permissionLevel": "org",
        "prefs_voting": "disabled",
        "prefs_comments": "members",
        "prefs_invitations": "admins",
        "prefs_selfJoin": "true",
        "prefs_cardCovers": "true",
        "prefs_background": "blue",
        "prefs_cardAging": "regular"
      },
      (lkjlkj) => {
        console.log({lkjlkj})
        resolve(lkjlkj)
      },
      (dajflkjERR) => {
        console.error(boardName, teamId, {dajflkjERR})
        reject(dajflkjERR)
      }
    )
  });
}

const createList = async (weekNum, boardId) => {
  const weekStart = moment('2021').week(weekNum).day(1).format("MMMDD")
  const weekEnd = moment('2021').week(weekNum).day(7).format("MMMDD")
  const listName = `${weekStart}-${weekEnd}`
  console.log(listName)
  return new Promise((resolve, reject) => {
    Trello.post(
      `boards/${boardId}/lists`,
      {
        name: listName,
        idBoard: boardId,
        pos: "bottom"
      },
      () => {console.log('resolve'); resolve()},
      () => {console.log('reject'); reject()}
    )
  })
}

const createTaskStatusList = async (boardId) => {
  const listNames = [
    "Won't Do",
    "Backlog",
    "Ongoing (long-term)",
    "Doing today",
    "Doing now"
  ]

  return Promise.all(listNames.map(async listName => {
    return new Promise((resolve, reject) => {
      Trello.post(
        `boards/${boardId}/lists`,
        {
          name: listName,
          idBoard: boardId,
          pos: "bottom"
        },
        ({id}) => {console.log('created ', listName, {id}); resolve()},
        () => {console.log('rejected ', listName); reject()}
      )
    });
  }));
}

const createLabels = async (boardId) => {
  const labelList = [
    {
      color: "green",
      name: "Yoga / Fitness / Exercise / Health / Diet",
    },
    {
      color: "yellow",
      name: "Tech Work",
    },
    {
      color: "red",
      name: "Business / Entrepreneurship / Self-development / Financial",
    },
    {
      color: "purple",
      name: "Bhakti / Family / Community / Service",
    },
    {
      color: "blue",
      name: "Friends",
    },
    {
      color: "sky",
      name: "Adventure / Photography / Videography / Music / Creative Pursuits",
    },
    {
      color: "pink",
      name: "Personal / Misc",
    },
    {
      color: "black",
      name: "Chores"
    }
  ];

  return Promise.all(labelList.map(async label => {
    return new Promise((resolve, reject) => {
      Trello.post(
        `labels/`,
        {
          ...label,
          idBoard: boardId,
        },
        (id) => {console.log('created ', label, id); resolve()},
        () => {console.log('rejected ', label); reject()}
      )
    });
  }));
}

const addListLabel = async (boardId) => {
  const labels = await new Promise((resolve, reject) => {
    Trello.get(
      `boards/${boardId}/labels`,
      (label) => {console.log('resolve'); resolve(label)},
      () => {console.log('reject'); reject()}
    )
  });

  const listId = await new Promise((resolve, reject) => {
    Trello.post(
      `boards/${boardId}/lists`,
      {
        name: "Labels",
        idBoard: boardId,
        pos: "top"
      },
      ({id}) => resolve(id),
      () => reject()
    )
  });

  return Promise.all(labels.map(labelObj => {
    return new Promise((resolve, reject) => {
      Trello.post(
        "cards",
        {
          name: labelObj.name,
          idList: listId,
          idLabels: labelObj.id,
          pos: "bottom"
        },
        ({id}) => {console.log("createdcard"); resolve(id)},
        () => reject()
      )
    })
  }))
}

const main = async () => {
  const teamId = (await createTeam()).id;

  const quarterNum = 0;
  const boardId = '';
  const goodStuffBoardId = '';

  // Create boards per quarter
  // Create boards per
  for (let weekNum = 0; weekNum < 52; weekNum++) {
    const weekNumTitle = `2021-W${weekNum + 1}`;
    console.log(weekNumTitle);
    if (weekNum % 13 === 0) {
      quarterNum += 1;
      let boardName = `2021Q${quarterNum}`;
      boardId = (await createBoard(boardName, teamId)).id;
      await createTaskStatusList(boardId);
      await createLabels(boardId);
      await addListLabel(boardId);
      goodStuffBoardId = (await createBoard(`${boardName}-GoodStuff`, teamId)).id;
    }

    await createList(weekNum, boardId);
    createList(weekNum, goodStuffBoardId);
  }
}

// export const deleteBoards = () => {
//   debugger;
//   Trello.get(
//     "members/me/boards",
//     (boardList) => {
//       debugger;
//       const IDs = boardList.filter(board => board.name.match(/2021/g)).map(board => board.id)
//       console.log(IDs)
//       IDs.forEach(id => {
//         Trello.delete(
//           `boards/${id}`,
//           (r) => console.log(r),
//           (r) => console.error(r)
//         )
//       });
//     },
//     (e) => console.error(e)
//   );
// }
