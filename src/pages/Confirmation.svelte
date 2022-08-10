<script>
  import { courses } from '../stores/courses'
  import { useNavigate } from 'svelte-navigator'

  let name = ''
  let email = ''
  let age = 0

  $: disabled = !(name !== '' && /^\S+@\S+\.\S+$/.test(email))

  const navigator = useNavigate()

  function submit() {
    courses.set([])
    navigator('/')
  }
</script>

<div class="container my-20">
  <div class="border-b pb-10 mb-10 space-y-2">
    <div>Name : {name}</div>
    <div>Email : {email}</div>
    <div>Age : {age}</div>
    <div class="flex items-center">
      Select :
      <ul class="flex flex-wrap ml-4">
        {#each $courses as course}
          <li class=" bg-cyan-500 px-2 py-px rounded-lg mr-1 mb-1">
            {course}
          </li>
        {/each}
      </ul>
    </div>
  </div>
  <form class="space-y-4" on:submit|preventDefault={submit}>
    <div>
      <label for="name">Name</label>
      <input
        class="input"
        id="name"
        type="text"
        placeholder="your name"
        bind:value={name}
      />
    </div>
    <div>
      <label for="email">Email</label>
      <input
        id="email"
        class="input"
        type="email"
        placeholder="your email"
        bind:value={email}
      />
    </div>
    <div>
      <label for="age">Age</label>
      <input
        id="age"
        class="input"
        placeholder="your age"
        type="age"
        bind:value={age}
      />
    </div>
    <button
      type="submit"
      class="bg-cyan-700 px-4 py-2 rounded-full text-white"
      class:disabled
    >
      SUBMIT
    </button>
  </form>
</div>

<style>
  .input {
    @apply border border-gray-500 p-2 rounded-lg text-black w-full outline-none;
  }

  .input:focus {
    @apply border border-cyan-600;
  }

  button.disabled {
    @apply bg-gray-500 bg-opacity-30 pointer-events-none;
  }
</style>
