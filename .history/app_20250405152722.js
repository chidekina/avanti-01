document.addEventListener("DOMContentLoaded", function () {
    const swiperWrapper = document.getElementById("swiper-wrapper");

    for (let i = 1; i <= 15; i++) {
      const slide = `
        <li class="swiper-slide border border-[#DDDDDD] py-1 px-1 rounded-md" style="min-width: 200px;">
          <div class="absolute">
            <h6 class="flex justify-center items-center bg-[#00264E] text-white text-[10px] w-[42px] h-[20px] rounded-sm">
              NOVO
            </h6>
          </div>
          <img src="./assets/model.svg" alt="Modelo ${i}" />
          <div class="mt-2">
            <h3 class="text-[#303030] text-[12px] mb-1 leading-none">
              Produto ${i} - Nome do Produto
            </h3>
          </div>
          <div class="flex gap-1">
            <div>
              <h4 class="text-[#303030] text-[10px] line-through leading-none">R$ 100,00</h4>
              <h4 class="text-[14px] font-bold tracking-tight">R$ 79,90</h4>
            </div>
            <div class="flex justify-center items-center bg-[#5EC0BE] text-white underline text-[8px] w-[52px] h-[16px] rounded-sm tracking-tight">
              10% OFF
            </div>
          </div>
          <h6 class="text-[10px]">Ou em até <b>10x de R$ 7,90</b></h6>
          <button class="w-full bg-[#00264E] text-white rounded-md text-[12px] h-[30px]">
            Comprar
          </button>
        </li>
      `;
      swiperWrapper.insertAdjacentHTML("beforeend", slide);
    }

    var swiper = new Swiper(".swiper-container", {
      slidesPerView: 5,
      spaceBetween: 10,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 5 },
      },
    });
  });

class information extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                <div class="flex bg-[#C2C2C2] justify-center items-center">
        <img src="./assets/mug.svg" alt="Foto de uma caneca da Avanti" />
      </div>
      <div class="font-(--font-secondary) w-1/2">
        <h1 class="font-bold text-[30px]">
          Lorem Ipsum
        </h1>
        <p class="text-[12px]">
          Duis consectetur metus nec lacus auctor dignissim. Mauris vitae finibus dui. Mauris laoreet lacus ut eleifend viverra. Cras efficitur volutpat dui, in lobortis metus lacinia sit amet. Sed lacinia pharetra magna, vel pulvinar ligula hendrerit a. Maecenas fringilla porttitor tortor eget lacinia. Donec sollicitudin euismod orci, auctor fringilla magna consequat interdum. Fusce sagittis elit a libero commodo egestas efficitur id augue.<br></br>
          Duis consectetur metus nec lacus auctor dignissim. Mauris vitae finibus dui. Mauris laoreet lacus ut eleifend viverra. Cras efficitur volutpat dui, in lobortis metus lacinia sit amet. Sed lacinia pharetra magna, vel pulvinar ligula hendrerit a. Maecenas fringilla porttitor tortor eget lacinia. Donec sollicitudin euismod orci, auctor fringilla magna consequat interdum. Fusce sagittis elit a libero commodo egestas efficitur id augue.                                    
        </p>
      </div>
        `
    }
};

customElements.define('information-section', information);