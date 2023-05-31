fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    const productContainer = document.getElementById('product-container');

    data.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('card');

      const image = document.createElement('img');
      image.classList.add('card-image');
      image.src = product.image;
      image.alt = 'Product Image';

      const cardContent = document.createElement('div');
      cardContent.classList.add('card-content');

      const title = document.createElement('h2');
      title.classList.add('card-title');
      title.textContent = product.title;

      const description = document.createElement('p');
      description.classList.add('card-description');
      description.textContent = product.description;

      const price = document.createElement('p');
      price.classList.add('card-price');
      price.textContent = '$' + product.price;

      const btn = document.createElement('a');
      btn.classList.add('btn');
      btn.href = '#';
      btn.textContent = 'Read More';

      cardContent.appendChild(title);
      cardContent.appendChild(description);
      cardContent.appendChild(price);
      cardContent.appendChild(btn);

      card.appendChild(image);
      card.appendChild(cardContent);

      productContainer.appendChild(card);
    });
  })
  .catch(error => console.log(error));