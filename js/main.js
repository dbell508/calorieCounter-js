// document.getElementById('calcBtn').addEventListener('click', outputCal());

function outputCal() {
	function docId(){
		let r = document.querySelector(arguments[0]);
		r = (r.value == 'on') ? r.checked : Number(r.value);
		return r;
	}

	let age = docId('#age');
	let height = (docId('#heightFt') * 12) + docId('#heightIn');
	let weight = docId('#weight');
	let lifeStyle = (docId('#lifeStyle') * 0.2) + 1;

	let result = docId('#m') ? lifeStyle * (66 + (6.2 * weight) + (12.7 * height) - (6.76 * age)) : lifeStyle * (655.1 + (4.35 * weight) +  (4.7 * height) - (4.7 * age));
	document.getElementById('output').innerHTML = "<h2 class='finalNum'>" + Math.round(result) + "</h2>  calories needed per day to maintain weight.";
}