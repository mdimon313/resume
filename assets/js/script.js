window.addEventListener('load', () => { 
  document.title = "Mohammd Imon";

  const topBtn = document.querySelector(".back_to_top"),
    header = document.querySelector(".header"),
    open = document.querySelector('#open'),
    close = document.querySelector('#close'),
    navLinks = document.querySelectorAll("#nav_link");

  // Scroll 
  window.addEventListener("scroll", () => {
    const pageY = window.pageYOffset;
    if (pageY > 50) {
      topBtn.style.bottom = "20px";
      topBtn.style.opacity = "1";
    } else {
      topBtn.style.bottom = "-35px";
    }
  });

  topBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    topBtn.style.bottom = "-35px";
  });
  // Scroll end

  // Navigation
  
  function show() {
    open.classList.add('hide');
    close.classList.add('block');
    header.classList.add('rv');
    
  }
  
  function hidden() {
    close.classList.remove('block');
    open.classList.remove("hide");
    header.classList.remove("rv");
  }
  
  open.addEventListener("click", show);
  close.addEventListener("click", hidden);
  // Navigation end

  navLinks.forEach(navLink => {
    navLink.addEventListener("click", () => {
      header.classList.remove("rv");
      close.classList.remove("block");
      open.classList.remove("hide");
    })
  })


 })