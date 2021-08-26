<script>
  let passwordInput = "";
  let passwordError = "";
  let passwordList = [];

  function addPassword() {
    if (passwordInput.length >= 5 && passwordInput.length <= 10) passwordList = [...passwordList, passwordInput];
    console.log(passwordList);
  }

  function deletePassword(index) {
    passwordList = passwordList.filter((pw, idx) => index !== idx)
  }
</script>

<label for="password">Password : <input type="password" id="password" bind:value={passwordInput}></label>

{#if (passwordInput.length < 5 && passwordInput.length > 0)}
    <p class="error">Too short.</p>
{:else if (passwordInput.length > 10)}
    <p class="error">Too long.</p>
{:else }
    <p>{passwordInput}</p>
{/if}

<button on:click={addPassword}>Add to the list</button>

<ul>
    {#each passwordList as password, i (i)}
        <li id={i} on:click={deletePassword.bind(this, i)}>{i + 1} - <span>{password}</span></li>
    {/each}
</ul>

<style>
    .error {
        color: red;
    }

    span {
        cursor: pointer;
    }
</style>
