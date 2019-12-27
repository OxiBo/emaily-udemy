export default (surveys, sortBy) => {
  // console.log(surveys)
  //if (sortBy) {
    return surveys.sort((a, b) => {
      if (sortBy === "dateSent") {
        // console.log(sortBy)
        return b.dateSent - a.dateSent;
      } else if (sortBy === "lastResponded") {
        return b.lastResponded - a.lastResponded;
      } else if (sortBy === "yesDesc") {
        //   console.log(a.yes)
        return b.yes - a.yes;
      } else if (sortBy === "yesAsc") {
        //   console.log(a.yes)
        return a.yes - b.yes;
      } else if (sortBy === "noDesc") {
        // console.log(a.no)
        return b.no - a.no;
      } else if (sortBy === "noAsc") {
        // console.log(a.no)
        return a.no - b.no;
      } else  if(sortBy === "title"){
        // console.log(b.title.toLowerCase())
        return b.title.localeCompare(a.title); // https://stackoverflow.com/questions/6712034/sort-array-by-firstname-alphabetically-in-javascript
      } else {
          return surveys
      }
    }); 

  //}
  //return surveys;
};
