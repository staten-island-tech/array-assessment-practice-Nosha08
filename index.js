const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
    genre: ["fantasy", "fiction"],
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
    genre: ["fantasy", , "fiction"],
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
    genre: ["historical", "non-fiction"],
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
    genre: ["historical", "fiction"],
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
    genre: ["fiction"],
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
    genre: ["fiction"],
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
    genre: ["historical", "fiction"],
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
    genre: ["womens", "historical", "fiction"],
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];

//Array of authors and the book they wrote
//"--- wrote --- in ---"

//Sort books from oldest to most recent

//sort books alphabetically

//Find who wrote War and Peace

//how many books were written before 1900?

//was there at least one book published within the last 100 years?

//was every book published within the last 100 years?

//print a list of books that "includes" the genre historical

//#1
books.forEach((x) => console.log(`${x.authorFirst} ${x.authorLast} wrote ${x.name}`))

//#2
const dates = []
const names = []
books.forEach((x) => {
  dates.push(x.publishDate)
})

dates.sort()

dates.forEach((y) => {
  books.forEach((x) => {
    if (y === x.publishDate) {
      names.push(x.name + ' - ' + y)
    }
  })
})


console.log(names)

//#3
console.log(titles.sort())

//#4
books.forEach((x) => {
  if (x.name === 'War and Peace') {
    console.log(x.authorFirst + ' ' + x.authorLast)
  }
})

//#5
const old = books.filter((x) => x.publishDate < 1900)
console.log(old.length)

//#6
const recent = books.filter((x) => x.publishDate > 1923)
if (recent.length > 0) {
  console.log(recent.length + ' recent books')
}

//#7
const oldNew = books.filter((x) => x.publishDate > 1932)
if (oldNew.length === books.length) {
  console.log(true)
} else {
  console.log(false)
}

//#8
const history = []
books.forEach((x) => {
  x.genre.filter((y) =>  { if (y === 'historical') {
    history.push(x.name)
  }})
})
console.log(history)