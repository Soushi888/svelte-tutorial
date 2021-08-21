<script>
  import CourseGoal from "./CourseGoal.svelte";

  let courseGoal = "";
</script>


<label for="course-goal">Course Goal : </label><input type="text" id="course-goal" bind:value={courseGoal}>

<CourseGoal {courseGoal}/>
