// route front pages

function goToHomePage() {
  window.location.href = "../Home page/index.html";
}

function goToHomePage() {
  window.location.href = "../Home page/index .html";
}


const CatalogBtn = document.getElementById("catalog-btn");
CatalogBtn.addEventListener("click", function(event) {
  event.preventDefault();
  async function goToCatalogPage() {
    let res = await fetch(`http://127.0.0.1:8000/api/books`, {
      method: 'GET',
    });
    let dataBooks = await res.json();
    sessionStorage.setItem('booksData', JSON.stringify(dataBooks));
    displayAllBooks();
  }

  function displayAllBooks() {
    const booksData = JSON.parse(sessionStorage.getItem('booksData'));
    let AllbooksContainer = document.querySelector('.sortbooks');
    AllbooksContainer.innerHTML = '';
    let i = -1;
    booksData.forEach((book) => {
      i++;
      let avbBook;
      if (book.available) {
        avbBook = "available";
      } else {
        avbBook = "not available";
      }
      let BookContainer = document.createElement('div');
      BookContainer.classList.add('bookdescription');
      BookContainer.innerHTML = `
        <img src="https://products-images.di-static.com/image/jessie-inchauspe-glucose-goddess/9782221269244-475x500-2.webp" id="bookimg" class="bookimg" />
        <div class="bookinformations">
          <div id="book-title">
            <p id="booktitle">${book.title}</p>
          </div>
          <div id="bookAuthor-bookCategory">
            <div id="book-det">By :</div>
            <div id="book-option">Author's name</div>
            <div id="book-det">In :</div>
            <div id="book-option" class="categoryOption">${book.tags}</div>
          </div>
          <div class="book-descriptiondiv">
            <div class="bookdescriptiontitle"><p>Description:</p></div>
            <div id="book-description">
              <p>${book.description}</p>
              <span id="span"></span>
            </div>
          </div>
          <div id="bookSize">
            <p id="book-det">Size :</p>
            <p id="book-option">${book.nb_pages} pages</p>
          </div>
          <div id="book-availability">
            <p id="book-det">Availability :</p>
            <p class="${book.available}">${avbBook}</p>
          </div>
          <div class="reserveanddetails">
            <a id="reserve" data-modal-target="#reservation-confirm">Reserve</a>
            <a href="../book deatils page/index3 .html" id="bookdetails">
              See More Info
              <img src="ell/Vector.svg" id="seemorevectore" />
            </a>
          </div>
        </div>
      `;
      AllbooksContainer.appendChild(BookContainer);
    });
  }

  goToCatalogPage();
});

if (window.location.href.includes("catalogue%20page/index1%20.html")) {
  displayAllBooks();
}


function goToLogin() {
  window.location.href = "../Login.html";
}

function goToContactPage() {
  window.location.href = "/contact.html";
}
function gotToSuggestPage() {
  window.location.href = "/suggest.html";
}
/////////////////////////////////////////////////////////

//for page activation
document.querySelectorAll('.nav-item').forEach(link => {
    if(link.href === window.location.href){
      link.setAttribute('aria-current', 'page')
    }
  })
  // script for show more option 
  // div1
  document .getElementById("span").addEventListener("click", function () {
    document.getElementById("book-description") .classList.toggle("active");
  });
  //div 2
  document .getElementById("span1").addEventListener("click", function () {
    document.getElementById("book-description1") .classList.toggle("active");
  });
  // div 3
  document .getElementById("span2").addEventListener("click", function () {
    document.getElementById("book-description2") .classList.toggle("active");
  });
  // div 4
  document .getElementById("span3").addEventListener("click", function () {
    document.getElementById("book-description3") .classList.toggle("active");
  });

 

// input styling start here 
///////////////
// rating inputs
/////////////// 
let ratingInputs = document.querySelectorAll(".rating input[type='radio']");

