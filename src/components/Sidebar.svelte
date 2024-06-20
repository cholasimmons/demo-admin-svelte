<script lang="ts">
    import { isSidebarOpen } from '../stores/app_store';

    $: sidebarClass = $isSidebarOpen ? 'sidebar-open' : '';

    // $: console.log('Sidebar state:', $isSidebarOpen, sidebarClass);
  </script>
  
  <style >
    .sidebar {
    
      background-color: #444;
      color: var(--text-color);
      padding: var(--padding);
      height: 100%;
      position: fixed;
      top: 0;
      left: -200px; /* Adjust this based on your sidebar width */
      transition: left 0.3s;
      width: 200px;
    }
  
    .sidebar-open .sidebar {
      left: 0;
    }

    ul {
      list-style: none;
      padding: 0;
    }

    li {
      margin: var(--margin) 0;
    }

    a {
      color: var(--text-color);
      text-decoration: none;
    }
  </style>
  
<div class="sidebar sidebar-open {sidebarClass}">
      <h2>Sidebar</h2>
      <ul>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Users</a></li>
        <li><a href="#">Settings</a></li>
      </ul>
</div>
  