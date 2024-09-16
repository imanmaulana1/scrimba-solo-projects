const posts = [
  {
    name: 'Vincent van Gogh',
    username: 'vincey1853',
    location: 'Zundert, Netherlands',
    avatar: 'images/avatar-vangogh.svg',
    post: 'images/post-vangogh.jpg',
    comment: 'just took a few mushrooms lol',
    likes: 21,
  },
  {
    name: 'Gustave Courbet',
    username: 'gus1819',
    location: 'Ornans, France',
    avatar: 'images/avatar-courbet.svg',
    post: 'images/post-courbet.jpg',
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: 'Joseph Ducreux',
    username: 'jd1735',
    location: 'Paris, France',
    avatar: 'images/avatar-ducreux.svg',
    post: 'images/post-ducreux.jpg',
    comment:
      'gm friends! which coin are YOU stacking up today?? post below and WAGMI!',
    likes: 152,
  },
];

function createElement() {
  const main = document.querySelector('main');
  const postWrapper = document.createElement('section');
  postWrapper.classList.add('post-wrapper');

  posts.forEach((item) => {
    const article = document.createElement('article');
    article.classList.add('post');

    const header = document.createElement('header');
    header.classList.add('header');

    const avatarDiv = document.createElement('div');
    avatarDiv.classList.add('post-avatar');

    const avatarImg = document.createElement('img');
    avatarImg.src = `./${item.avatar}`;
    avatarImg.alt = `Avatar ${item.name}`;
    avatarDiv.appendChild(avatarImg);

    const authorDiv = document.createElement('div');
    authorDiv.classList.add('post-author');

    const nameElement = document.createElement('h2');
    nameElement.textContent = item.name;
    authorDiv.appendChild(nameElement);

    const locationElement = document.createElement('p');
    locationElement.textContent = item.location;
    authorDiv.appendChild(locationElement);

    const postBody = document.createElement('section');
    postBody.classList.add('post-body');

    const imageDiv = document.createElement('div');
    imageDiv.classList.add('post-image');
    const postImg = document.createElement('img');
    postImg.src = `./${item.post}`;
    postImg.alt = `${item.name}'s post`;
    imageDiv.appendChild(postImg);

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('post-content');

    const iconsDiv = document.createElement('div');
    iconsDiv.classList.add('icons');
    ['icon-heart', 'icon-comment', 'icon-dm'].forEach((icon) => {
      const iconImg = document.createElement('img');
      iconImg.src = `./images/${icon}.png`;
      iconImg.alt = `${icon} icon`;
      iconImg.classList.add('icon');
      iconsDiv.appendChild(iconImg);
    });

    const likesElement = document.createElement('span');
    likesElement.classList.add('likes');
    likesElement.textContent = `${item.likes} likes`;

    const caption = document.createElement('p');
    caption.classList.add('post-caption');
    caption.innerHTML = `<span>${item.username}</span> ${item.comment}`;

    contentDiv.appendChild(iconsDiv);
    contentDiv.appendChild(likesElement);
    contentDiv.appendChild(caption);

    postBody.appendChild(imageDiv);
    postBody.appendChild(contentDiv);

    article.appendChild(header);
    article.appendChild(postBody);

    postWrapper.appendChild(article);
  });

  main.appendChild(postWrapper);
}

document.addEventListener('DOMContentLoaded', function () {
  createElement();
});
