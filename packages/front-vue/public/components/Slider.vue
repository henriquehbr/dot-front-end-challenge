<script>
module.exports = {
  name: 'slider',
  mounted: () => {
    const $$ = document.querySelectorAll.bind(document)

    const sliderResponsivity = flkty => {
      if (window.innerWidth <= 720) {
        $$('.slider-cell').forEach(sliderCell => sliderCell.classList.add('mobile'))
        flkty.resize()
      } else if (document.querySelectorAll('.slider-cell.mobile')) {
        $$('.slider-cell').forEach(sliderCell => sliderCell.classList.remove('mobile'))
        flkty.resize()
      }
    }

    const sliderElement = document.querySelector('#slider')
    const flkty = new Flickity(sliderElement, {
      pageDots: false,
      cellAlign: 'left'
    })

    window.onresize = () => sliderResponsivity(flkty)
  }
}
</script>

<style>
section.slider-container {
  background-color: #484848;
}

section.slider-container #slider {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}

section.slider-container #slider .slider-cell {
  text-align: center;
  padding: 32px;
  width: 33%;
  color: white;
}

section.slider-container #slider .slider-cell.mobile {
  width: 100%;
}

section.slider-container #slider .slider-cell img {
  width: 100%;
  border: 8px solid lightgrey;
}

section.slider-container #slider .slider-cell h3 {
  margin-top: 9px;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bold;
}
</style>

<template>
  <section class="slider-container">
    <div id="slider">
      <div class="slider-cell">
        <img src="./assets/sunset-wallpaper.jpg" alt="Sunset wallpaper" />
        <h3>Lorem ipsum</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec vulputate mi. Sed
          sagittis sit amet libero eu gravida. Aliquam fermentum orci et metus fermentum.
        </p>
      </div>
      <div class="slider-cell">
        <img src="./assets/sunset-wallpaper.jpg" alt="Sunset wallpaper" />
        <h3>Lorem ipsum</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec vulputate mi. Sed
          sagittis sit amet libero eu gravida. Aliquam fermentum orci et metus fermentum.
        </p>
      </div>
      <div class="slider-cell">
        <img src="./assets/sunset-wallpaper.jpg" alt="Sunset wallpaper" />
        <h3>Lorem ipsum</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec vulputate mi. Sed
          sagittis sit amet libero eu gravida. Aliquam fermentum orci et metus fermentum.
        </p>
      </div>
      <div class="slider-cell">
        <img src="./assets/sunset-wallpaper.jpg" alt="Sunset wallpaper" />
        <h3>Lorem ipsum</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec vulputate mi. Sed
          sagittis sit amet libero eu gravida. Aliquam fermentum orci et metus fermentum.
        </p>
      </div>
      <div class="slider-cell">
        <img src="./assets/sunset-wallpaper.jpg" alt="Sunset wallpaper" />
        <h3>Lorem ipsum</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec vulputate mi. Sed
          sagittis sit amet libero eu gravida. Aliquam fermentum orci et metus fermentum.
        </p>
      </div>
      <div class="slider-cell">
        <img src="./assets/sunset-wallpaper.jpg" alt="Sunset wallpaper" />
        <h3>Lorem ipsum</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec vulputate mi. Sed
          sagittis sit amet libero eu gravida. Aliquam fermentum orci et metus fermentum.
        </p>
      </div>
      <div class="slider-cell">
        <img src="./assets/sunset-wallpaper.jpg" alt="Sunset wallpaper" />
        <h3>Lorem ipsum</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec vulputate mi. Sed
          sagittis sit amet libero eu gravida. Aliquam fermentum orci et metus fermentum.
        </p>
      </div>
      <div class="slider-cell">
        <img src="./assets/sunset-wallpaper.jpg" alt="Sunset wallpaper" />
        <h3>Lorem ipsum</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec vulputate mi. Sed
          sagittis sit amet libero eu gravida. Aliquam fermentum orci et metus fermentum.
        </p>
      </div>
      <div class="slider-cell">
        <img src="./assets/sunset-wallpaper.jpg" alt="Sunset wallpaper" />
        <h3>Lorem ipsum</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec vulputate mi. Sed
          sagittis sit amet libero eu gravida. Aliquam fermentum orci et metus fermentum.
        </p>
      </div>
    </div>
  </section>
</template>
