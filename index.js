const product1 = {
  image: 'images/destniklobouk.jpg',
  name: 'Deštníklobouk',
  description: 'Vynikající pokud si často zapomínáte deštník a nechcete být nikdy překvapeni nečekanou přeháňkou.',
};

const product2 = {
  image: 'images/slepickabelka.jpg',
  name: 'Slepičkabelka',
  description: 'Nejlepší způsob jak zaujmout neotřelou módou v ulíčkách kolem Staroměstkého náměstí.',
};

const product3 = {
  image: 'images/anatoplavky.jpg',
  name: 'Anatoplavky',
  description: 'Aby muži na rozpálených plážích kromě vašeho těla obdivovali také vaše nitro.',
};

const product1Content = `
  <img class="card-img-top" src=${product1.image} alt="Card image cap">
  <div class="card-body">
    <h2 class="card-title">${product1.name}</h2>
    <p class="card-text">${product1.description}</p>

  </div>
  <button type="button" class="btn btn-lg btn-primary btn-block">Koupit</button>
`;


const product1El = document.querySelector('#product1');

product1El.classList.add('border-primary');

product1El.innerHTML += product1Content;

const product2Button = document.querySelector('#product2 button');

product2Button.classList.remove('btn-primary');
console.log(product2Button);

const product3Title = document.querySelector('#product3 .card-title');

product3Title.classList.toggle('text-center');
// product3Title.classList.toggle('text-center');
