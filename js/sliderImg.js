$(document).ready(function () {
    const sliderData = [
        { src: "../img/slider-1.jpg", alt: "Slide 1" },
        { src: "../img/slider-2.jpg", alt: "Slide 2" },
        { src: "../img/slider-3.jpg", alt: "Slide 3" }
    ];

    const carouselHtml = `
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">

        <div class="carousel-indicators">
          ${sliderData.map((_, index) => `
            <button 
            type="button" 
            data-bs-target="#carouselExampleIndicators" 
            data-bs-slide-to="${index}" 
            class="${index === 0 ? 'active' : ''}" 
            aria-label="Slide ${index + 1}">
            </button>`).join('')}
        </div>

        <div class="carousel-inner">
          ${sliderData.map((slide, index) => `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <img src="${slide.src}" class="d-block w-100" alt="${slide.alt}">
            </div>`).join('')}
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>

        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
        
      </div>`;

    $('#carouselContainer').html(carouselHtml);
});
