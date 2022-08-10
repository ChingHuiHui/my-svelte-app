<script>
  let name = ''
  let email = ''
  let age = 0
</script>

<div class="container my-20">
  <div class="border-b pb-10 mb-10 space-y-2">
    <div>Name : {name}</div>
    <div>Email : {email}</div>
    <div>Age : {age}</div>
  </div>
  <form class="space-y-4">
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
  </form>
</div>

<style>
  .input {
    @apply border border-gray-500 p-2 rounded-lg text-black w-full outline-none;
  }

  .input:focus {
    @apply border border-cyan-600;
  }
</style>
