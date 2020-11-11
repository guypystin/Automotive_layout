
window.onscroll = function openHeader(){
	var header = document.querySelector(' .header ');

	if( (window.pageYOffset) >= 50 ) {
		header.classList.add('header-fixed');
	} else {
		header.classList.remove('header-fixed');
	}

}

// window.onscroll=function showHeader(){
// 	var header = document.querySelector('.menu ');

// 	if((window.pageYOffset >= 700)&&(window.pageYOffset < 5250)){
// 		header.classList.add('header_fixed');
// 	}
// 	else {
// 		header.classList.remove('header_fixed');
// 	}
// 		 if ((window.innerHeight + window.pageYOffset) >=document.body.offsetHeight) {
       			
//     }