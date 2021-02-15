<script>
module.exports = {
  name: 'headline',
  components: {
    slider: httpVueLoader('./Slider.vue')
  }
}
</script>

<style>
header {
  position: relative;
  background-image: url(../assets/sunset-wallpaper.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  text-align: center;
}

header .headline-content {
  width: 100%;
  padding: 36px 36px 0;
}

header .headline-content h1 {
  text-transform: uppercase;
  font-weight: bold;
}

header .headline-content p {
  font-size: 18px;
  margin-top: 0;
}

header i {
  margin-top: 24px;
  animation: levitate 2s infinite;
  cursor: pointer;
  color: white;
}

header section.dots-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  padding: 20px;
}

header section.dots-container .dot,
header section.dots-container .active-dot {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 5px solid black;
  background-color: white;
  margin: 0 4px;
  cursor: pointer;
  transition: width border 0.5s;
}

header section.dots-container .active-dot {
  width: 40px;
  height: 40px;
  border-color: white;
  border-width: 6px;
  background-color: grey;
}

@keyframes levitate {
  from,
  to {
    transform: translateY(-25%);
  }

  50% {
    transform: translateY(25%);
  }
}

@media screen and (max-width: 768px) {
  header .headline-content {
    background-color: #323232;
  }
}
</style>

<template>
  <div>
    <header>
      <div class="headline-content">
        <h1>Lorem ipsum</h1>
        <p>Lorem ipsum dolor sit ame, consectetur adipiscing elit</p>
      </div>
      <a href="#slider">
        <i class="fas fa-arrow-down fa-3x"></i>
      </a>
      <section class="dots-container">
        <div class="active-dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </section>
    </header>
    <slider />
  </div>
</template>
