<script lang="ts">
  import '../global.css';
  import "../app.css";
	import Sidebar from '../components/Sidebar.svelte';
	import SidebarPush from '../components/SidebarPush.svelte';
	import SidebarOverlay from '../components/SidebarOverlay.svelte';
	import Header from '../components/Header.svelte';
	import Main from '../components/Main.svelte';
  import { onMount } from 'svelte';
  import { isSidebarOpen, screenWidth, theme, updateScreenWidth } from '../stores/app_store';
    
    let currentTheme;

    const unsubscribe = theme.subscribe((value: any) => {
        currentTheme = value;
        if (typeof window !== 'undefined') {
        document.documentElement.setAttribute('data-theme', value);
        }
    });

    onMount(() => {
        // Monitor screen width size
        const handleResize = () => {
            updateScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            unsubscribe();
        };
    });

    // Reactive statement to close sidebar on mobile
    $: if ($screenWidth < 768) {
        isSidebarOpen.set(false);
    }
</script>

<style lang="postcss">
  :global(body) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden; /* Prevent horizontal scrolling */
  }
  :global(html) {
    background-color: var(--background-color);
    color: var(--text-color)
  }
  main {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .content-container {
    display: flex;
    flex: 1;
    overflow: hidden;
  }
  .main-content {
    flex: 1;
    padding: var(--padding);
    transition: margin-left 0.3s ease-in-out;
    margin-top: 4rem;
  }
  @media (min-width: 768px) {
    .sidebar-open {
      margin-left: -280px; /* Adjust main content margin when sidebar is open */
    }
  }
</style>
  
<main>
  <Header  />
  <div class="content-container ">
    {#if $screenWidth >= 768}
      <SidebarPush />
    {:else}
      <SidebarOverlay />
    {/if}
    <div class="main-content " class:sidebar-open={!$isSidebarOpen} >
      <slot />
    </div>
  </div>
</main>