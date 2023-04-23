// the drop down user profile code start here

const dropUserBtn = document.getElementById("User-Access");
const iconrotate = document.getElementById("dropUserBtn");
const dropUserAccess = document.getElementById("drop-userAccess");

// Set initial state of dropUserAccess to visible in CSS, then hide with JavaScript
dropUserAccess.style.visibility = "visible";
dropUserAccess.style.display = "none";

function toggleMenu() {
  if (dropUserAccess.style.display === "none") {
    dropUserAccess.style.display = "block";
    iconrotate.style.transform = "rotate(180deg)";
  } else {
    dropUserAccess.style.display = "none";
    iconrotate.style.transform = "rotate(0deg)";
  }
}

dropUserBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleMenu();
});

document.addEventListener("click", function (event) {
  if (
    !dropUserAccess.contains(event.target) &&
    !dropUserBtn.contains(event.target)
  ) {
    dropUserAccess.style.display = "none";
    iconrotate.style.transform = "rotate(0deg)";
  }
});


// here start changing picture profile
const changePicBtn = document.getElementById("change-pic-btn");
const profilePic = document.querySelector(".profile-picture");

changePicBtn.addEventListener("click", () => {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";

  input.addEventListener("change", () => {
    const reader = new FileReader();
    reader.readAsDataURL(input.files[0]);
    reader.onload = () => {
      profilePic.src = reader.result;
    };
  });

  input.click();
});

// recent review section starts here

const comments = document.querySelector(".personal-reviewHistory");
const viewMoreBtn = document.getElementById("view-more");

let visibleComments = 2;

viewMoreBtn.addEventListener("click", () => {
  visibleComments += 10;
  comments.style.overflowY = "scroll";
  showComments();
  hideViewMoreBtnIfNeeded();
});

function showComments() {
  const allComments = comments.querySelectorAll(".book-reviewpersonal");
  let lastVisibleCommentIndex = visibleComments - 1;
  if (lastVisibleCommentIndex >= allComments.length) {
    lastVisibleCommentIndex = allComments.length - 1;
  }
  allComments.forEach((comment, index) => {
    if (index === allComments.length - 1) {
      if (lastVisibleCommentIndex === allComments.length - 1) {
        comment.classList.remove("last-comment-blur");
      } else {
        comment.classList.add("last-comment-blur");
      }
      if (index <= lastVisibleCommentIndex) {
        comment.classList.remove("last-comment-blur");
      }
    }
    if (index <= lastVisibleCommentIndex) {
      comment.style.display = "flex";
      if (index === lastVisibleCommentIndex) {
        comment.classList.add("last-visible-comment");
      } else {
        comment.classList.remove("last-visible-comment");
      }
    } else {
      comment.style.display = "none";
      comment.classList.remove("last-visible-comment");
      if (
        index === allComments.length - 1 &&
        lastVisibleCommentIndex < allComments.length - 1
      ) {
        comment.classList.add("last-comment-blur");
      }
    }
  });
}

function hideViewMoreBtnIfNeeded() {
  const allComments = comments.querySelectorAll(".book-reviewpersonal");
  const allCommentsVisible = allComments.length <= visibleComments;
  if (allCommentsVisible) {
    viewMoreBtn.style.display = "none";
    const lastComment = allComments[allComments.length - 1];
    lastComment.classList.remove("last-comment-blur");
    lastComment.classList.remove("last-visible-comment");
  } else {
    viewMoreBtn.style.display = "flex";
  }
}

showComments();
hideViewMoreBtnIfNeeded();

// the user borrowed books section scrollling

const books = document.querySelector(".myborrowedbooks");
const viewMorebooksBtn = document.getElementById("view-more-borrowed");
let visiblebooks = 2;

