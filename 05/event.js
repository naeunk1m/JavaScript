function showDetail() {
    document.querySelector('#desc').style.display = "block"; //상세 설명 내용을 화면에 표시
    document.querySelector('#open').style.display = "none"; //상세 설명 보기 버튼 감춤
}

function hideDetail() {
    document.querySelector('#desc').style.display = "none"; //상세 설명 내용을 화면에서 감춤
    document.querySelector('#open').style.display = "block"; //상세 설명 보기 버튼 표시
}