const product1 = {
  image: 'images/destniklobouk.jpg',
  name: 'Deštníklobouk',
  description:
    'Vynikající pokud si často zapomínáte deštník a nechcete být nikdy překvapeni nečekanou přeháňkou.',
};

const product2 = {
  image: 'images/slepickabelka.jpg',
  name: 'Slepičkabelka',
  description:
    'Nejlepší způsob jak zaujmout neotřelou módou v ulíčkách kolem Staroměstkého náměstí.',
};

const product3 = {
  image: 'images/anatoplavky.jpg',
  name: 'Anatoplavky',
  description:
    'Aby muži na rozpálených plážích kromě vašeho těla obdivovali také vaše nitro.',
};

// PRVNÍ ČÁST
const p1 = document.querySelector('#product1');
p1.classList.add('border-primary');
/*
const p2 = document.querySelector('#product2 button');
p2.classList.remove('btn-primary');

const p3 = document.querySelector('#product3 .card-title');
p3.classList.toggle('text-center'); //na střed
*/
//DRUHÁ ČÁST

const product1HTML = `
<img class="card-img-top" src=${product1.image} alt="Card image cap">
  <div class="card-body">
    <h2 class="card-title">${product1.name}</h2>
    <p class="card-text">${product1.description}</p>
  </div>
  <button type="button" class="btn btn-lg btn-primary btn-block">Koupit</button>`;

const p1Element = document.querySelector('#product1');
p1Element.innerHTML = product1HTML;

const product2HTML = `
<img
            class="card-img-top"
            src=${product2.image}
            alt="Slepičkabelka"
          />
          <div class="card-body">
            <h2 class="card-title">${product2.name}</h2>
            <p class="card-text">
             ${product2.description}
            </p>
          </div>
          <button type="button" class="btn btn-lg btn-primary btn-block">
            Koupit</button>`;
const p2Element = document.querySelector('#product2');
p2Element.innerHTML = product2HTML;

const product3HTML = `
 <img class="card-img-top" src=${product3.image} alt="Anatoplavky">
          <div class="card-body">
            <h2 class="card-title">${product3.name}</h2>
            <p class="card-text">${product3.description}</p>
          </div>
          <button type="button" class="btn btn-lg btn-primary btn-block">Koupit</button>
`;
const p3Element = document.querySelector('#product3');
p3Element.innerHTML = product3HTML;
