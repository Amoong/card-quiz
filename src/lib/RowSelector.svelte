<script lang="ts">
  interface Row {
    label: string;
    checked: boolean;
  }

  export let rows: Row[];
</script>

<div class="row-selector">
  <ul>
    {#each rows as row}
      <li>
        <button
          class:checked={row.checked}
          on:click={() => (row.checked = !row.checked)}>{row.label}</button
        >
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  ul {
    width: 250px;
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }

  li {
    display: flex;
    align-items: center;
  }

  button {
    opacity: 0.5;
    font-size: 20px;
    background-color: dodgerblue;
    color: white;
    transition: opacity 0.1s ease-in-out;
    &.checked {
      opacity: 1;
    }
  }
</style>