// add a click event listener to each radio button
for (let i = 0; i < ratingInputs.length; i++) {
  ratingInputs[i].addEventListener("click", function() {
    // remove color from all labels
    let labels = document.querySelectorAll(".rating-label");
    for (let j = 0; j < labels.length; j++) {
      labels[j].style.setProperty("--bg-color", "transparent");
    }
    
    // select the corresponding label element for this radio button
    let label = ratingInputs[i].nextElementSibling;
    // change the background color of the ::before pseudo-element of the label
    label.style.setProperty("--bg-color", "#F1413E");
  });
}

// category inputs styling 
let categoryInputs = document.querySelectorAll(".category input[type='radio']");

// add a click event listener to each radio button
for (let i = 0; i < categoryInputs.length; i++) {
  categoryInputs[i].addEventListener("click", function() {
    // remove color from all labels
    let labels = document.querySelectorAll(".category label");
    for (let j = 0; j < labels.length; j++) {
      labels[j].style.setProperty("--bg-color", "transparent");
    }
    
    // select the corresponding label element for this radio button
    let label = categoryInputs[i].nextElementSibling;
    // change the background color of the ::before pseudo-element of the label
    label.style.setProperty("--bg-color", "#F1413E");
  });
}
// size inputs 
let sizeInputs = document.querySelectorAll(".size input[type='radio']");

// add a click event listener to each radio button
for (let i = 0; i < sizeInputs.length; i++) {
  sizeInputs[i].addEventListener("click", function() {
    // remove color from all labels
    let labels = document.querySelectorAll(".size label");
    for (let j = 0; j < labels.length; j++) {
      labels[j].style.setProperty("--bg-color", "transparent");
    }
    
    // select the corresponding label element for this radio button
    let label = sizeInputs[i].nextElementSibling;
    // change the background color of the ::before pseudo-element of the label
    label.style.setProperty("--bg-color", "#F1413E");
  });
}
// availability inputs 
let availabilityInputs = document.querySelectorAll(".availability input[type='radio']");

// add a click event listener to each radio button
for (let i = 0; i < availabilityInputs.length; i++) {
  availabilityInputs[i].addEventListener("click", function() {
    // remove color from all labels
    let labels = document.querySelectorAll(".availability label");
    for (let j = 0; j < labels.length; j++) {
      labels[j].style.setProperty("--bg-color", "transparent");
    }
    
    // select the corresponding label element for this radio button
    let label = availabilityInputs[i].nextElementSibling;
    // change the background color of the ::before pseudo-element of the label
    label.style.setProperty("--bg-color", "#F1413E");
  });
}

// drop down selection styling start here 
const dropdownBtn = document.getElementById('dropdownbtn');
const newdrop = document.getElementById('sortoptions');
const dropdownContent = document.querySelector('#sortoptions .dropdown-content');
const dropOptionContent = document.getElementById('dropoptioncontent');
const dropOptionText = document.getElementsByClassName('option-text')[0];

newdrop.addEventListener('click', () => {
  newdrop.classList.toggle('active');
  dropdownContent.classList.toggle('show');
  dropdownBtn.classList.toggle('active');
});

const dropdownOptions = document.querySelectorAll('#sortoptions .dropdown-content li');

dropdownOptions.forEach((option) => {
  option.addEventListener('click', () => {
    const selectedValue = option.getAttribute('data-value');
    const selectedText = option.textContent;
    dropOptionContent.querySelector('p').textContent = selectedText;
    dropdownBtn.setAttribute('data-value', selectedValue);
    dropdownBtn.classList.remove('active');
    dropdownOptions.forEach((option) => option.classList.remove('selected'));
    option.classList.add('selected');
    
  });
});
///////////////////////////////////////////

// search dropDown start here 
const searchBtn = document.getElementById("mini-searching");
const searchDropdown = document.getElementById("search-dropdown");
const closeBtn = document.getElementById("return-page-exit");
const clearBtn = document.getElementById("clear-search");
const searchInput = document.getElementById("search-input");
const recentSearches = document.querySelector(".recent-history");

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
    window.location.href = `../catalogue page/index1.html?q=${searchTerm}&results=${JSON.stringify(bd)}`;
  }else{
    let resultSpace = document.querySelector('.sortbooks');
    resultSpace.innerHTML = `
      <div class="sortbooks" style="padding-top:19%">
        <p>No results found for "${searchTerm}" in our website :( </p>
      </div>
    `;
  }
}
 


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
    searchDropdown.classList.remove("active");
    if (searchTerm) {
      performSearch(searchTerm);
      addSearchToHistory(searchTerm);
    }
    
  }
  
});



