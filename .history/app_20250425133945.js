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
    <section class="py-[80px] px-[150px] max-md:py-[40px] max-md:px-[20px]">
      <div>
        <div class="flex justify-between mb-4 items-center">
          <h3 class="font-bold text-[20px] max-md:text-[16px]">Lançamentos</h3>
          <a href="#" class="font-bold max-md:underline max-md:mt-2 text-[16px] max-md:text-[14px]">Ver mais</a>
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
          <li class="swiper-slide border border-[#DDDDDD] py-1 px-1 rounded-md" style="min-width: 200px hover:">
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
     <section class="flex max-md:flex-col px-[200px] gap-5 items-center max-md:px-0">
        <div class="flex bg-(--bg-dark) justify-center items-center">
            <img src="./assets/mug.svg" alt="Foto de uma caneca da Avanti" />
        </div>
        <div class="font-(--font-secondary) w-1/2 max-md:w-4/5">
            <h1 class="font-bold text-[30px] max-md:m-3">
          LOREM IPSUM
            </h1>
            <p class="text-[12px] max-md:leading-5">
                Duis consectetur metus nec lacus auctor dignissim. Mauris vitae finibus dui. Mauris laoreet lacus ut eleifend viverra. Cras efficitur volutpat dui, in lobortis metus lacinia sit amet. Sed lacinia pharetra magna, vel pulvinar ligula hendrerit a. Maecenas fringilla porttitor tortor eget lacinia. Donec sollicitudin euismod orci, auctor fringilla magna consequat interdum. Fusce sagittis elit a libero commodo egestas efficitur id augue.<br></br>
                Duis consectetur metus nec lacus auctor dignissim. Mauris vitae finibus dui. Mauris laoreet lacus ut eleifend viverra. Cras efficitur volutpat dui, in lobortis metus lacinia sit amet. Sed lacinia pharetra magna, vel pulvinar ligula hendrerit a. Maecenas fringilla porttitor tortor eget lacinia. Donec sollicitudin euismod orci, auctor fringilla magna consequat interdum. Fusce sagittis elit a libero commodo egestas efficitur id augue.                                    
            </p>
        </div>
        </section>
        `;
  }
};

customElements.define("description-section", Description);

const categories = document.getElementById('categories-list'); 
const dropdown = document.getElementById('dropdown-content');
const allCategories = document.getElementById('menu-button');
const depList = document.getElementById('department-list');
const depContent = document.getElementById('department-content');
const depContentList = document.getElementById('department-content-list');
const depNumber = document.getElementById('department-number');

for (let i = 1; i <= 7; i++) {
  const li = document.createElement('li');
  li.innerHTML = `
    <a href="#" id="dep-${i}" class="hover:font-bold hover:text-(--primary-color)"> Departamento </a>
  `;

  li.onclick = () => {
    const allItems = depList.querySelectorAll('li');
    allItems.forEach(item => item.classList.remove('selected'));

    dropdown.classList.add('hidden');

    generateDepartmentContent(i);
  };

  depList.appendChild(li);
}

function generateDepartmentContent(departmentId) {
  const currentVisibleId = depContent.getAttribute('data-visible-id');
  if (currentVisibleId === departmentId.toString()) {
    depContent.classList.add('hidden');
    depContent.removeAttribute('data-visible-id');
    return;
  }

  depContent.setAttribute('data-visible-id', departmentId);
  depContent.classList.remove('hidden');

  depContentList.innerHTML = '';
  const depTitle = depNumber.querySelector('h2');
  if (depTitle) {
    depNumber.removeChild(depTitle);
  }

  const h2 = document.createElement('h2');
  h2.className = 'font-bold mt-4 mb-2';
  h2.textContent = `Departamento ${departmentId}`;
  depNumber.prepend(h2);

  for (let col = 1; col <= 3; col++) {
    const ul = document.createElement('ul');
    ul.className = 'flex flex-col gap-1 text-[14px]';

    for (let item = 1; item <= 8; item++) {
      const li = document.createElement('li');
      li.className = 'first:font-bold first:text-(--primary-color) hover:font-bold hover:text-(--primary-color)';
      li.textContent = 'Categoria';
      ul.appendChild(li);
    }

    depContentList.appendChild(ul);
  }
}

allCategories.onclick = () => {
  if (dropdown.classList.contains('hidden')) {
    dropdown.classList.remove('hidden');
    depContent.classList.add('hidden');
  } else {
    dropdown.classList.add('hidden');
  }
};
 
for (let i = 1; i <= 15; i++) {
  const li = document.createElement('li');
  li.id = i;
  li.className = 'flex justify-between hover:text-(--primary-color) hover:font-bold';
  li.innerHTML = `
    <p>Departamento</p>
    <img src="./assets/arrow.svg" alt="imagem de flecha" />
  `;

  li.addEventListener('click', () => {
    const allItems = categories.querySelectorAll('li');
    allItems.forEach(item => item.classList.remove('selected'));

    li.classList.add('selected');

    const existingSublist = dropdown.querySelector('.sublist-container');
    if (existingSublist) {
      dropdown.removeChild(existingSublist);
    }

    const sublistContainer = document.createElement('div');
    sublistContainer.className = 'flex relative gap-[100px] right-50 mt-4 sublist-container';

    for (let i = 1; i <= 3; i++) {
      const sublist = document.createElement('ul');
      sublist.className = 'flex flex-col gap-3 sublist text-(--sub-text)';

      for (let j = 1; j <= 8; j++) {
        const subItem = document.createElement('li');
        subItem.className = 'hover:text-(--primary-color) hover:font-bold first:text-(--primary-color) first:font-bold';
        subItem.textContent = `Categoria ${li.id}`;
        sublist.appendChild(subItem);
      }

      sublistContainer.appendChild(sublist);
    }

    dropdown.appendChild(sublistContainer);
  });

  categories.appendChild(li);
}

document.querySelectorAll('.toggle-item').forEach(item => {
  item.addEventListener('click', () => {
    const list = item.querySelector('.toggle-list');
    if (list) {
      list.classList.toggle('hidden');
    }
  });
});

const menuHamburger = document.getElementById("menu-hamburger");
const dropdownMenu = document.getElementById("dropdown-menu");

menuHamburger.addEventListener("click", () => {
  dropdownMenu.classList.toggle("hidden");
});