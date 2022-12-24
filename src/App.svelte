<script lang="ts">
  import Card from "./lib/Card/index.svelte";
  import Info from "./lib/Info.svelte";
</script>

<main>
  <Info />
  <Card />
</main>

<style lang="scss">
  main {
    width: 600px;
    height: 100%;
    padding: 20px 0;
    margin: auto;

    @media (max-width: 700px) {
      width: 500px;
    }

    @media (max-width: 550px) {
      width: 400px;
    }

    @media (max-width: 450px) {
      width: 300px;
    }
  }
</style>
