  

var backdrop = document.querySelector('.backdrop');
var selectPlanButton = document.querySelectorAll('.button');
var modal = document.querySelector('.modal');
var modalButton = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

//console.log(selectPlanButton);

for (var i = 0; i < selectPlanButton.length; i++){
   selectPlanButton[i].addEventListener('click', function(){
         // modal.style.display = 'block';
           // backdrop.style.display = 'block';
           //modal.classname = 'open';//this will actually overwrite the complete list
           modal.classList.add('open');
           backdrop.classList.add('open');
   });
}
backdrop.addEventListener('click', function() {
    
mobileNav.style.display = 'none'
closeModal(); 
});

modalButton.addEventListener('click', closeModal);
      

function closeModal(){
   //backdrop.style.display = 'none';
   //modal.style.display = 'none';
   modal.classList.remove('open');
   backdrop.classList.remove('open');
   mobileNav.classList.remove('open')
}
toggleButton.addEventListener('click', function() {
    mobileNav.classList.add('open')
    backdrop.classList.add('open')
   })