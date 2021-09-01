<script>
  import Product from "./Product.svelte";
  import Modal from "./Modal.svelte";

  let products = [
    {
      id: "p1",
      title: "A book",
      price: 9.99,
      bestseller: true,
    },
    {
      id: "p2",
      title: "A pencil",
      price: 2.99,
    },
  ];

  function addToCart(evt) {
    console.log(evt.type, evt.detail);
  }

  function deleteProduct(evt) {
    console.log(evt.type, evt.detail);
  }
</script>

{#each products as product (product.id)}
  <Product
    {...product}
    on:add-to-cart={addToCart}
    on:delete-product={deleteProduct}
  />
{/each}

<Modal>
  <h1 slot="header">Hello World !</h1>
  <p>Here I am !</p>
  <button slot="footer">Confirm</button>
</Modal>
