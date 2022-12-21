<script lang="ts">
  import { tariffs } from "./tariffs";
  let rangeValue = 3;
  let tariff = tariffs[rangeValue - 1];
  let { price, views } = tariff;
  let yearly = false;
  $: discount = ((price * 12) / 100) * 25;
  $: yearlyPrice = price * 12 - discount;

  const handleRange = (event) => {
    const target = event.target;
    rangeValue = event.target.value;
    tariff = tariffs[rangeValue - 1];
    price = tariff.price;
    views = tariff.views;

    const min = target.min;
    const max = target.max;
    const val = target.value;

    target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
  };
</script>

<section>
  <div class="upper">
    <div class="tariff-info">
      <p class="views">{views} PAGEVIEWS</p>
      <div class="price">
        <p class="money">${yearly ? yearlyPrice : price}.00</p>
        <p class="duration">/ {yearly ? "year" : "month"}</p>
      </div>
    </div>
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
    <div class="toggle">
      <p>Monthly Billing</p>
      <label class="toggle-button">
        <input type="checkbox" name="toggle" bind:checked={yearly} />
        <span class="toggle-button-slider" />
      </label>
      <p>Yearly Billing <span class="discount-message">25% discount</span></p>
    </div>
  </div>
  <div class="bottom">
    <ul class="benefit-list">
      <li>Unlimited websites</li>
      <li>100% data ownership</li>
      <li>Email reports</li>
    </ul>
    <button>Start my trial</button>
  </div>
</section>

<style lang="scss">
  @import "../variables.scss";

  section {
    background-color: white;
    color: $greyish-blue-text;
    border-radius: 10px;
    box-shadow: 0px 0px 15px 0px $light-greyish-blue-toggle;
    height: 60%;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;

    .upper {
      height: 65%;
      padding: 2rem 3rem;
      border-bottom: 2px solid $light-greyish-blue-slider;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .tariff-info {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .views {
          letter-spacing: 0.1rem;
          font-weight: $bold-font;
        }

        .price {
          display: flex;
          align-items: center;
          gap: 5px;

          p {
            font-weight: $bold-font;
          }
        }

        .money {
          font-size: 2.5rem;
          color: $dark-desaturated-blue;
        }
      }

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

          &::-webkit-slider-thumb {
            -webkit-appearance: none;
          }

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

          &::-moz-range-thumb {
            box-shadow: 0px 0px 31px 0px $strong-cyan;
            border: none;
            height: 40px;
            width: 40px;
            border-radius: 50%;
            background-image: url("../assets/icon-slider.svg");
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

      .toggle {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        margin-right: 1rem;

        .discount-message {
          font-size: .75rem;
          font-weight: $bold-font;
          margin-left: .5rem;
          color: $light-red;
          background-color: $light-greyish-red;
          padding: .2rem 0.35rem;
          border-radius: 0.75rem;

        }

        .toggle-button {
          position: relative;
          display: inline-block;
          margin: 0 1rem;
          width: 45px;
          height: 23px;
          border-radius: 23px;
          background: $light-greyish-blue-toggle;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
        }

        .toggle-button input[type="checkbox"] {
          display: none;
        }

        .toggle-button-slider {
          position: absolute;
          top: 2px;
          left: 3px;
          width: 18px;
          height: 18px;
          background: #fff;
          border-radius: 50%;
          transition: all 0.2s ease-in-out;
        }

        .toggle-button input[type="checkbox"]:checked + .toggle-button-slider {
          left: calc(50%);
        }
      }
    }

    .bottom {
      height: 35%;
      padding: 0 3rem;

      display: flex;
      justify-content: space-between;
      align-items: center;

      ul {
        list-style-type: none;
        padding: 0;

        li {
          margin-top: 0.5rem;
        }

        li::before {
          content: url("../assets/icon-check.svg");
          margin-right: 1rem;
        }
      }

      button {
        border: none;
        border-radius: 30px;
        background-color: $dark-desaturated-blue;
        color: $pale-blue;
        width: 40%;
        padding: 0.85rem;
        cursor: pointer;

        &:hover,
        &:focus {
          color: white;
        }
      }
    }
  }
</style>
