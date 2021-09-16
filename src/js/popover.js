export default class Popover {
  constructor() {
    this.btn = document.querySelector(".btn");
  }

  init() {
    this.btn.addEventListener("click", () => {
        const textContent = this.btn.dataset.content;
        const textTitle = this.btn.dataset.title;
        const popover = document.querySelector(".popover");

        if(popover) {
          popover.remove();
        } else {
          this.btn.insertAdjacentHTML(
            "beforebegin",
            `<div class="popover" style="" ><title class="title-popover">${textTitle}</title><p class="text-popover">${textContent}</p></div>`
          );
          const popover = document.querySelector(".popover");
          popover.style.width = this.btn.offsetWidth + 100 + "px";
          popover.style.top = this.btn.offsetTop - popover.offsetHeight - 10 + "px";
          popover.style.left = this.btn.offsetLeft - 50 + "px";
        }
    });
  }
}