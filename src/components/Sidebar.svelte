<script lang="ts">


    import { isSidebarOpen } from '../stores/app_store';

    // Close sidebar on small screens when a link is clicked
    const handleLinkClick = () => {
      if (window.innerWidth < 768) {
        isSidebarOpen.set(false);
      }
    };

    $: sidebarClass = $isSidebarOpen ? 'sidebar-open' : '';

    // $: console.log('Sidebar state:', $isSidebarOpen, sidebarClass);
  </script>
  
  <style lang="postcss">
    .sidebar-overlay {
      transition: transform 0.3s ease-in-out;
    }

    .sidebar-push {
      transition: transform 0.3s ease-in-out;
    }

    li {
      margin: var(--margin) 0;
    }

    a {
      color: var(--text-color);
      text-decoration: none;
    }
  </style>

<aside
  class="fixed inset-y-0 left-0 z-30 w-64 bg-gray-800 text-white transform lg:relative lg:translate-x-0 lg:shadow-lg sidebar-overlay"
  class:translate-x-0={$isSidebarOpen}
  class:-translate-x-full={!$isSidebarOpen}
  >
  <!-- Sidebar content here -->
  <nav>
    <ul>
      <li><a href="#" on:click={handleLinkClick}>Dashboard</a></li>
      <li><a href="#" on:click={handleLinkClick}>Settings</a></li>
      <li><a href="#" on:click={handleLinkClick}>Profile</a></li>
    </ul>
  </nav>
</aside>
  
<!-- <div class="sidebar {sidebarClass}">
      <h2>Sidebar</h2>
      <ul class="p-0 list-none">
        <li><a href="#/">Dashboard</a></li>
        <li><a href="#/">Users</a></li>
        <li><a href="#/">Settings</a></li>
      </ul>
</div>
   -->