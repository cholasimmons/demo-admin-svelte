<script lang="ts">
	import { onMount } from 'svelte';
	import Header from '../components/Header.svelte';
	import Main from '../components/Main.svelte';
	import Sidebar from '../components/Sidebar.svelte';
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

    $: sidebarClass = $isSidebarOpen ? 'sidebar-open' : '';
    
</script>

<style lang="postcss">
    :global(html) {
      background-color: var(--background-color);
      color: var(--text-color)
    }

    .container {
      display: flex;
      min-height: 100vh;
      transition: margin-left 0.3s;
    }
  
    .sidebar-open .container {
      margin-left: 240px; /* Adjust this based on your sidebar width */
    }
  
    .main-content {
      flex: 1;
      padding: 20px;
    }
  </style>

<div class={sidebarClass}>
    <Sidebar />
    <div class="container">
      <Header />
      
      <Main />
    </div>
</div>