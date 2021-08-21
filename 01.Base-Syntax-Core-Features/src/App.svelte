<script>
  import ContactCard from "./ContactCard.svelte";

  let image = "https://avatars.githubusercontent.com/u/29674937?s=400&u=b6c37ee87cc8ed4d5d1205cf8ad53b5f33cea6df&v=4";
  let userName = "Sacha";
  let jobTitle = "Software architect"
  let description = "I am specialized in distributed architectures and collective intelligence.";
</script>


<label for="image">Image : </label><input id="image" type="text" bind:value={image}><br>
<label for="name">Name : </label><input id="name" type="text" bind:value={userName}><br>
<label for="jobTitle">Job Title : </label><input id="jobTitle" type="text" bind:value={jobTitle}><br>
<label for="description">Description : </label><textarea name="description" id="description" cols="50" rows="3"
                                                         bind:value={description}></textarea>

<ContactCard {userName} {jobTitle} {image} {description}/>


<style>
    h1 {
        color: purple;
    }

    #image {
        width: 500px;
    }
</style>
