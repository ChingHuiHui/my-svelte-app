<script>
  import Card from './lib/Card.svelte'

  let list = [
    { title: 'Frontend Course', name: 'Charles', date: '2022-08-20' },
    { title: 'Backend Course', name: 'Bo', date: '2022-08-31' },
    { title: 'App Course', name: 'Jason', date: '2022-09-01' },
    { title: 'Full Stack Course', name: 'huihui', date: '2022-09-06' },
    { title: 'DevOps Course', name: 'Sasaya', date: '2022-09-18' },
  ]
</script>

<div class="container my-20">
  <div class="grid grid-cols-4 gap-6">
    {#each list as item}
      <Card />
    {/each}
  </div>
</div>
