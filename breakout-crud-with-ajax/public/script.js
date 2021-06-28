$(() => {
  const loadProducts = () => {
    // fetch the products
    $.get('/products')
      .then((products) => {
        // console.log(products);
        renderProducts(products.reverse());
      });
  };

  const createProductElement = (product) => {
    const $product = $(`
      <div class="product">
        <h2>Product Name: ${product.product_name}</h2>
        <h3>Price: $${product.price}</h3>
      </div>
    `);

    const $editForm = $(`
      <form>
        <label for="product-name">Product Name:</label>
        <input name="productName" id="product-name" value="${product.product_name}" />
        <br/>

        <label for="price">Price:</label>
        <input name="price" id="price" value="${product.price}" />
        <br/>

        <button type="submit">Update!</button>
      </form>
    `);

    $editForm.submit(function () {
      const data = $(this).serialize();
      // const data = $editForm.serialize();

      $.post(`/products/${product.id}`, data)
        .then(() => {
          loadProducts();
        });
    });


    const $deleteButton = $('<button>Delete</button>')
      .click(() => {
        $.post(`/products/${product.id}/delete`)
          .then(() => {
            loadProducts();
          });
      });

    $product.append($editForm, $deleteButton);

    return $product;
  };

  const renderProducts = (products) => {
    const $productList = $('#product-list');
    $productList.empty();

    for (const product of products) {
      $productList.append(createProductElement(product));
    }
  };

  loadProducts();

  const $newProductForm = $('#new-product');

  $newProductForm.submit(function (event) {
    event.preventDefault();
    const data = $(this).serialize(); // productName=Frozen+Berries&price=10.99

    $.post('/products', data)
      .then(() => {
        loadProducts();
        $newProductForm[0].reset();
      });
  });

});
