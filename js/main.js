(() =>{
  let animContainer = document.querySelector("#preloader");
  
  var animItem = bodymovin.loadAnimation({
    wrapper : animContainer,
    animType : 'svg',
    loop: false,
    autoplay: false,
    path : './data/search.json'
  
  
  });

  function playAnimation() {
    animItem.play();
    console.log(playAnimation);
  }

  animContainer.addEventListener('mouseover', playAnimation);
})();