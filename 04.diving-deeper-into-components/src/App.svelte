<script>
  import Product from "./Product.svelte";
  import Modal from "./Modal.svelte";
  import { tick } from "svelte";

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

  let text = "Lorem Ipsum...";

  function addToCart(evt) {
    console.log(evt.type, evt.detail);
  }

  function deleteProduct(evt) {
    console.log(evt.type, evt.detail);
  }

  async function transformText(evt) {
    if (evt.keyCode !== 9) {
      return;
    }
    evt.preventDefault();

    const selectionStart = evt.target.selectionStart;
    const selectionEnd = evt.target.selectionEnd;
    const value = evt.target.value;

    text =
      value.slice(0, selectionStart) +
      value.slice(selectionStart, selectionEnd).toUpperCase() +
      value.slice(selectionEnd);

    await tick();
    evt.target.selectionStart = selectionStart;
    evt.target.selectionEnd = selectionEnd;
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

<textarea rows="5" on:keydown={transformText}>{text}</textarea>
