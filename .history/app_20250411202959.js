class Carousel extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.render();
      this.initSlides();
      this.initSwiper();
    }
  
    render() {
      this.innerHTML = `
        <section class="py-[80px] px-[150px]">
          <div>
            <div class="flex justify-between mb-4">
              <h3 class="font-bold text-[20px]">Lançamentos</h3>
              <h4>Ver mais</h4>
            </div>
            <div class="swiper">
              <div class="swiper-container">
                <ul class="swiper-wrapper" id="swiper-wrapper"></ul>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </section>
      `;
    }
  
    initSlides() {
      const swiperWrapper = this.querySelector("#swiper-wrapper");
  
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
    }
  
    initSwiper() {
      new Swiper(this.querySelector(".swiper-container"), {
        slidesPerView: 5,
        spaceBetween: 10,
        navigation: {
          nextEl: this.querySelector(".swiper-button-next"),
          prevEl: this.querySelector(".swiper-button-prev"),
        },
        pagination: {
          el: this.querySelector(".swiper-pagination"),
          clickable: true,
        },
      });
    }
  }
  
  customElements.define("carousel-section", Carousel);

class Description extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
     <section class="flex px-[200px] gap-5 items-center">
        <div class="flex bg-(--bg-dark) justify-center items-center">
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
        </section>
        `;
  }
};

customElements.define("description-section", Description);

const categories = document.getElementById('categories-list'); // Removed the '#' symbol

for (let i = 1; i <= 15; i++) {
  const li = document.createElement('li');
  li.id = i;
  li.className = 'flex justify-between hover:text-(--primary-color) hover:font-bold';
  li.innerHTML = `
    <p>Departamento </p>
    <img src="./assets/arrow.svg" alt="imagem de flecha" />
  `;

  li.addEventListener('click', () => {
    // Remove existing sublist if already present
    const existingSublist = li.querySelector('ul');
    if (existingSublist) {
      li.removeChild(existingSublist);
      return;
    }

    // Create a new sublist
    const sublist = document.createElement('ul');
    sublist.className = 'ml-4 mt-2 flex flex-col gap-2';

    for (let j = 1; j <= 5; j++) {
      const subItem = document.createElement('li');
      subItem.className = 'hover:text-(--primary-color)';
      subItem.textContent = `Subitem ${j} of Departamento ${i}`;
      sublist.appendChild(subItem);
    }

    li.appendChild(sublist);
  });

  categories.appendChild(li);
}

