// export function bugAdded(description) {
//   return {
//     type: "BUD_ADDED",
//     payload: {
//       description: "Bug1"
//     }
//   }
// }

export const bugAdded = description => ({
  type: "BUD_ADDED",
  payload: {
    description
  }
})

export const bugRemoved = Id => ({
  type: "BUD_REMOVED",
  payload: {
    Id
  }
})

export const bugResolved = Id => ({
  type: "BUD_RESOLVED",
  payload: {
    Id
  }
})