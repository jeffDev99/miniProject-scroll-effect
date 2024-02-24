let $ = document;
let navabarEl = $.querySelector("#navabar");
let lastScrollTop = 0;
window.addEventListener("scroll", (e) => {
  scrollTop = $.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navabarEl.style.top = "-80px";
  } else {
    navabarEl.style.top = "0px";
  }
  lastScrollTop = scrollTop;
});
