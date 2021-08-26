<script>
  import ContactCard from "./ContactCard.svelte";

  let name = "Sacha Pignot";
  let title = "";
  let image = "";
  let description = "";
  let formState = "empty";

  let createdContacts = [];

  function addContact() {
    if (name.trim().length === 0 ||
      title.trim().length === 0 ||
      image.trim().length === 0 ||
      description.trim().length === 0
    ) {
      formState = 'invalid';
      return;
    }

    createdContacts = [...createdContacts, {name, jobTitle: title, imageUrl: image, desc: description}];
    formState = "done";
    console.log(createdContacts);
  }

  function deleteFirst() {
    console.log("delete first");
    createdContacts = createdContacts.slice(1);
    console.log(createdContacts);
  }

  function deleteLast() {
    console.log("delete last");
    createdContacts = createdContacts.slice(0, -1);
    console.log(createdContacts);
  }
</script>

<style>
    #form {
        width: 30rem;
        max-width: 100%;
    }

    .error {
        color: red;
    }
</style>

<div id="form">
    <div class="form-control">
        <label for="userName">User Name</label>
        <input type="text" bind:value={name} id="userName"/>
    </div>
    <div class="form-control">
        <label for="jobTitle">Job Title</label>
        <input type="text" bind:value={title} id="jobTitle"/>
    </div>
    <div class="form-control">
        <label for="image">Image URL</label>
        <input type="text" bind:value={image} id="image"/>
    </div>
    <div class="form-control">
        <label for="desc">Description</label>
        <textarea rows="3" bind:value={description} id="desc"/>
    </div>
</div>

<button on:click={addContact}>Add Contact Card</button>
<button on:click={deleteFirst}>Delete first</button>
<button on:click={deleteLast}>Delete last</button>

{#if (formState === "done")}
    {#each createdContacts as contact, i (Math.random())}
        <h2>#{i + 1}</h2>
        <ContactCard userName={contact.name} jobTitle={contact.jobTitle} description={contact.desc}
                     userImage={contact.imageUrl} }/>
    {/each}
{:else if (formState === "invalid")}
    <p class="error">Invalid Input.</p>
{:else }
    <p>No card.</p>
{/if}
