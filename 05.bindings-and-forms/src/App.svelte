<script>
  import CustomInput from "./CustomInput.svelte";
  import Toggle from "./Toggle.svelte";
  import { isValidEmail } from "./validation";

  let price = 0;
  let val = "Sacha";
  let selectedOption = 1;
  let agreed = false;
  let usernameInput;
  let customInput;

  let enteredEmail = "";
  let formIsValid;

  let favColorCheckbox = ["blue", "red"];
  let favColorRadio = "green";
  let favColorSelect = "red";

  $: console.log(val);
  $: console.log(price);
  $: console.log(agreed);
  $: console.log(favColorRadio);
  $: console.log(favColorCheckbox);
  $: console.log(favColorSelect);
  $: console.log(customInput);

  $: formIsValid = isValidEmail(enteredEmail);

  function saveData() {
    console.log(usernameInput.value);
    val = "";
  }
</script>

<h1>Bindings and Forms</h1>
<h2>{val}</h2>

<CustomInput bind:val bind:this={customInput} />
<Toggle bind:chosenOption={selectedOption} />
<input type="number" bind:value={price} />

<hr />

<!-- Checkbox -->
<label>
  Agree to terms ?
  <input type="checkbox" bind:checked={agreed} />
</label>

<!-- Group radio -->
<h2>Favorite Colour ?</h2>
<label>
  <input type="radio" name="color" value="red" bind:group={favColorRadio} /> Red
</label>
<label>
  <input type="radio" name="color" value="green" bind:group={favColorRadio} /> Green
</label>
<label>
  <input type="radio" name="color" value="blue" bind:group={favColorRadio} /> Blue
</label>

<!-- Group checkbox -->
<h2>Favorite Colour ?</h2>
<label>
  <input
    type="checkbox"
    name="color"
    value="red"
    bind:group={favColorCheckbox}
  /> Red
</label>
<label>
  <input
    type="checkbox"
    name="color"
    value="green"
    bind:group={favColorCheckbox}
  /> Green
</label>
<label>
  <input
    type="checkbox"
    name="color"
    value="blue"
    bind:group={favColorCheckbox}
  /> Blue
</label>

<!-- Select -->
<select bind:value={favColorSelect}>
  <option value="green">Green</option>
  <option value="red">Red</option>
  <option value="blue">Blue</option>
</select>

<hr />

<input type="text" bind:this={usernameInput} />
<button on:click={saveData}>Save</button>

<hr />

<form on:submit|preventDefault>
  <label for="email">
    Email : <input
      type="email"
      id="email"
      bind:value={enteredEmail}
      class:invalid={!isValidEmail(enteredEmail)}
    />
  </label>
  <button type="submit" disabled={!formIsValid}>Submit</button>
</form>

<style>
  .invalid {
    border: red 2px solid;
    outline: none;
  }
</style>
