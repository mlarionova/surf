// Навигация 

var burger = document.querySelector(".main-nav--button"),
	navigation = document.querySelector(".page-header .main-nav");


burger.onclick = function() {
  this.classList.toggle("main-nav--button__active");
  navigation.classList.toggle("main-nav__open");
}


// Слайдер

new Slider({
		slides: '.shop--slider .shop--item',
		next: '.shop--slider .btn-next',
		prev: '.shop--slider .btn-prev'
	});

function Slider(slides){

		this.slides = document.querySelectorAll(slides.slides);
		this.btPrev = document.querySelector(slides.prev);
		this.btNext = document.querySelector(slides.next);
		

		var i = 0;

		this.prev = function() {
	 		this.slides[i].className = "shop--item shop--item__not-active";
			 i--;
			 if( i < 0){ 
				i = this.slides.length - 1; 
			 } 
			 this.slides[i].className = "shop--item shop--item__active"; 
		 }, 
		 
		 this.next = function() { 
		 	this.slides[i].className = "shop--item shop--item__not-active"; 
			i++; if( i >= this.slides.length){
			  i = 0;
			}
	    	this.slides[i].className = "shop--item shop--item__active";
		}

		this.btPrev.addEventListener('click', this.prev.bind(this));
		this.btNext.addEventListener('click', this.next.bind(this));
	
	 }




