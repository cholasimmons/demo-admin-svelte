<script lang="ts">
    import { isSidebarOpen } from '../stores/app_store';
  </script>
  
  <style>
    .header {
      background-color: var(--primary-color);
      color: var(--text-color);
      padding: var(--padding);
      /* background-color: #333;
      color: white;
      padding: 1rem; */
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 10;
      display: flex;
      align-items: center;
    }
  
    .menu-button {
      background: none;
      border: none;
      color: var(--text-color);
      cursor: pointer;
      font-size: 1.2rem;
      margin-right: var(--margin);
    }
  </style>
  
  <div class="header">
    <button class="menu-button" on:click={() => $isSidebarOpen = !$isSidebarOpen}>
      ☰
    </button>
    <span>Admin Dashboard</span>
  </div>
  