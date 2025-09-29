document.addEventListener("DOMContentLoaded", () => {
    const mainSearchInput = document.getElementById("mainSearchInput");
    if (mainSearchInput) {
        mainSearchInput.focus();
    }
    // 모든 토글 버튼에 대한 이벤트 리스너 설정
    document.querySelectorAll('.tab-toggle').forEach(toggle => {
        const checkbox = toggle.querySelector('input[type="checkbox"]');
        const subButtons = toggle.parentElement.querySelector('.sub-buttons');
        if (checkbox && subButtons) {
            toggle.addEventListener('click', (e) => {
                // 실제 체크박스 클릭이 아니면 (레이블 클릭 등) 체크박스 상태를 수동으로 변경
                if (e.target !== checkbox) {
                    checkbox.checked = !checkbox.checked;
                }
                if (checkbox.checked) {
                    subButtons.style.display = 'flex';
                    // max-height를 실제 컨텐츠 높이로 설정하여 슬라이드 다운 효과
                    setTimeout(() => {
                        subButtons.style.maxHeight = subButtons.scrollHeight + "px";
                    }, 10);
                }
                else {
                    subButtons.style.maxHeight = '0';
                    // transition이 끝난 후 display를 none으로 변경
                    setTimeout(() => {
                        if (!checkbox.checked) { // 상태가 다시 바뀌지 않았는지 확인
                            subButtons.style.display = 'none';
                        }
                    }, 300); // transition 시간과 일치
                }
            });
        }
    });
    // 모든 하위 버튼에 대한 이벤트 리스너 설정
    document.querySelectorAll('.sub-btn').forEach(button => {
        button.addEventListener('click', () => {
            const command = button.dataset.command;
            if (mainSearchInput && command) {
                mainSearchInput.value += command + " ";
                mainSearchInput.focus();
            }
        });
    });
});
export {};
//# sourceMappingURL=popup.js.map