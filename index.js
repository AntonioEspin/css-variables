const inpunts = document.querySelectorAll('.controls input');

function handleValues () {
  const sufijo = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${sufijo}`)
};

inpunts.forEach(input => input.addEventListener('change', handleValues))
inpunts.forEach(input => input.addEventListener('mousemove', handleValues))