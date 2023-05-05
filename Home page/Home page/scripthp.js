
  // route front pages

  function goToHomePage() {
    window.location.href = "index .html";
  }
  function goToLogin() {
    window.location.href = "../Login.html";
  }
  async function goToCatalogPage() {
    let res = await fetch(`http://127.0.0.1:8000/api/books`, {
      method: 'GET',
    });
    let dataBooks = await res.json();
    sessionStorage.setItem('booksData', JSON.stringify(dataBooks));
    window.location.href = "../catalogue page/index1 .html";
  }
  const CatalogBtn = document.getElementById("catalog-btn");
  CatalogBtn.addEventListener("click", function(event) {
  event.preventDefault();
  goToCatalogPage();
  
})
  

  function gotToSuggestPage() {
    window.location.href = "/suggest.html";
  }
  /////////////////////////////////////////////////////////

  //activate page code

  document.querySelectorAll(".nav-item").forEach((link) => {
    if (link.href === window.location.href) {
      link.setAttribute("aria-current", "page");
    }
  });

  //////////////////////////////////////////////////////////
  // slider new books
  // Code for the first slider
  const slides = document.querySelectorAll(".slide");
  let currentSlideIndex = 0;

  document.getElementById("prev").addEventListener("click", nextSlide);
  document.getElementById("next").addEventListener("click", prevSlide);

  showCurrentSet();

  function nextSlide(event) {
    event.preventDefault();
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showCurrentSet();
  }

  function prevSlide(event) {
    event.preventDefault();
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showCurrentSet();
  }

  function showCurrentSet() {
    const indexes = [
      currentSlideIndex,
      (currentSlideIndex + 1) % slides.length,
      (currentSlideIndex + 2) % slides.length,
      (currentSlideIndex + 3) % slides.length,
    ];
    const slideTransitionDuration = 0.5; // Set the new duration value here

    for (let i = 0; i < slides.length; i++) {
      const slide = slides[i];
      slide.style.transition = "transform 0.5s ease-in-out"; // Add the CSS transition property
      slide.style.transitionDuration = `${slideTransitionDuration}s`; // Set the new duration value
      if (indexes.includes(i)) {
        slide.style.order = indexes.indexOf(i);
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    }
  }

  //slider borrowed books
  // Code for the second slider
  const borrowedSlides = document.querySelectorAll("#borrowed .slide-wrapper");
  let currentBorrowedSlideIndex = 0;

  document
    .getElementById("borrowed-prev-btn")
    .addEventListener("click", nextBorrowedSlide);
  document
    .getElementById("borrowed-next-btn")
    .addEventListener("click", prevBorrowedSlide);

  showCurrentBorrowedSet();

  function nextBorrowedSlide(event) {
    event.preventDefault();
    currentBorrowedSlideIndex =
      (currentBorrowedSlideIndex + 1) % borrowedSlides.length;
    showCurrentBorrowedSet();
  }

  function prevBorrowedSlide(event) {
    event.preventDefault();
    currentBorrowedSlideIndex =
      (currentBorrowedSlideIndex - 1 + borrowedSlides.length) %
      borrowedSlides.length;
    showCurrentBorrowedSet();
  }

  function showCurrentBorrowedSet() {
    const indexes = [
      currentBorrowedSlideIndex,
      (currentBorrowedSlideIndex + 1) % borrowedSlides.length,
      (currentBorrowedSlideIndex + 2) % borrowedSlides.length,
      (currentBorrowedSlideIndex + 3) % borrowedSlides.length,
    ];

    for (let i = 0; i < borrowedSlides.length; i++) {
      const slide = borrowedSlides[i];
      if (indexes.includes(i)) {
        slide.style.order = indexes.indexOf(i);
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    }
  }
  //dropdown search code starts here

  const searchBtn = document.getElementById("mini-searching");
const searchDropdown = document.getElementById("search-dropdown");
const closeBtn = document.getElementById("return-page-exit");
const clearBtn = document.getElementById("clear-search");
const searchInput = document.getElementById("search-input");
const BigsearchInput = document.getElementById("searchbig")
const recentSearches = document.querySelector(".recent-history");
const BigSearchBtn = document.getElementById("big-search")
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
  history = history.slice(0, 5);
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
    addSearchToHistory(searchTerm);
    searchItem.addEventListener("click", () => {
      searchInput.value = searchTerm;
      performSearch(searchTerm);
    });
    recentSearches.appendChild(searchItem);
  });
}
showRecentSearches();

