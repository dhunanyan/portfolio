// import jsonfile from 'jsonfile';
// import moment from 'moment';
// import simpleGit from 'simple-git';
// import random from 'random';

// const path = './contributions/data.json';

// const markCommit = (x, y, n) => {
//   const date = moment()
//     .subtract(3, 'y')
//     .add(1, 'd')
//     .add(x, 'w')
//     .add(y, 'd')
//     .format();

//   const data = {
//     date: date,
//   };

//   jsonfile.writeFile(path, data, () => {
//     simpleGit()
//       .add([path])
//       .commit(date, { '--date': date }, markCommit.bind(this, --n))
//       .push();
//   });
// };

// const makeCommits = (n) => {
//   if (n === 0) return simpleGit().push();
//   const x = random.int(0, 54);
//   const y = random.int(0, 6);
//   const date = moment()
//     .subtract(1, 'y')
//     .add(1, 'd')
//     .add(x, 'w')
//     .add(y, 'd')
//     .format();

//   const data = {
//     date: date,
//   };
//   console.log(date);
//   jsonfile.writeFile(path, data, () => {
//     simpleGit()
//       .add([path])
//       .commit(date, { '--date': date }, makeCommits.bind(this, --n));
//   });
// };

// markCommit(0, 1, 100);
// markCommit(0, 2, 90);
// markCommit(0, 3, 100);
// markCommit(0, 4, 100);
// markCommit(0, 9, 100);
// markCommit(0, 10, 100);
// markCommit(0, 11, 100);
// markCommit(0, 12, 100);
// markCommit(0, 17, 100);
// markCommit(0, 18, 100);
// markCommit(0, 20, 100);
// markCommit(0, 21, 100);
// markCommit(0, 26, 100);
// markCommit(0, 27, 100);
// markCommit(0, 29, 100);
// markCommit(0, 30, 100);
// markCommit(0, 34, 90);
// markCommit(0, 35, 90);
// markCommit(0, 36, 84);
// markCommit(0, 39, 100);
// markCommit(0, 40, 100);
// markCommit(0, 41, 100);
// markCommit(0, 42, 100);
// markCommit(0, 43, 84);
// markCommit(0, 47, 100);
// markCommit(0, 48, 100);
// markCommit(0, 49, 84);
// markCommit(0, 50, 90);

// markCommit(1, 0, 100);
// markCommit(1, 1, 100);
// markCommit(1, 4, 90);
// markCommit(1, 5, 100);
// markCommit(1, 8, 100);
// markCommit(1, 12, 84);
// markCommit(1, 13, 100);
// markCommit(1, 16, 100);
// markCommit(1, 17, 100);
// markCommit(1, 18, 100);
// markCommit(1, 19, 100);
// markCommit(1, 20, 100);
// markCommit(1, 21, 100);
// markCommit(1, 22, 84);
// markCommit(1, 25, 100);
// markCommit(1, 26, 100);
// markCommit(1, 27, 100);
// markCommit(1, 28, 100);
// markCommit(1, 29, 100);
// markCommit(1, 30, 100);
// markCommit(1, 31, 84);
// markCommit(1, 35, 100);
// markCommit(1, 39, 100);
// markCommit(1, 41, 100);
// markCommit(1, 43, 90);
// markCommit(1, 46, 100);
// markCommit(1, 47, 100);
// markCommit(1, 51, 84);

// markCommit(2, 0, 100);
// markCommit(2, 5, 100);
// markCommit(2, 8, 100);
// markCommit(2, 13, 90);
// markCommit(2, 16, 100);
// markCommit(2, 18, 100);
// markCommit(2, 19, 84);
// markCommit(2, 20, 90);
// markCommit(2, 22, 100);
// markCommit(2, 25, 100);
// markCommit(2, 27, 100);
// markCommit(2, 28, 84);
// markCommit(2, 29, 90);
// markCommit(2, 31, 90);
// markCommit(2, 35, 100);
// markCommit(2, 39, 84);
// markCommit(2, 41, 100);
// markCommit(2, 43, 90);
// markCommit(2, 46, 100);

// markCommit(3, 0, 90);
// markCommit(3, 9, 100);
// markCommit(3, 13, 90);
// markCommit(3, 16, 100);
// markCommit(3, 19, 90);
// markCommit(3, 22, 90);
// markCommit(3, 25, 100);
// markCommit(3, 28, 90);
// markCommit(3, 31, 90);
// markCommit(3, 35, 100);
// markCommit(3, 38, 100);
// markCommit(3, 41, 90);
// markCommit(3, 44, 90);
// markCommit(3, 46, 84);
// markCommit(3, 47, 100);
// markCommit(3, 48, 100);
// markCommit(3, 49, 84);
// markCommit(3, 50, 90);

// markCommit(4, 0, 90);
// markCommit(4, 8, 100);
// markCommit(4, 9, 100);
// markCommit(4, 13, 90);
// markCommit(4, 16, 100);
// markCommit(4, 19, 90);
// markCommit(4, 22, 90);
// markCommit(4, 25, 100);
// markCommit(4, 28, 90);
// markCommit(4, 31, 90);
// markCommit(4, 35, 100);
// markCommit(4, 41, 84);
// markCommit(4, 51, 90);

// markCommit(5, 0, 100);
// markCommit(5, 1, 100);
// markCommit(5, 4, 100);
// markCommit(5, 5, 90);
// markCommit(5, 8, 100);
// markCommit(5, 9, 90);
// markCommit(5, 13, 90);
// markCommit(5, 16, 100);
// markCommit(5, 22, 90);
// markCommit(5, 25, 100);
// markCommit(5, 31, 90);
// markCommit(5, 35, 100);
// markCommit(5, 41, 90);
// markCommit(5, 46, 100);
// markCommit(5, 50, 84);
// markCommit(5, 51, 90);

// markCommit(6, 1, 100);
// markCommit(6, 2, 100);
// markCommit(6, 3, 90);
// markCommit(6, 4, 100);
// markCommit(6, 9, 84);
// markCommit(6, 10, 100);
// markCommit(6, 11, 90);
// markCommit(6, 12, 90);
// markCommit(6, 16, 100);
// markCommit(6, 22, 90);
// markCommit(6, 25, 100);
// markCommit(6, 31, 90);
// markCommit(6, 34, 100);
// markCommit(6, 35, 90);
// markCommit(6, 36, 90);
// markCommit(6, 41, 90);
// markCommit(6, 46, 100);
// markCommit(6, 47, 100);
// markCommit(6, 48, 100);
// markCommit(6, 49, 84);
// markCommit(6, 50, 90);
