<script>
  import {
    createEventDispatcher,
    onMount,
    onDestroy,
    beforeUpdate,
    afterUpdate,
  } from "svelte";

  const dispatch = createEventDispatcher();
  let agreed = false;
  let autoScroll = false;

  function closeModal() {
    dispatch("close-modal");
  }

  function closeWithKeyDown(evt) {
    if (evt.key === "Escape") closeModal();
  }

  if (document.onkeydown) {
    console.log();
  }

  /* Component life cycle */
  console.log("Script executed.");

  onMount(() => {
    console.log("On Mount.");
  });

  onDestroy(() => {
    console.log("On destroy.");
  });

  beforeUpdate(() => {
    console.log("Before update.");
    autoScroll = agreed;
  });

  afterUpdate(() => {
    console.log("After update.");
    if (autoScroll) {
      const modal = document.querySelector(".modal");
onDestroy(() => uns)      modal.scrollTo(0, modal.scrollHeight);
    }
  });
</script>

<svelte:window on:keydown={closeWithKeyDown} />
<div class="backdrop" on:click={closeModal} />
<div class="modal">
  <header>
    <slot name="header" />
  </header>
  <div class="content">
    <slot />
  </div>
  <div class="disclaimer">
    <p>Before you close, you have to agree to our terms !</p>
    <button on:click={() => (agreed = true)}>Agree</button>
  </div>
  <footer>
    <slot name="footer" didAgree={agreed}>
      <button on:click={closeModal} disabled={!agreed}>Close</button>
    </slot>
  </footer>
</div>

<style>
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    z-index: 10;
  }

  .modal {
    padding: 1rem;
    position: fixed;
    top: 10vh;
    left: 10%;
    width: 80%;
    max-height: 20vh;
    background: white;
    border-radius: 5px;
    z-index: 100;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    overflow-y: scroll;
  }

  header {
    border-bottom: 1px solid gray;
  }
</style>
