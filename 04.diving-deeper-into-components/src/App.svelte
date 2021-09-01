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

  let showModal = false;
  let closeable = false;

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

<button on:click={() => (showModal = true)}>Show Modal</button>

{#if showModal}
  <Modal on:close-modal={() => (showModal = false)} let:didAgree={closeable}>
    <h1 slot="header">Hello World !</h1>
    <p>Here I am !</p>
    <button
      slot="footer"
      on:click={() => (showModal = false)}
      disabled={!closeable}
      >Confirm
    </button>
  </Modal>
{/if}
