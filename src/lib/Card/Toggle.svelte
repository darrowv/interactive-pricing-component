<script>
  import { yearly } from "../../stores";

  let yearlyVal;

  yearly.subscribe(value => {
    yearlyVal = value;
  })

  const toggleYearly = () => {
    yearly.update(bool => !bool)
  }
</script>

<div class="toggle">
  <p>Monthly</p>
  <label class="toggle-button">
    <input type="checkbox" name="toggle" bind:checked={yearlyVal} on:change={toggleYearly}/>
    <span class="toggle-button-slider" />
  </label>
  <p>
    Yearly <span class="discount-message">25% discount</span><span
      class="short-discount-message">-25%</span
    >
  </p>
</div>

<style lang="scss">
  @import "../../variables.scss";

  .toggle {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-right: 1rem;

    .short-discount-message {
      display: none;
    }

    .discount-message {
      font-size: 0.75rem;
      font-weight: $bold-font;
      margin-left: 0.5rem;
      color: $light-red;
      background-color: $light-greyish-red;
      padding: 0.2rem 0.35rem;
      border-radius: 0.75rem;
    }

    .toggle-button {
      position: relative;
      display: inline-block;
      margin: 0 1rem;
      width: 43px;
      height: 23px;
      border-radius: 23px;
      background: $light-greyish-blue-toggle;
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      &:hover {
        background-color: $strong-cyan;
      }
    }

    .toggle-button input[type="checkbox"] {
      opacity: 0;
    }

    .toggle-button-slider {
      position: absolute;
      top: 2px;
      left: 3px;
      width: 18px;
      height: 18px;
      background: white;
      border-radius: 50%;
      transition: all 0.2s ease-in-out;
    }

    .toggle-button input[type="checkbox"]:checked + .toggle-button-slider {
      left: calc(50%);
    }

    @media (max-width: 550px) {
      margin: 0;

      .discount-message {
        display: none;
      }

      .short-discount-message {
        display: inline-block;
        font-size: 0.75rem;
        font-weight: $bold-font;
        color: $light-red;
        background-color: $light-greyish-red;
        padding: 0.2rem 0.35rem;
        border-radius: 0.75rem;
      }
    }
  }
</style>
