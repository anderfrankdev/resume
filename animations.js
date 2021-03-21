// We store the DOM nodes to be used in variables 
const elementsToAnimateText = document.querySelectorAll('.animated-text')
const barsContainers = document.querySelectorAll('.skills');
const barsToAnimate = [...document.querySelectorAll('.skill-percent')]

// We create the function used to animate the titles and bars

const animationText = (textNode) => {
	let arr = textNode.textContent.split('');
	let i = 0;
	textNode.textContent = '';
	let animation = setInterval(()=>{
		textNode.textContent += arr[i];
		i++;
		if (i===arr.length) {
			clearInterval(animation);
		};
	},270)

}

const animationSkillBar = (elementNode) => {
	let i = 0;
	let percentage = elementNode.textContent
	const animation = setInterval(()=>{
		elementNode.style.width = `${i}%`;
		i++;
		if (elementNode.style.width == percentage) {
			clearInterval(animation);
		}
	},15)
}

// Addind the event listeners

window.addEventListener('load',()=>{
	setTimeout(()=>{
	animationText(elementsToAnimateText[0])
	},700)}
);


for (element of elementsToAnimateText){
	element.addEventListener('click',(e)=>{
		e.preventDefault()
		if (e.target.textContent.length >= 7){
			animationText(e.target)
		}
	})
}

for (element of barsContainers){
	element.addEventListener('click', (e)=>{
		e.preventDefault()
		if (e.target.classList[0]==="skill") {
			if (e.target.firstElementChild.textContent.length >= 3){
				animationSkillBar(e.target.firstElementChild)
				animationText(e.target.firstElementChild)
			}
		}
		else if(e.target.classList[0]==="skill-percent"){
			if (e.target.textContent.length >= 3){
				animationSkillBar(e.target)
				animationText(e.target)
			}
	}
})
}

window.addEventListener('scroll', (e)=>{
	if (e.view.scrollY > 698 && e.view.scrollY < 710) {
		if (barsToAnimate[6].textContent.endsWith('%')) {
			barsToAnimate.forEach(animationSkillBar);
			barsToAnimate.forEach(animationText)
		}
	}	
})