// main.js 파일
// 가상의 데이터
const posts = [
    { title: '첫 번째 게시물', author: '작성자1' },
    { title: '두 번째 게시물', author: '작성자2' },
    { title: '세 번째 게시물', author: '작성자3' },
    { title: '네 번째 게시물', author: '작성자4' },
];

// DOM 객체 가져오기
const boardBody = document.querySelector('.board tbody');

// 게시물 목록 생성
posts.forEach((post) => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td><a href="#">${post.title}</a></td>
        <td>${post.author}</td>
    `;
    boardBody.appendChild(row);
});

// 글 작성 모달 창 열기
function openModal() {
    modal.style.display = 'block';
}

// 글 작성 모달 창 닫기
function closeModal() {
    modal.style.display = 'none';
}

// 글 작성 폼 제출
function submitForm(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    if (title.trim() === '' || author.trim() === '') {
        alert('제목과 작성자를 입력해주세요.');
        return;
    }
    const newPost = { title, author };
    posts.push(newPost);
    closeModal();
    renderPosts();
}

// 초기 게시물 목록 생성
renderPosts();
