# AutoFillFormHuetch
 
# How to use

### 1. open the screen like this:
![image](https://github.com/tanhkoi/AutoFillFormHuetch/assets/102349675/f96703ef-88be-4f3b-b18c-463ced998989)

### 2. copy the code below
```
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

```
### 3. paste it in the console and hit Enter
![image](https://github.com/tanhkoi/AutoFillFormHuetch/assets/102349675/e9052788-62c6-41b3-82c9-dc467cfb2a8a)

### 4. repeat
Tip: use the arrow button to get faster
