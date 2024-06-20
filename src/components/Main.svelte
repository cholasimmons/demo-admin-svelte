<script lang="ts">
  import { setTheme, theme, toggleTheme } from '../stores/app_store';

  const onChangeTheme = (e: Event) => {
    setTheme((e.target as HTMLSelectElement).value)
	}
</script>

<style>
    .main-content {
      margin-top: 4rem; /* Adjust based on header height */
      padding: 1rem;
    }

    .theme-selector {
    margin: var(--margin);
  }
</style>
  
<div class="main-content">
    <h1 class="text-3xl font-bold">Welcome to SvelteKit</h1>
    <p>Visit <a href="https://kit.svelte.dev" class="link">kit.svelte.dev</a> to read the documentation</p>

    <br>
    <button on:click={toggleTheme}>
      Toggle Dark Mode
    </button>

    <div class="theme-selector">
      <label for="theme">Choose a theme: </label>
      <!-- @ts-ignore -->
      <select id="theme" on:change={onChangeTheme}>
        <option value="default">Default</option>
        <option value="dark">Dark</option>
        <option value="compact">Compact</option>
        <option value="vibrant">Vibrant</option>
      </select>
    </div>
</div>
  