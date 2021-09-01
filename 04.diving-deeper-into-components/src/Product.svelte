<script>
  import { createEventDispatcher } from "svelte";

  export let title, price, id, bestseller = false;

  const dispatch = createEventDispatcher();

  function addToCart() {
    dispatch("add-to-cart", { title, price, id });
  }

  function deleteProduct() {
    dispatch("delete-product", { title, price, id });
  }
</script>

<article>
  <h1>{title}</h1>
  <h2>{price}$</h2>
  {#if bestseller}
    <h3>{"Bestseller".toUpperCase()}</h3>
  {/if}
  <button on:click={addToCart}>Add to cart</button>
  <button on:click={deleteProduct}>Delete</button>
</article>
