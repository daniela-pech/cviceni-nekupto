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

const p1 = document.querySelector('#product1');
p1.classList.add('border-primary');

const p2 = document.querySelector('#product2 button');
p2.classList.remove('btn-primary');

const p3 = document.querySelector('#product3 .card-title');
p3.classList.toggle('text-center'); //na střed
p3.classList.toggle('text-center'); //na střed se zruší
p3.classList.toggle('text-center'); // na střed se opět zavolá
