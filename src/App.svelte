<script>
  import Card from './lib/Card.svelte'

  let list = [1, 2, 3, 4]
</script>

<div class="container my-20">
  <div class="grid grid-cols-4 gap-6">
    {#each list as item}
      <Card />
    {/each}
  </div>
</div>
