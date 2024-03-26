const audio = document.querySelector('.navigation_music')
const audioButton = document.querySelector('.navigation-right__music-button')
const lordIcon = document.querySelector('lord-icon')

audio.volume = 0.1

function playAudio(){
  audioButton.addEventListener('click', () => {
    audioButton.classList.toggle('playing')
    audioButton.style.transition = '.5s ease'
    audio.paused ? audio.play() : audio.pause()

    if(audioButton.classList.contains('playing')){
      lordIcon.colors = "primary:#f0f1fa"
    } else{
      lordIcon.colors = "primary:#262626"
    }
  })
}
document.querySelector('.seasons_series_all_play').addEventListener('click', () => {
  const gameDemo = document.querySelector('.game-demo');
  gameDemo.style.display = 'block';
  gameDemo.scrollIntoView({ behavior: 'smooth' });
})
playAudio();

// MENU

// function menuBurgerButtonAnimation() {
//   const burgerButton = document.querySelector('#nav-icon3')

//   burgerButton.addEventListener('click', () => {
//     burgerButton.classList.toggle('open')
//   })
// }

// menuBurgerButtonAnimation()