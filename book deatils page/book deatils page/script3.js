//for the page activation 
document.querySelectorAll('.nav-item').forEach(link => {
    if(link.href === window.location.href){
      link.setAttribute('aria-current', 'page')
    }
  })

// reservation pop ups and Msg Error response for yes :)
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
reservationBtn.addEventListener('click', function() {
  MsgBug.classList.add('active');
  modal.classList.remove('active')
})
exitMsgBug.addEventListener('click', function() {
  MsgBug.classList.remove('active');
  overlay.classList.remove('active')
})
// comment section scrolling code start here 
const comments = document.querySelector('.comments');
const viewMoreBtn = document.querySelector('.view-more-comments');

let visibleComments = 2;

viewMoreBtn.addEventListener("click", () => {
  visibleComments += 10;
  comments.style.overflowY = "scroll";
  showComments();
  hideViewMoreBtnIfNeeded();
});
function showComments() {
  const allComments = comments.querySelectorAll('.comment');
  let lastVisibleCommentIndex = visibleComments - 1;
  if (lastVisibleCommentIndex >= allComments.length) {
    lastVisibleCommentIndex = allComments.length - 1;
  }
  allComments.forEach((comment, index) => {
    if (index === allComments.length - 1) {
      if (lastVisibleCommentIndex === allComments.length - 1) {
        comment.classList.remove('last-comment-blur');
      } else {
        comment.classList.add('last-comment-blur');
      }
      if (index <= lastVisibleCommentIndex) {
        comment.classList.remove('last-comment-blur');
      }
    }
    if (index <= lastVisibleCommentIndex) {
      comment.style.display = 'flex';
      if (index === lastVisibleCommentIndex) {
        comment.classList.add('last-visible-comment');
      } else {
        comment.classList.remove('last-visible-comment');
      }
    } else {
      comment.style.display = 'none';
      comment.classList.remove('last-visible-comment');
      if (index === allComments.length - 1 && lastVisibleCommentIndex < allComments.length - 1) {
        comment.classList.add('last-comment-blur');
      }
    }
  });
}


function hideViewMoreBtnIfNeeded() {
  const allComments = comments.querySelectorAll('.comment');
  const allCommentsVisible = allComments.length <= visibleComments;
  if (allCommentsVisible) {
    viewMoreBtn.style.display = 'none';
    const lastComment = allComments[allComments.length - 1];
    lastComment.classList.remove('last-comment-blur');
    lastComment.classList.remove('last-visible-comment');
  } else {
    viewMoreBtn.style.display = 'flex';
  }
}

showComments();
hideViewMoreBtnIfNeeded();
//rating system waiting  the  leave review button  to be clicked
const leavereviewBtn = document.getElementById('leave-rera')
const ratbackround = document.getElementById('ratback')
const reviewmodal =document.getElementById('rat-book');
const exitreviwpage =document.getElementById('return-comment-form')


leavereviewBtn.addEventListener('click', function() {
  ratbackround.classList.add('active');
  reviewmodal.classList.add('active');
})
exitreviwpage.addEventListener('click', function() {
  ratbackround.classList.remove('active');
  reviewmodal.classList.remove('active')
})



// rating and review code starting here :)
let stars = document.querySelectorAll(".ratings span");
let books = document.querySelectorAll(".ratings");
let starsModified = document.querySelectorAll(".edit-ratings span");
let booksModifiedID = document.querySelectorAll(".edit-ratings");
let ratings = [];

for(let star of stars){
   star.addEventListener("click", function(){
      let children = star.parentElement.children;
      for(let child of children){
         if(child.getAttribute("data-clicked")){
            child.removeAttribute("data-clicked");
         }
      }
      
      this.setAttribute("data-clicked","true");
      let rating = this.dataset.rating;
      let bookId = this.parentElement.dataset.bookid;
      let data = {
         "rating": rating,
         "book-id": bookId,
      }
      ratings = ratings.filter(rating => rating["book-id"] !== bookId); 
      ratings.push(data);
      localStorage.setItem("rating", JSON.stringify(ratings));
   });
}

