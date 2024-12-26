// Mở form và paste code vào console, 57 điểm mặc định
const inputs = document.querySelectorAll('input');
const validIds = ['413', '416', '426', '429', '431', '434', '436', '440', '455', '470', '471', '472', '473', '491'];
inputs.forEach(input => {
    if (validIds.includes(input.id)) {
        console.log(`Clicking input with ID: ${input.id}`);
        input.click();
    }
});
