import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numerp-animal');
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;

    return div;
  }

  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    const numerosGrid = document.querySelector(target);
    numerosGrid.appendChild(divAnimal);
  }

  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  async function criarAnimais() {
    try {
      // Fetch e espera resposta
      const animaisResponse = await fetch(url);
      // Transforma a resposta em JSON
      const animaisJson = await animaisResponse.json();
      animaisJson.forEach((animal) => preencherAnimais(animal));
      animaAnimaisNumeros();
    } catch (e) {
      console.log(e);
    }
  }

  return criarAnimais();
}
