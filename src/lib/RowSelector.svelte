<script lang="ts">
  interface Row {
    label: string;
    checked: boolean;
  }

  export let rows: readonly Row[];
</script>

<div class="row-selector">
  <ul>
    {#each rows as { label, checked }}
      <li><input type="checkbox" {checked} /> {label}</li>
    {/each}
  </ul>
</div>

<style>
  ul {
    font-size: 15px;
  }
</style>
