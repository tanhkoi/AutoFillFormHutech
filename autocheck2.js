const as = document.querySelectorAll('a[class="ng-star-inserted"]');
as[0].click();

setTimeout(() => {
	const spans = document.querySelectorAll('span');

	for (let i = 0; i < spans.length; i++) {
		let span = spans[i];

		if (span.classList[0] === 'text-left') {
			if (span.innerText === ' 90 - 100%' || span.innerText === ' 91% - 100%' || span.innerText === ' Hài lòng') {
				span.childNodes[1].click();
			}
		}
	}

	const buttons = document.querySelectorAll('button');
	buttons[3].click();
}, 1000);