function showBooks() {
  const allBooks = books.querySelectorAll(".bookborrowed");
  let lastVisibleBookIndex = visiblebooks - 1;
  if (lastVisibleBookIndex >= allBooks.length) {
    lastVisibleBookIndex = allBooks.length - 1;
  }
  allBooks.forEach((book, index) => {
    if (index === allBooks.length - 1) {
      if (lastVisibleBookIndex === allBooks.length - 1) {
        book.classList.remove("last-book-blur");
      } else {
        book.classList.add("last-book-blur");
      }
      if (index <= lastVisibleBookIndex) {
        book.classList.remove("last-book-blur");
      }
    }
    if (index <= lastVisibleBookIndex) {
      book.style.display = "flex";
      if (index === lastVisibleBookIndex) {
        book.classList.add("last-visible-book");
      } else {
        book.classList.remove("last-visible-book");
      }
    } else {
      book.style.display = "none";
      book.classList.remove("last-visible-book");
      if (
        index === allBooks.length - 1 &&
        lastVisibleBookIndex < allBooks.length - 1
      ) {
        book.classList.add("last-book-blur");
      }
    }
  });
}

function hideViewMorebooksBtnIfNeeded() {
  const allBooks = books.querySelectorAll(".bookborrowed");
  const allBooksVisible = allBooks.length <= visiblebooks;
  if (allBooksVisible) {
    viewMorebooksBtn.style.display = "none";
    const lastBook = allBooks[allBooks.length - 1];
    lastBook.classList.remove("last-book-blur");
    lastBook.classList.remove("last-visible-book");
  } else {
    viewMorebooksBtn.style.display = "flex";
  }
}

viewMorebooksBtn.addEventListener("click", () => {
  visiblebooks += 10;
  books.style.overflowY = "scroll";
  showBooks();
  hideViewMorebooksBtnIfNeeded();
});

showBooks();
hideViewMorebooksBtnIfNeeded();



//drop search down code start here 
const searchBtn = document.getElementById('search');
const searchDropdown = document.getElementById('search-dropdown');
const closeBtn = document.getElementById('return-page-exit');
const clearBtn = document.getElementById('clear-search');
const searchInput = document.getElementById('search-input');

searchBtn.addEventListener('click', function() {
    searchDropdown.classList.add('active');
});

closeBtn.addEventListener('click', function() {
    searchDropdown.classList.remove('active');
});

clearBtn.addEventListener('click', function() {
    searchInput.value = "";
});
const searchButton = document.getElementById("search-btttn");
const recentSearches = document.querySelector(".recent-history");
const searchIinput = document.getElementById("search-input");

let history = JSON.parse(localStorage.getItem("searchHistory")) || [];
function saveSearchHistory() {
  localStorage.setItem("searchHistory", JSON.stringify(history));
}

function addSearchToHistory(searchTerm) {
  const index = history.indexOf(searchTerm);
  if (index !== -1) {
    history.splice(index, 1);
  }
  history.unshift(searchTerm);
  history = history.slice(0, 10);
  saveSearchHistory();
}

function showRecentSearches() {
  recentSearches.innerHTML = "";
  history.forEach((searchTerm) => {
    const searchItem = document.createElement("div");
    searchItem.classList.add("recent-search");
    searchItem.innerHTML = `
      <i class="fa-solid fa-magnifying-glass"></i>
      <p>${searchTerm}</p>
    `;
    searchItem.addEventListener("click", () => {
      searchIinput.value = searchTerm;
      performSearch(searchTerm);
    });
    recentSearches.appendChild(searchItem);
  });
}

function performSearch(searchTerm) {
  addSearchToHistory(searchTerm);
  console.log(`Performing search for "${searchTerm}"...`);
  // TODO: Implement the search functionality using the searchTerm
}

// Add event listener for the "click" event to the search button
searchButton.addEventListener("click", () => {
  const searchTerm = searchIinput.value.trim();
  if (searchTerm) {
    performSearch(searchTerm);
  }
});

// Add event listener for the "input" event to the search input field
searchIinput.addEventListener("input", () => {
  if (!searchIinput.value.trim()) {
    showRecentSearches();
  }
});

// Add event listener for the "keydown" event to the search input field
searchIinput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const searchTerm = searchIinput.value.trim();
    if (searchTerm) {
      performSearch(searchTerm);
    }
  }
});

showRecentSearches();
console.log(localStorage.getItem("searchHistory"));
// profile user fetch

  fetch('https://github.com/iliees/EstinBiblio/blob/main/users/models.py')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("hello"));