const urlSearchParams = new URLSearchParams(window.location.search);
const searchTerm = urlSearchParams.get('q');
let results;
try {
  results = JSON.parse(urlSearchParams.get('results'));
} catch (error) {
  console.error('Error parsing results JSON:', error);
}
const error = urlSearchParams.get('error');

// Display the search results or error message
if (results) {
  let resultsContainer = document.querySelector('.sortbooks');
  resultsContainer.innerHTML = '';
  
  results.forEach((datum) => {
    if (datum.available) {
      avbBook = "available";
    } else {
      avbBook = "not available";
    }
    let resultItem = document.createElement('div');
    resultItem.classList.add('bookdescription');
    resultItem.innerHTML = `
      <img src="https://products-images.di-static.com/image/jessie-inchauspe-glucose-goddess/9782221269244-475x500-2.webp" id="bookimg" class="bookimg" />
      <div class="bookinformations">
        <div id="book-title">
          <p id="booktitle">${datum.title}</p>
        </div>
        <div id="bookAuthor-bookCategory">
                <div id="book-det">By :</div>
              <div id="book-option">Author's name</div>
              <div id="book-det">In :</div>
              <div id="book-option" class="categoryOption">${datum.tags}</div>
         </div>
        <div class="book-descriptiondiv">
          <div class="bookdescriptiontitle"><p>Description:</p></div>
          <div id="book-description">
            <p>${datum.description}</p>
            <span id="span"></span>
          </div>
        </div>
        <div id="bookSize">
          <p id="book-det">Size :</p>
          <p id="book-option">${datum.nb_pages}   pages</p>
        </div>
        <div id="book-availability">
          <p id="book-det">Availability :</p>
          <p  class="${datum.available}">${avbBook}</p>
        </div>
        <div class="reserveanddetails">
        <a  id="reserve" data-modal-target="#reservation-confirm">Reserve</a>
        <a href="../book deatils page/index3 .html" id="bookdetails"
          >See More Info
          <img src="ell/Vector.svg" id="seemorevectore" /></a
        >
              </div>
      </div>
    `;
    resultsContainer.appendChild(resultItem);
  });
} else if (error) {
  let resultSpace = document.querySelector('.sortbooks');
  resultSpace.innerHTML = `
    <div class="sortbooks" style="padding-top:19%">
      <p>No results found for "${searchTerm}" in our website :( </p>
    </div>
  `;
}

//reserver
// reservetion a book and Error msg request 
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const reservationBtn = document.getElementById('yes-reservation')
const overlay = document.getElementById('overlay')
const modal =document.getElementById('reservation-confirm');
const MsgBug = document.getElementById('book-not-avblaible')
const exitMsgBug =document.getElementById('return-page-before')



openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.reservation-confirm')
    closeModal(modal)
    
  })
})

function openModal(modal) {
  if (modal == null) return
  console.log("hi");
  modal.classList.add('active')
  overlay.classList.add('active')
}


function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
  MsgBug.classList.remove('active')
}
window.addEventListener('click', function(e){
    if(e.target == overlay)
    closeModal(modal);
}
)
// for the yes reservation msg error 
reservationBtn.addEventListener('click', function(event) {
  event.preventDefault();
  MsgBug.classList.add('active');
  modal.classList.remove('active')
})
exitMsgBug.addEventListener('click', function(event) {
  event.preventDefault();
  MsgBug.classList.remove('active');
  overlay.classList.remove('active')
})
const reserveButton = document.getElementById('reserve')
reserveButton.addEventListener('click', () => {
  openModal(modal)
});
//////////////////////////////////////////////////////////////

// display All the books in Catalog page

