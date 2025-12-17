const buttonOpen = document.querySelector('.icon_menu')
const buttonClose = document.querySelector('.icon_close')
const dropContent = document.querySelector('.dropdown_content')
const navigationMobile = document.querySelector('.navigation_mobile')
const benefitsSection = document.querySelector('.benefits_section')
const specificationsTable = document.querySelector('.specifications_table')
const howItWorksSection = document.querySelector('.how_it_works_section')
const centeredCta = document.querySelector('.centered_cta')
const aBenefits = document.querySelectorAll('.benefits')
const aSpecification = document.querySelectorAll('.specification')
const aHowto = document.querySelectorAll('.how_to')
const aContactUs = document.querySelectorAll('.contact_us')

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Replay OFF
      }
    });
  },
  {
    threshold: 0.2
  }
);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


function closeMenu() {
    buttonClose.style.display = 'none';
    buttonOpen.style.display = 'block';
    dropContent.style.display = 'none';
}

buttonOpen.addEventListener('click', (e)=>{
    e.preventDefault();
    buttonOpen.style.display = 'none';
    buttonClose.style.display = 'block';
    dropContent.style.display = 'flex';
})

buttonClose.addEventListener('click', (e)=>{
    e.preventDefault();
    buttonClose.style.display = 'none';
    buttonOpen.style.display = 'block';
    dropContent.style.display = 'none';
})

aBenefits.forEach(benefits => {
    benefits.addEventListener('click', (e) =>{
        e.preventDefault();
        closeMenu()
        benefitsSection.scrollIntoView({ behavior: 'smooth'});
    });
});

aSpecification.forEach(specification => {
    specification.addEventListener('click', (e) =>{
        e.preventDefault();
        closeMenu()
        specificationsTable.scrollIntoView({ behavior: 'smooth'});
    });
});

aHowto.forEach(howto => {
    howto.addEventListener('click', (e) =>{
        e.preventDefault();
        closeMenu()
        howItWorksSection.scrollIntoView({ behavior: 'smooth'});
    });
});

aContactUs.forEach(contactus =>{
    contactus.addEventListener('click', (e) => {
        e.preventDefault();
        closeMenu()
        centeredCta.scrollIntoView({ behavior: 'smooth'});
    });
});