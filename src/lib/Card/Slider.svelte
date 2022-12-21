<script lang="ts">
  export let rangeValue;
  export let handleRange;
</script>

<div class="slider">
  <input
    type="range"
    name="range"
    bind:value={rangeValue}
    min="1"
    max="5"
    on:input={handleRange}
  />
</div>

<style lang="scss">
  @import "../../variables.scss";
  .slider {
    input {
      -webkit-appearance: none;
      width: 100%;
      height: 10px;
      background-image: linear-gradient($soft-cyan, $soft-cyan);
      background-color: $light-greyish-blue-slider;
      background-size: 50% 100%;
      background-repeat: no-repeat;
      border-radius: 5px;

      &:focus {
        outline: 2px solid $strong-cyan;
      }

      &::-ms-track {
        width: 100%;
        cursor: pointer;
        background: transparent;
        border-color: transparent;
        color: transparent;
      }

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        box-shadow: 0px 0px 31px 0px $strong-cyan;
        border: none;
        height: 40px;
        width: 40px;
        border-radius: 50%;
        background-image: url("../../assets/icon-slider.svg");
        background-repeat: no-repeat;
        background-position: center;
        background-color: $strong-cyan;
        cursor: pointer;

        &:hover {
          filter: brightness(1.1);
        }

        &:active {
          filter: brightness(0.8);
        }
      }

      &::-moz-range-thumb {
        box-shadow: 0px 0px 31px 0px $strong-cyan;
        border: none;
        height: 40px;
        width: 40px;
        border-radius: 50%;
        background-image: url("../../assets/icon-slider.svg");
        background-repeat: no-repeat;
        background-position: center;
        background-color: $strong-cyan;
        cursor: pointer;

        &:hover {
          filter: brightness(1.1);
        }

        &:active {
          filter: brightness(0.8);
        }
      }
    }
  }
</style>
