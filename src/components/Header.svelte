<script lang="ts">
    import { isSidebarOpen } from '../stores/app_store';
</script>
  
  <style lang="postcss">
    header {
      background-color: var(--primary-color);
      color: var(--title-color);
      padding: var(--padding);
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 10;
    }
  
    .menu-button {
      background: none;
      border: none;
      color: var(--title-color);
      cursor: pointer;
      font-size: 1.4rem;
      font-weight: 600;
      margin-right: var(--margin);
    }
    ul li a {
      background-color: var(--title-color);
      width: 36px; height: 36px;
      padding: 6px;
      border-radius: 50%;
    }
    ul li:hover a {
      background-color: var(--background-color);
    }
  </style>
  
  <header class="header">
    <nav class="flex justify-between items-center">
      <div class="flex gap-x-4 items-center">
        <button class="menu-button" on:click={() => $isSidebarOpen = !$isSidebarOpen}>☰</button>

        <p class=" font-normal text-lg">Admin Dashboard</p>
      </div>
      

      <ul class="list-none flex flex-row gap-x-4">
        <li><a href="1">👍🏻</a></li>
        <li><a href="2">😎</a></li>
        <li><a href="3">🦙</a></li>
        <li><a href="4">🤖</a></li>
      </ul>
    </nav>
    
  </header>
  