const QFILE = getFile()

function getFile() {

	const last = location.href.lastIndexOf('/')
	const fname = location.href.substring(last + 1)
	return fname.substring(0, fname.indexOf('.') + 1) + 'txt'

}

function txtToHTML(txt) {

	const parts = []
	let lastInd = 0

	for(let expInd = txt.indexOf('^'); expInd !== -1; expInd = txt.indexOf('^', lastInd)) {

		const ss = document.createElement('sup')
		let space = txt.indexOf(' ', expInd + 1)
		space = space === -1 ? txt.length : space

		ss.append(txt.substring(expInd + 1, space))
		parts.push(txt.substring(lastInd, expInd))
		parts.push(ss)
		lastInd = space

	}

	parts.push(txt.substring(lastInd))
	return parts

}

async function loadQuestions() {

	const resp = await fetch(QFILE)
	const dat = await resp.text()
	const qsArray = dat.split('\n\n')

	for (const [ind, qStr] of qsArray.entries()) {

		const choices = qStr.split('\n')
		const qdiv = document.createElement('div')
		const prompt = document.createElement('p')

		prompt.append(...txtToHTML(choices[0]))
		qdiv.append(prompt)
		choices.shift()

		for (const [chind, ch] of choices.filter((e) => e.length !== 0).entries()) {

			const choicediv = document.createElement('div')
			const radio = document.createElement('input')
			const chtxt = document.createElement('label')

			radio.type = 'radio'
			radio.name = 'choice' + ind
			radio.id = 'radiobut' + ind * 13 + chind
			chtxt.htmlFor = radio.id
			choicediv.className = ch[0] === '*' ? 'correctQ' : 'incorrectQ'

			chtxt.append(...txtToHTML(ch.substring(1)))
			choicediv.append(radio, chtxt)
			qdiv.append(choicediv)

		}

		mult.append(qdiv)

	}

}

loadQuestions()
