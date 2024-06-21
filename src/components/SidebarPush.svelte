<script lang="ts">
	import { onMount } from 'svelte';

  // Export the `class` prop to receive from the parent component
  export const klass:string = '';
  
  import { isSidebarOpen } from '../stores/app_store';

  onMount(() => {
    // TODO: Implement way to prevent sidebar from popping into view on initial-load
  })
  
    const handleLinkClick = () => {
      if (window.innerWidth < 768) {
        isSidebarOpen.set(false);
      }
    };
</script>
  
<style>
  .sidebar-push {
    width: 280px;
    transition: transform 0.3s ease-in-out;
    transform: translateX(-280px); /* Initially hidden */
  }

  .sidebar-push-open {
    transform: translateX(0);
  }
</style>
  
  <aside class="sidebar-push bg-gray-800 text-white min-h-full mt-16 p-8"
    class:sidebar-push-open={$isSidebarOpen}>
    <nav>
      <ul class="list-none gap-y-4 flex flex-col">
        <li><a href="/" on:click={handleLinkClick}>Dashboard</a></li>
        <li><a href="2" on:click={handleLinkClick}>Settings</a></li>
        <li><a href="3" on:click={handleLinkClick}>Profile</a></li>
      </ul>
    </nav>
  </aside>
  