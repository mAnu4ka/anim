let zSpacing = -1000,
	lastPos = zSpacing / 5,
	$frames = document.getElementsByClassName('frame'),
	frames = Array.from($frames),
	zVals = []

window.onscroll = function () {

	let top = document.documentElement.scrollTop,
		delta = lastPos - top

	lastPos = top

	frames.forEach(function (n, i) {
		zVals.push((i * zSpacing) + zSpacing)
		zVals[i] += delta * -5.5
		let frame = frames[i],
			transform = `translateZ(${zVals[i]}px)`,
			opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0
		frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
	})

}

window.scrollTo(0, 1)

let soundButton = document.querySelector('.soundbutton'),
	audio = document.querySelector('.audio')

soundButton.addEventListener('click', e => {
	soundButton.classList.toggle('paused')
	audio.paused ? audio.play() : audio.pause()
})

window.onfocus = function () {
	soundButton.classList.contains('paused') ? audio.pause() : audio.play()
}

window.onblur = function () {
	audio.pause()
}
let all__congragulet = ['Congratulate', 'përgëzime', 'félicitations', 'おめでとうございます', '축하 해요', 'честитки', 'təbrik', 'Շնորհավորում եմ', 'অভিনন্দন', 'Поздравление']
let anim__p = document.querySelector('.anim')
let container = document.querySelector('.container')
let con = 0
container.style.display = 'none'
document.body.classList.add('anim__body')
document.body.classList.remove('anim__body2')
const displayHello = () => {
	anim__p.innerHTML = all__congragulet[con]
	if (con == all__congragulet.length) {
		con = 0
	} else {
		con++
	}
}

let inter = setInterval(displayHello, 5000);


let svg = document.querySelector('.forvard')

svg.onclick = () => {
	svg.style.display = 'none'
	document.body.classList.remove('anim__body')
	document.body.classList.add('anim__body2')
	container.style.display = 'block'
	anim__p.style.display = 'none'
}