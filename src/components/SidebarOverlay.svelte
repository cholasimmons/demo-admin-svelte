<script lang="ts">
  // Export the `class` prop to receive from the parent component
  export const klass:string = '';
  
  import { isSidebarOpen } from '../stores/app_store';
  
    const handleLinkClick = () => {
      isSidebarOpen.set(false);
    };
  </script>
  
  <style>
    .sidebar-overlay {
      width: 280px;
      transition: transform 0.3s ease-in-out;
      transform: translateX(-280px); /* Initially hidden */
    }
  
    .sidebar-overlay-open {
      transform: translateX(0);
    }
  
    .scrim {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.5);
      z-index: 20;
    }
  </style>
  
  {#if $isSidebarOpen}
    <div class="scrim" on:click={handleLinkClick}></div>
  {/if}
  
  <aside  class=" sidebar-overlay bg-gray-800 text-white h-full fixed inset-y-0 left-0 z-30 p-8 "
    class:sidebar-overlay-open={$isSidebarOpen}>
    <nav>
      <ul class="list-none gap-y-4 flex flex-col">
        <li><a href="/" on:click={handleLinkClick}>Dashboard</a></li>
        <li><a href="2" on:click={handleLinkClick}>Settings</a></li>
        <li><a href="3" on:click={handleLinkClick}>Profile</a></li>
      </ul>
    </nav>
  </aside>
  