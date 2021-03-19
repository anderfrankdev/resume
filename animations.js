// We store the DOM nodes to be used in variables 
const elementsToAnimateText = document.querySelectorAll('.animated-text')
const barsToAnimate = document.querySelector('.skills')

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
		if (e.target.textContent.length >= 7){
			animationText(e.target)
		}
	})
}

barsToAnimate.addEventListener('click', (e)=>{
	if (e.target.tagName==='DIV') {
		if (e.target.firstElementChild.textContent.length >= 3){
			animationSkillBar(e.target.firstElementChild)
			animationText(e.target.firstElementChild)
		}
	}
	else if(e.target.tagName==='P'){
		if (e.target.firstElementChild.textContent.length >= 3){
			animationSkillBar(e.target)
			animationText(e.target)
		}
	}
})