//////////////from the home page and the other pages 
 //////// display fourbooks function 
 /*function displayAllBooks(pageNumber, books) {
  const startIndex = pageNumber * 4;
  const endIndex = startIndex + 4;
  const booksSubset = books.slice(startIndex, endIndex);

  const bookContainer = document.querySelector('.sortbooks');
  bookContainer.innerHTML = '';
  
  booksSubset.forEach((book) => {
    let bookSpec = document.createElement('div');
    bookSpec.classList.add('bookdescription');
    bookSpec.innerHTML = `
      <img src="https://products-images.di-static.com/image/jessie-inchauspe-glucose-goddess/9782221269244-475x500-2.webp" id="bookimg" class="bookimg" />
      <div class="bookinformations">
        <div id="book-title">
          <p id="booktitle">${datum.title}</p>
        </div>
        <div id="bookAuthor-bookCategory">
                <div id="book-det">By :</div>
              <div id="book-option">Author's name</div>
              <div id="book-det">In :</div>
              <div id="book-option" class="categoryOption">${datum.tags}</div>
         </div>
        <div class="book-descriptiondiv">
          <div class="bookdescriptiontitle"><p>Description:</p></div>
          <div id="book-description">
            <p>${datum.description}</p>
            <span id="span"></span>
          </div>
        </div>
        <div id="bookSize">
          <p id="book-det">Size :</p>
          <p id="book-option">${datum.nb_pages}   pages</p>
        </div>
        <div id="book-availability">
          <p id="book-det">Availability :</p>
          <p  class="${datum.available}">${avbBook}</p>
        </div>
        <div class="reserveanddetails">
        <a  id="reserve" data-modal-target="#reservation-confirm">Reserve</a>
        <a href="../book deatils page/index3 .html" id="bookdetails"
          >See More Info
          <img src="ell/Vector.svg" id="seemorevectore" /></a
        >
              </div>
      </div>
    `;
;
    bookContainer.appendChild(bookSpec);
  })
}

const booksData = JSON.parse(sessionStorage.getItem('booksData'));

displayAllBooks(0, booksData);
*/
 // for the pagination of divs 

 /*const element = document.querySelector(".pagination ul");
 let totalPages = 25;
 let page = 10;
 element.innerHTML = createPagination(totalPages, page);
 function createPagination(totalPages, page){
   let liTag = '';
   let active;
   let beforePage = page - 1;
   let afterPage = page + 1;
   if(page > 1){ 
     liTag += `<li class="btn prev" onclick="createPagination(totalPages, ${page - 1})"><span><img src="ell/ScrollL.svg" id="srollpic" ></span></li>`;
   }
   if(page > 2){ 
     liTag += `<li class="first numb" onclick="createPagination(totalPages, 1)"><span>1</span></li>`;
     if(page > 3){ 
       liTag += `<li class="dots"><span>...</span></li>`;
     }
   }
   
   if (page == totalPages) {
     beforePage = beforePage - 2;
   } else if (page == totalPages - 1) {
     beforePage = beforePage - 1;
   }
   if (page == 1) {
     afterPage = afterPage + 2;
   } else if (page == 2) {
     afterPage  = afterPage + 1;
   }
   for (var plength = beforePage; plength <= afterPage; plength++) {
     if (plength > totalPages) { 
       continue;
     }
     if (plength == 0) { 
       plength = plength + 1;
     }
     if(page == plength){ 
       active = "active";
     }else{ 
       active = "";
     }
     liTag += `<li class="numb ${active}" onclick="createPagination(totalPages, ${plength})"><span>${plength}</span></li>`;
   }
   if(page < totalPages - 1){ 
     if(page < totalPages - 2){ 
       liTag += `<li class="dots"><span>...</span></li>`;
     }
     liTag += `<li class="last numb" onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
   }
   if (page < totalPages) { 
     liTag += `<li class="btn next" onclick="createPagination(totalPages, ${page + 1})"><span><img src="ell/ScrollR.svg" id="srollpic"></span></li>`;
   }
   element.innerHTML = liTag; 
   return liTag; 
 }

 const postsPerPage = 4;
  // You should just customize the 'array'
  // The next line is a react function
  const [currentPage, setCurrentPage] = useState(1);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts = array.slice(firstPostIndex, lastPostIndex);

  // for buttons to deactivate them
  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = lastPostIndex >= array.length;*/
  
