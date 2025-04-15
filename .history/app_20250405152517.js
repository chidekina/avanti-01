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

  