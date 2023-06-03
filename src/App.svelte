<script lang="ts">
  import Question from "./lib/Question.svelte";
  import { createRandomPicker } from "./utils/pick-random";
  import { HIRAGANA } from "./constants/characters";
  import { onMount, onDestroy } from "svelte";
  import RowSelector from "./lib/RowSelector.svelte";

  const pickRandom = createRandomPicker(HIRAGANA);

  let pickedHiragana = pickRandom();
  let buttonElem: HTMLElement | undefined;
  let rotate = false;

  onMount(() => {
    buttonElem = document.getElementById("card-refresh-btn");

    buttonElem?.addEventListener("animationend", removeRotate);
  });

  onDestroy(() => {
    buttonElem?.removeEventListener("animationend", removeRotate);
  });

  const onClick = () => {
    rotate = true;

    pickedHiragana = pickRandom();
  };

  const removeRotate = () => {
    rotate = false;
  };

  const rows = [
    { label: "あ", checked: true },
    { label: "か", checked: true },
    { label: "さ", checked: true },
    { label: "た", checked: true },
    { label: "な", checked: true },
    { label: "は", checked: true },
    { label: "ま", checked: true },
    { label: "や", checked: true },
    { label: "ら", checked: true },
    { label: "わ", checked: true },
    { label: "ん", checked: true },
  ];
</script>

<main>
  <h1>Hiragana Quiz</h1>

  <div class="card">
    <Question text={pickedHiragana} />
  </div>
  <button
    style:transform={"rotate(360deg)"}
    id="card-refresh-btn"
    class:rotate
    on:click={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      ><path
        d="M12 0c3.31 0 6.291 1.353 8.459 3.522l2.48-2.48 1.061 7.341-7.437-.966 2.489-2.489c-1.808-1.807-4.299-2.928-7.052-2.928-5.514 0-10 4.486-10 10s4.486 10 10 10c3.872 0 7.229-2.216 8.89-5.443l1.717 1.046c-2.012 3.803-6.005 6.397-10.607 6.397-6.627 0-12-5.373-12-12s5.373-12 12-12z"
      /></svg
    >
  </button>
  <RowSelector {rows} />
</main>

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-top: 20vh;
    margin-top: 20dvh;
  }

  h1 {
    font-size: 40px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 20px;
  }

  .card {
    text-align: center;
    margin-bottom: 20px;
  }

  button {
    width: 50px;
    height: 50px;
    background-color: transparent;
    color: dodgerblue;
    border-radius: 10px;
    transform-origin: center;

    &:active {
      opacity: 0.8;
    }

    &.rotate {
      animation: rotate 0.3s ease-in-out;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>
