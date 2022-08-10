<script>
  export let title
  export let name
  export let date
  export let isSelected
</script>

<div class:selected={isSelected} class="card" on:click>
  <div>
    <h2 class="text-2xl font-bold">{title}</h2>
    <div class="text-lg">presenter : {name}</div>
  </div>
  <div class="text-sm">{date}</div>
</div>

<style>
  .card {
    @apply p-4 bg-gray-200 rounded-lg h-32 cursor-pointer hover:border-4 hover:border-teal-400 flex flex-col justify-between;
  }

  .card.selected {
    @apply border-4 border-teal-600;
  }
</style>
