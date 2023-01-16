const previousSlide = () => {
	const parent = document.querySelector(".screenshot-image");
	const images = parent.children;
	const previousImage = images[0];
	parent.removeChild(previousImage);
	parent.appendChild(previousImage);
};
const nextSlide = () => {
	const parent = document.querySelector(".screenshot-image");
	const images = parent.children;
	const previousImage = images[images.length - 1];
	parent.removeChild(previousImage);
	parent.insertBefore(previousImage, parent.firstChild);
};

document.querySelector(".icon-right").addEventListener("click", previousSlide);
document.querySelector(".icon-left").addEventListener("click", nextSlide);
