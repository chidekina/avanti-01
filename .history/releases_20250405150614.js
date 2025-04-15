class Releases extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div>
          <div class="flex justify-between mb-4">
            <h3 class="font-bold font-[20px]">Lançamentos</h3>
            <h4>Ver mais</h4>
          </div>
          <div class="swiper-container">
            <div class="swiper-wrapper" id="swiper-wrapper">
              <div class="swiper-slide">Slide 1</div>
              <div class="swiper-slide">Slide 2</div>
              <div class="swiper-slide">Slide 3</div>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        `;

    // Initialize Swiper
    new Swiper('.swiper-container', {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
}

customElements.define("releases", Releases);
