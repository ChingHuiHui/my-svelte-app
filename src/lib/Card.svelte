<script>
  export let title
  export let name
  export let date
</script>

<div
  class="p-4 bg-gray-200 rounded-lg h-32 cursor-pointer hover:border-4 hover:border-teal-600 flex flex-col justify-between"
>
  <div>
    <h2 class="text-2xl font-bold">{title}</h2>
    <div class="text-lg">presenter : {name}</div>
  </div>
  <div class="text-sm">{date}</div>
</div>
