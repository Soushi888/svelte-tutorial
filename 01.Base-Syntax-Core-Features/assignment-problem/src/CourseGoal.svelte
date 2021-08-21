<script>
  export let courseGoal;

  $: hasExclamation = courseGoal.includes('!');
</script>

<h1 class:exclamation={hasExclamation}>{courseGoal}</h1>

<style>
    .exclamation {
        color: red;
    }
</style>