if(localStorage.getItem("rating")){
   ratings = JSON.parse(localStorage.getItem("rating"));
   for(let rating of ratings){
      for(let book of books){
         if(book.dataset.bookid == rating["book-id"]){
            let reverse = Array.from(book.children).reverse();
            let index = parseInt(rating["rating"]) - 1;
            reverse[index].setAttribute("data-clicked", "true");
         }
      }
   }
}
for(let star of starsModified){
  star.addEventListener("click", function(){
     let children = star.parentElement.children;
     for(let child of children){
        if(child.getAttribute("data-clicked")){
           child.removeAttribute("data-clicked");
        }
     }
     
     this.setAttribute("data-clicked","true");
     let rating = this.dataset.rating;
     let bookId = this.parentElement.dataset.bookid;
     let data = {
        "rating": rating,
        "book-id": bookId,
     }
     ratings = ratings.filter(rating => rating["book-id"] !== bookId); 
     ratings.push(data);
     localStorage.setItem("rating", JSON.stringify(ratings));
  });
}

if(localStorage.getItem("rating")){
  ratings = JSON.parse(localStorage.getItem("rating"));
  for(let rating of ratings){
     for(let book of booksModifiedID){
        if(book.dataset.bookid == rating["book-id"]){
           let reverse = Array.from(book.children).reverse();
           let index = parseInt(rating["rating"]) - 1;
           reverse[index].setAttribute("data-clicked", "true");
        }
     }
  }
}


   // edit and delet comment drop down 
   
   const butnedit = document.getElementById("edit-comment");
   const div = document.getElementById("drop-editdelet-Com");
   
   butnedit.addEventListener('click', function() {
     if(div.style.display === "flex"){
       div.style.display = "none";
     } else {
       div.style.display = "flex";
     }
   });
   
   document.addEventListener('click', function(event) {
     if (!div.contains(event.target) && !butnedit.contains(event.target)) {
       div.style.display = "none";
     }
   });
   // edit comment or delte it  
   // delete comment :) 
 const btnDelet = document.getElementById("delet-comment");
const YesDeletBtn = document.getElementById("yes-delet");
const btnNonDelet = document.getElementById("no-delet");
const DeletMsg = document.getElementById("delet-commentUserChoice");
const backMsgDelet = document.getElementById('delet-Msg-back');
let isdeleted = false;

 btnDelet.addEventListener('click', function() {
  DeletMsg.classList.add('active');
  backMsgDelet.classList.add('active');
});

 YesDeletBtn.addEventListener('click', function() {
  DeletMsg.classList.remove('active');
  backMsgDelet.classList.remove('active');
  isdeleted = true;
});

btnNonDelet.addEventListener('click', function() {
  DeletMsg.classList.remove('active');
  backMsgDelet.classList.remove('active');
  isdeleted = false;
});

window.addEventListener('click', function(e) {
  if (e.target === backMsgDelet) {
    DeletMsg.classList.remove('active');
    backMsgDelet.classList.remove('active');
  }
});
// edit comment from user request 

 // edit comment on click 
 const btnEdit = document.getElementById("edit-fromUserComment");
 const btnReturn =document.getElementById("editheader")
 const EditMsg = document.getElementById("edit-commentUserChoice");
 const backMsgEdit = document.getElementById("edit-comment-back");
 const btneditSub = document.getElementById('edit-commentbtn')
 
 
 btnEdit.addEventListener('click', function() {
    EditMsg.classList.add('active');
    backMsgEdit.classList.add('active');
 });
 
 btnReturn.addEventListener('click', function() {
   EditMsg.classList.remove('active');
   backMsgEdit.classList.remove('active');
 });
 btneditSub.addEventListener('click', function() {
  EditMsg.classList.remove('active');
  backMsgEdit.classList.remove('active');
});
 window.addEventListener('click', function(e) {
   if (e.target === backMsgEdit) {
     EditMsg.classList.remove('active');
     backMsgEdit.classList.remove('active');
   }
 }); 
 
 
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
 
   // test comment 


const commentToEdit = document.getElementById("review");
const EditArea = document.getElementById("edit-comment-user");
const EditBtn = document.getElementById("edit-commentbtn");
const PostCommentBtn = document.getElementById("post-btncomment");
const CommentNewPosted = document.getElementById("commentPosted");

EditArea.value = commentToEdit.innerText;

EditArea.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    commentToEdit.innerHTML = EditArea.value;
  }
});

// Add event listener to detect Enter key press for posting new comment
CommentNewPosted.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    commentToEdit.innerHTML = CommentNewPosted.value;
  }
});

EditBtn.addEventListener("click", function() {
  commentToEdit.innerHTML = EditArea.value;
});

PostCommentBtn.addEventListener("click", function() {
  commentToEdit.innerHTML = CommentNewPosted.value;
});
