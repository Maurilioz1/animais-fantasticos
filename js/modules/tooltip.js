export default function initTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');
  const tooltipBox = document.createElement('div');

  function createTooltipBox(element) {
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = `${event.pageY + 20}px`;
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    },
  };

  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    },
  };

  function onMouseOver() {
    const tooltip = createTooltipBox(this);

    onMouseMove.tooltipBox = tooltip;
    this.addEventListener('mousemove', onMouseMove);

    onMouseLeave.tooltipBox = tooltip;
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave);
  }

  tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver);
  });
}
