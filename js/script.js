document.addEventListener('click', documentClick);

function documentClick(e) {
	const targetItem = e.target;
	if (targetItem.closest('.icon-menu')) {
		document.documentElement.classList.toggle('menu-open');
	}
};

const swiper = new Swiper(".swiper", {
	slidesPerView: 5,
	spaceBetween: 30,
	loop: true,

	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
});