async function performSearch(searchTerm) {
  let res = await fetch(`http://127.0.0.1:8000/api/search?q=${searchTerm}`, {
      method: 'GET',
    }
  );
  let bd = await res.json();
  if (bd.length !== 0){
    window.location.href = `../catalogue page/index1 .html?q=${searchTerm}&results=${JSON.stringify(bd)}`;
    
  }else{
    window.location.href = `../catalogue page/index1 .html?q=${searchTerm}&error=1`;
    
}
}
 
/*const getBooks = async () => {
  const response = await fetch('localhost:8000/api/books');
  const data = await response.json();
  console.log(data);
  data.forEach((datum) => {
    let books = `<div>
    <h1>${datum.title}</h1>
    <p>${datum.description}</p>
    <img src = "${datum.img}">
    </div>`
  })
  const html = document.querySelector(".books");
  let fourBooks = books.split(0,4);
  html.innerHTML = books;  
 }
 btn.addEventListener("click", () => {
    getBooks()
    i+=4;
  })*/


searchBtn.addEventListener("click", function () {
  searchDropdown.classList.add("active");
});

closeBtn.addEventListener("click", function () {
  searchDropdown.classList.remove("active");
});

clearBtn.addEventListener("click", function () {
  searchInput.value = "";
});

searchInput.addEventListener("input", () => {
  showRecentSearches();
});

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const searchTerm = searchInput.value.trim();
    searchInput.value = "";
    if (searchTerm) {
      performSearch(searchTerm);
      addSearchToHistory(searchTerm);
    }
  }
});
BigsearchInput.addEventListener("input", () => {
  showRecentSearches();
});
BigsearchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const searchTerm = BigsearchInput.value.trim();
    BigsearchInput.value = "";
    if (searchTerm) {
      performSearch(searchTerm);
      addSearchToHistory(searchTerm);
    }
  }
});

  // reservation pop ups and Msg Error response for yes :)

  const openModalButtons = document.querySelectorAll("[data-modal-target]");
  const closeModalButtons = document.querySelectorAll("[data-close-button]");
  const reservationBtn = document.getElementById("yes-reservation");
  const overlay = document.getElementById("overlay");
  const modal = document.getElementById("reservation-confirm");
  const MsgBug = document.getElementById("book-not-avblaible");
  const exitMsgBug = document.getElementById("return-page-before");

  openModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = document.querySelector(button.dataset.modalTarget);
      openModal(modal);
    });
  });

  overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".modal.active");
    modals.forEach((modal) => {
      closeModal(modal);
    });
  });

  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".reservation-confirm");
      closeModal(modal);
    });
  });

  function openModal(modal) {
    if (modal == null) return;
    modal.classList.add("active");
    overlay.classList.add("active");
  }

  function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove("active");
    overlay.classList.remove("active");
    MsgBug.classList.remove("active");
  }
  window.addEventListener("click", function (e) {
    if (e.target == overlay) closeModal(modal);
  });
  // for the yes reservation msg error
  reservationBtn.addEventListener("click", function () {
    MsgBug.classList.add("active");
    modal.classList.remove("active");
  });
  exitMsgBug.addEventListener("click", function () {
    MsgBug.classList.remove("active");
    overlay.classList.remove("active");
  });

  // placeholder animation words
  const words = [
    "Search By Title ... ",
    "Search By Author ... ",
    "Search By Category ... ",
  ];
  const searchEl = document.querySelector("#searchbig");
  
  
  let currentWordIndex = 0;

  function changeWord() {
    currentWordIndex++;
    if (currentWordIndex === words.length) {
      currentWordIndex = 0;
    }
    searchEl.setAttribute("placeholder", words[currentWordIndex]);
  }

  setInterval(changeWord, 2000);

 
  