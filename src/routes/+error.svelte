<script lang="ts">

    import { page } from '$app/stores';

</script>

<div class=" h-5/6 flex items-center gap-x-3 justify-center">
    <p class="text-2xl font-semibold">404</p>
    
    <span class="text-2xl font-light text-slate-400">| {$page.error?.message ?? 'Unknown Error'}</span>
</div>
