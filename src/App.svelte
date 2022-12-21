<script lang="ts">
  import Card from "./lib/Card.svelte";
import Info from "./lib/Info.svelte";


</script>

<main>
  <Info/>
  <Card/>
</main>

<style lang="scss">
  main {
    width: 600px;
    height: 100%;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
</style>
