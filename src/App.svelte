<script lang="ts">
  import Question from "./lib/Question.svelte";
  import { getRandom } from "./utils/pick-random";
  import { HIRAGANA_MAP } from "./constants/characters";
  import { onMount, onDestroy } from "svelte";
  import RowSelector from "./lib/RowSelector.svelte";

  let rows = [
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

  let pickedHiragana = "";

  let buttonElem: HTMLElement | undefined;
  let rotate = false;

  onMount(() => {
    buttonElem = document.getElementById("card-refresh-btn");

    buttonElem?.addEventListener("animationend", removeRotate);
    selectRandomHiragana();
  });

  onDestroy(() => {
    buttonElem?.removeEventListener("animationend", removeRotate);
  });

  const onClick = () => {
    rotate = true;

    selectRandomHiragana();
  };

  const selectRandomHiragana = () => {
    let selectedHiraganas = rows
      .filter((row) => row.checked)
      .reduce((acc, cur) => {
        return [...acc, ...HIRAGANA_MAP[cur.label]];
      }, []);

    pickedHiragana = getRandom(selectedHiraganas);
  };

  const removeRotate = () => {
    rotate = false;
  };

  const uncheckAll = () => {
    rows = rows.map((row) => ({ ...row, checked: false }));
  };

  const checkAll = () => {
    rows = rows.map((row) => ({ ...row, checked: true }));
  };
</script>

<main>
  <h1>Hiragana Quiz</h1>

  <div class="card">
    <Question text={pickedHiragana} />
  </div>
  <button
    class="pick-btn"
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
  <RowSelector bind:rows />
  <div class="control-btn-wrapper">
    <button on:click={checkAll} class="check-btn">✅</button>
    <button on:click={uncheckAll} class="uncheck-btn">❌</button>
  </div>
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
    margin-bottom: 40px;
  }

  .card {
    text-align: center;
    margin-bottom: 30px;
  }

  .pick-btn {
    width: 50px;
    height: 50px;
    background-color: transparent;
    color: dodgerblue;
    border-radius: 10px;
    transform-origin: center;
    margin-bottom: 30px;

    &:active {
      opacity: 0.8;
    }

    &.rotate {
      animation: rotate 0.3s ease-in-out;
    }
  }

  .control-btn-wrapper {
    margin-top: 20px;
  }

  .check-btn,
  .uncheck-btn {
    background-color: transparent;
    font-size: 30px;
    transition: opacity 0.1s ease-in-out;

    &:active {
      opacity: 0.5;
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
