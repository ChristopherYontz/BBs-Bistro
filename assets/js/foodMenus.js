// Menus Page Buttons
const breakfastMenuBtn = document.querySelector('.breakfastMenuBtn');
const breakfastMenu = document.querySelectorAll('.breakfastMenu');
const lunchMenuBtn = document.querySelector('.lunchMenuBtn');
const lunchMenu= document.querySelectorAll('.lunchMenu');
const dinnerMenuBtn = document.querySelector('.dinnerMenuBtn');
const dinnerMenu = document.querySelectorAll('.dinnerMenu');
// const cocktailsMenuBtn = document.querySelector('.cocktailsMenuBtn');
// const cocktailsMenu = document.querySelectorAll('.cocktailsMenu');
const wineMenuBtn = document.querySelector('.wineMenuBtn');
const wineMenu = document.querySelectorAll('.wineMenu');


// breakfastMenuBtn.addEventListener('click', (event) => {
// 	event.preventDefault();
// 	breakfastMenu.classList.remove('hidden');
// 	lunchMenu.classList.add('hidden');
// 	dinnerMenu.classList.add('hidden');
// 	cocktailsMenu.classList.add('hidden');
// 	wineMenu.classList.add('hidden');
// });

// lunchMenuBtn.addEventListener('click', (event) => {
// 	event.preventDefault();
// 	lunchMenu.classList.remove('hidden');
// 	breakfastMenu.classList.add('hidden');
// 	dinnerMenu.classList.add('hidden');
// 	cocktailsMenu.classList.add('hidden');
// 	wineMenu.classList.add('hidden');
// });

// dinnerMenuBtn.addEventListener('click', (event) => {
// 	event.preventDefault();
// 	dinnerMenu.classList.remove('hidden');
// 	breakfastMenu.classList.add('hidden')
// 	lunchMenu.classList.add('hidden');
// 	cocktailsMenu.classList.add('hidden');
// 	wineMenu.classList.add('hidden');
// });

// cocktailsMenuBtn.addEventListener('click', (event) => {
// 	event.preventDefault();
// 	cocktailsMenu.classList.remove('hidden');
// 	breakfastMenu.classList.add('hidden');
// 	lunchMenu.classList.add('hidden');
// 	dinnerMenu.classList.add('hidden');
// 	wineMenu.classList.add('hidden');
// });

// wineMenuBtn.addEventListener('click', (event) => {
// 	event.preventDefault();
// 	wineMenu.classList.remove('hidden');
// 	breakfastMenu.classList.add('hidden')
// 	lunchMenu.classList.add('hidden');
// 	dinnerMenu.classList.add('hidden');
// 	cocktailsMenu.classList.add('hidden');
// });

breakfastMenuBtn.addEventListener('click', (event) => {
	event.preventDefault();
	breakfastMenu.forEach((e) => {
		e.classList.remove('hidden');
	});
	lunchMenu.forEach((e) => {
		e.classList.add('hidden')
	});
	dinnerMenu.forEach((e) => {
		e.classList.add('hidden')
	});

	// cocktailsMenu.forEach((e) => {
	// 	e.classList.add('hidden')
	// });

	wineMenu.forEach((e) => {
		e.classList.add('hidden');
	});
});

lunchMenuBtn.addEventListener('click', (event) => {
	event.preventDefault();
	lunchMenu.forEach((e) => {
		e.classList.remove('hidden');
	});
	breakfastMenu.forEach((e) => {
		e.classList.add('hidden')
	});
	wineMenu.forEach((e) => {
		e.classList.add('hidden')
	});

	dinnerMenu.forEach((e) => {
		e.classList.add('hidden')
	});

	// cocktailsMenu.forEach((e) => {
	// 	e.classList.add('hidden');
	// });
});

dinnerMenuBtn.addEventListener('click', (event) => {
	event.preventDefault();
	dinnerMenu.forEach((e) => {
		e.classList.remove('hidden');
	});
	breakfastMenu.forEach((e) => {
		e.classList.add('hidden')
	});
	lunchMenu.forEach((e) => {
		e.classList.add('hidden')
	});

	wineMenu.forEach((e) => {
		e.classList.add('hidden')
	});

	// cocktailsMenu.forEach((e) => {
	// 	e.classList.add('hidden');
	// });
});

// cocktailsMenuBtn.addEventListener('click', (event) => {
// 	event.preventDefault();
// 	cocktailsMenu.forEach((e) => {
// 		e.classList.remove('hidden');
// 	});
// 	breakfastMenu.forEach((e) => {
// 		e.classList.add('hidden')
// 	});
// 	lunchMenu.forEach((e) => {
// 		e.classList.add('hidden')
// 	});

// 	dinnerMenu.forEach((e) => {
// 		e.classList.add('hidden')
// 	});

// 	wineMenu.forEach((e) => {
// 		e.classList.add('hidden');
// 	});
// });

wineMenuBtn.addEventListener('click', (event) => {
	event.preventDefault();
	wineMenu.forEach((e) => {
		e.classList.remove('hidden');
	});
	breakfastMenu.forEach((e) => {
		e.classList.add('hidden')
	});
	lunchMenu.forEach((e) => {
		e.classList.add('hidden')
	});

	dinnerMenu.forEach((e) => {
		e.classList.add('hidden')
	});

	// cocktailsMenu.forEach((e) => {
	// 	e.classList.add('hidden');
	// });
});