<script>
  import CartItem from "./CartItem.svelte";
  import cart from "../stores/cart-store";
  import { onDestroy } from "svelte";
  import { timer } from "../stores/timer-store";
  import { time, elapsed } from "../stores/time-store";

  const unsubscribe = timer.subscribe((count) => {
    console.log(`Cart : ${count}`);
  });

  onDestroy(() => {
    if (unsubscribe) unsubscribe();
  });
</script>

<section>
  <h1>Cart</h1>
  <h2>Count : {$timer}</h2>
  <h2>Date : {$time}</h2>
  <h2>Elapsed Date : {$elapsed}</h2>
  <ul>
    {#each $cart as item (item.id)}
      <CartItem id={item.id} title={item.title} price={item.price} />
    {:else}
      <p>No items in cart yet!</p>
    {/each}
  </ul>
</section>

<style>
  section {
    width: 30rem;
    max-width: 90%;
    margin: 2rem auto;
    border-bottom: 2px solid #ccc;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
