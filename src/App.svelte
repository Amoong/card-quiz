<script lang="ts">
  import refresh from "/refresh.svg";
  import { HIRAGANA } from "./constants/characters";
  import Question from "./lib/Question.svelte";
  import { createRandomPicker } from "./utils/pick-random";

  const pickRandom = createRandomPicker(HIRAGANA);

  let pickedHiragana = pickRandom();

  const onClick = () => {
    pickedHiragana = pickRandom();
  };
</script>

<main>
  <h1>Hiragana Quiz</h1>

  <div class="card">
    <Question text={pickedHiragana} />
  </div>
  <button on:click={onClick}>
    <img src={refresh} class="logo" alt="Vite Logo" />
  </button>
</main>

<style>
</style>
