## Cách sử dụng:
1. Đăng nhập vào [sinhvien.hutech.edu](https://sinhvien.hutech.edu.vn/):
2. Mở **Khảo sát->Hoạt động giảng dạy** và **Console** trên browser(Crtl + Shift + J):
![image](https://github.com/tanhkoi/AutoFillFormHuetch/assets/102349675/f96703ef-88be-4f3b-b18c-463ced998989)
3. Copy đoạn code sau, dán vào **Console** và nhấn **Enter**:
> [!NOTE]
> Nếu browser không cho phép paste code, vui lòng nhập `allow pasting` vào **Console**.

> [!IMPORTANT]
> Đoạn code chỉ hoàn thành 1 form 1 lần chạy.
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
