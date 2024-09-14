class Board {
  constructor(title, pointElement) {
    this.title = title;
    this.pointElement = pointElement;
    this.score = 0;
  }

  addScore(amount) {
    this.score += amount;
    this.pointElement.textContent = this.score;
  }
}

const home = document.querySelector('.board-point.home');
const guest = document.querySelector('.board-point.guest');

const homeBoard = new Board('HOME', home);
const guestBoard = new Board('GUEST', guest);

document.querySelectorAll('.btn-add').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const amount = parseInt(e.target.textContent.replace('+', ''));
    if (e.target.classList.contains('home')) {
      homeBoard.addScore(amount);
    } else if (e.target.classList.contains('guest')) {
      guestBoard.addScore(amount);
    }
  });
});
