<script>
  import "../app.css";
  import Sidebar from "$lib/components/base/Sidebar.svelte";
  import Nav from "$lib/components/base/Nav.svelte";
  import Content from "$lib/components/base/Content.svelte";
  import Auth from "../lib/components/Auth.svelte";
</script>

<div id="page-container" class="grid h-full">
	<Nav />
	<Sidebar />
	<Content>
		<Auth/>
		<slot />
	</Content>
</div>
