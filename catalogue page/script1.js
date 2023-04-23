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

  // fro the pagination of divs 

  const element = document.querySelector(".pagination ul");
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




