import '../styles/_style.scss'

function buttonClick() {
	alert('Button clicked!')
	console.log('Button clicked!')
}

document.addEventListener('DOMContentLoaded', () => {
	const button = document.getElementById('actionButton')
	if (button) {
		button.addEventListener('click', buttonClick)
	}
})
