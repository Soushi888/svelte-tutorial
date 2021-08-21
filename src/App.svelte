<script>
  import ContactCard from "./ContactCard.svelte";

  let age = 28;
  let name = "Sacha"https://embed-ssl.wistia.com/deliveries/1728b1fca23dc72cf736828c0da20279ddb05525.jpg?image_crop_resized

  $: uppercaseName = name.toUpperCase();
  $: console.log(name);

  const incrementAge = () => age++;
</script>

<style>
    h1 {
        color: purple;
    }
</style>

<h1>Hello {uppercaseName} ! You age is {age} !</h1>
<button on:click={incrementAge}>Happy birthday !</button>

<input type="text" bind:value={name}>

<ContactCard name="{name}"/>
