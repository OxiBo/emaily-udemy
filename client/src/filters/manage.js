export default (surveys, filter, key) => {
  if (filter === "sort") {
    return surveys.sort((a, b) => {
      if (key === "dateSentAsc") {
        return a.dateSent - b.dateSent;
      } else if (key === "dateSentDesc") {
        return b.dateSent - a.dateSent;
      } else if (key === "lastRespondedAsc") {
        return a.lastResponded - b.lastResponded;
      } else if (key === "lastRespondedDesc") {
        return b.lastResponded - a.lastResponded;
      } else if (key === "yesDesc") {
        return b.yes - a.yes;
      } else if (key === "yesAsc") {
        return a.yes - b.yes;
      } else if (key === "noDesc") {
        return b.no - a.no;
      } else if (key === "noAsc") {
        return a.no - b.no;
      } else if (key === "title") {
        return b.title.localeCompare(a.title); // https://stackoverflow.com/questions/6712034/sort-array-by-firstname-alphabetically-in-javascript
      } else {
        return surveys;
      }
    });
  } else {
    if (key) {
      return surveys.filter(({ title }) => {
        return title.toLowerCase().includes(key.toLowerCase());
      });
    }
    return surveys;
  }
};

// export default (surveys, findByTitle) => {
// //   console.log(surveys)
// //   console.log(findByTitle)
//   if (findByTitle) {
//     return surveys.filter(({ title }) => {
//       return title.toLowerCase().includes(findByTitle);
//     });
//   }
// };

// export default (surveys, sortBy) => {
//     // console.log(surveys)
//     //if (sortBy) {
//       return surveys.sort((a, b) => {
//         if (sortBy === "dateSent") {
//           // console.log(sortBy)
//           return b.dateSent - a.dateSent;
//         } else if (sortBy === "lastResponded") {
//           return b.lastResponded - a.lastResponded;
//         } else if (sortBy === "yesDesc") {
//           //   console.log(a.yes)
//           return b.yes - a.yes;
//         } else if (sortBy === "yesAsc") {
//           //   console.log(a.yes)
//           return a.yes - b.yes;
//         } else if (sortBy === "noDesc") {
//           // console.log(a.no)
//           return b.no - a.no;
//         } else if (sortBy === "noAsc") {
//           // console.log(a.no)
//           return a.no - b.no;
//         } else  if(sortBy === "title"){
//           // console.log(b.title.toLowerCase())
//           return b.title.localeCompare(a.title); // https://stackoverflow.com/questions/6712034/sort-array-by-firstname-alphabetically-in-javascript
//         } else {
//             return surveys
//         }
//       });

//     //}
//     //return surveys;
//   };
