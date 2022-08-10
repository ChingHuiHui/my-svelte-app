<script>
  import { Router, Link, Route } from 'svelte-navigator'
  import Confirmation from './pages/Confirmation.svelte'
  import Courses from './pages/Courses.svelte'
</script>

<Router>
  <Route path="/"><Courses /></Route>
  <Route path="/confrimation"><Confirmation /></Route>
</Router>
