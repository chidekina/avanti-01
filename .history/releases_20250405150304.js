class Releases extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        
        <div>
          <div class="flex justify-between mb-4">
            <h3 class="font-bold font-[20px]">Lançamentos</h3>
            <h4>Ver mais</h4>
          </div>
          <div class="swiper">
            <div class="swiper-container">
              <div class="swiper-wrapper" id="swiper-wrapper">
              </div>
            
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
            
              <div class="swiper-pagination"></div>
            </div>


        </div>
        `;
  }
}

customElements.define("releases", Releases);
