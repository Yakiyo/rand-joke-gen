const jokeBox = document.getElementById('joke');
/**
 * @param {string} cat
 * @returns string
 */
function getUrl(cat) {
  return `https://v2.jokeapi.dev/joke/${
    cat.charAt(0).toUpperCase() + cat.substring(1).toLowerCase()
  }?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`;
}

document.addEventListener('click', async (e) => {
  let { joke } = await fetch(getUrl(e.target.name)).then((v) => v.json());
  jokeBox.textContent = joke;
});
