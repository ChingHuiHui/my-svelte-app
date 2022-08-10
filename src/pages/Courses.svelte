<script>
  import { Link } from 'svelte-navigator'
  import Card from '../lib/Card.svelte'

  $: list = [
    {
      title: 'Frontend Course',
      name: 'Charles',
      date: '2022-08-20',
    },
    { title: 'Backend Course', name: 'Bo', date: '2022-08-31' },
    { title: 'App Course', name: 'Jason', date: '2022-09-01' },
    { title: 'Full Stack Course', name: 'huihui', date: '2022-09-06' },
    { title: 'DevOps Course', name: 'Sasaya', date: '2022-09-18' },
  ]

  let selected = []

  function selectCourse(title) {
    if (selected.includes(title)) {
      selected = selected.filter((value) => value != title)
      return
    }

    selected = [...selected, title]
  }

  $: showLinkButton = selected.length > 0
</script>

<div class="container my-20">
  <div
    class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 border-b pb-10 mb-10"
  >
    {#each list as item}
      <Card
        {...item}
        on:click={() => selectCourse(item.title)}
        isSelected={selected.includes(item.title)}
      />
    {/each}
  </div>
  <div class="flex justify-center">
    {#if showLinkButton}
      <Link
        to="/confrimation"
        class="bg-cyan-700 px-4 py-2 rounded-full text-white"
      >
        SUBMIT
      </Link>
    {:else}
      <p class="text-red-500">Please choose one course...</p>
    {/if}
  </div>
</div>
