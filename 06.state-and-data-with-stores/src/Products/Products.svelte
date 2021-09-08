<script>
  import productsStore from "../stores/products-store";
  import Product from "../Products/Product.svelte";

  let products;

  productsStore.subscribe((i) => {
    products = i;
  });
</script>

<section>
  <h1>Products</h1>
  {#each products as product (product.id)}
    <Product
      id={product.id}
      title={product.title}
      price={product.price}
      description={product.description}
    />
  {/each}
</section>

<style>
  section {
    width: 30rem;
    max-width: 90%;
    margin: 2rem auto;
  }
</style>
