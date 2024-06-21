<script lang="ts">
  import { setTheme, theme, toggleTheme, isSidebarOpen } from '../stores/app_store';

  const onChangeTheme = (e: Event) => {
    setTheme((e.target as HTMLSelectElement).value)
	}
</script>

<style lang="postcss">
  .theme-selector {
    margin-top: var(--margin);
  }
  .theme-selector select {
    background-color: var(--background-color);
    padding: 4px;
    border: 0; outline: 0;
  }
</style>
  
<main class="flex-1 p-6 transition-margin duration-300 w-full">
    <h1 class="text-3xl font-bold">Demo Admin Dashboard | SvelteKit</h1>
    <p>Visit <a href="https://kit.svelte.dev" class="link">kit.svelte.dev</a> to read the documentation</p>

    <br>
    <button on:click={toggleTheme}>
      Switch to <strong>{$theme === 'default' ? 'Dark Mode' : 'Light Mode'}</strong>
    </button>

    <div class="theme-selector">
      <label for="theme">Choose a theme: </label>
      <!-- @ts-ignore -->
      <select id="theme" on:change={onChangeTheme}>
        <option value="">Select...</option>
        <option value="compact">Compact</option>
        <option value="vibrant">Vibrant</option>
      </select>
    </div>

    <div class="container mx-auto mt-16">
      <!-- Grid layout for large screens and single column for small screens -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="bg-blue-500 text-white p-4 rounded">
          <h3 class="text-xl font-bold">Div 1</h3>
          <p>This is a responsive div.</p>
        </div>
        <div class="bg-green-500 text-white p-4 rounded">
          <h3 class="text-xl font-bold">Div 2</h3>
          <p>This is a responsive div.</p>
        </div>
        <div class="bg-red-500 text-white p-4 rounded">
          <h3 class="text-xl font-bold">Div 3</h3>
          <p>This is a responsive div.</p>
        </div>
        <div class="bg-yellow-500 text-white p-4 rounded">
          <h3 class="text-xl font-bold">Div 4</h3>
          <p>This is a responsive div.</p>
        </div>
      </div>
    </div>
  </main>
  