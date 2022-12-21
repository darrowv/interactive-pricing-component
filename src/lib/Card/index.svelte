<script lang="ts">
  import { yearly } from "../../stores";
  import Slider from "./Slider.svelte";
  import { tariffs } from "../tariffs";
  import Toggle from "./Toggle.svelte";
  import Bottom from "./Bottom.svelte";
  let rangeValue = 3;
  let tariff = tariffs[rangeValue - 1];
  let { price, views } = tariff;

  let yearlyVal;

  yearly.subscribe(value => {
    yearlyVal = value;
  })

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
  <div class="top">
    <div class="tariff-info">
      <p class="views">{views} PAGEVIEWS</p>
      <div class="price">
        <p class="money">${yearlyVal ? yearlyPrice : price}.00</p>
        <p class="duration">/ {yearlyVal ? "year" : "month"}</p>
      </div>
    </div>
    <Slider rangeValue={rangeValue} handleRange={handleRange}/>
    <Toggle />
  </div>
  <Bottom />
</section>

<style lang="scss">
  @import "../../variables.scss";

  section {
    background-color: white;
    color: $greyish-blue-text;
    border-radius: 10px;
    box-shadow: 0px 0px 15px 0px $light-greyish-blue-toggle;
    height: 60%;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;

    .top {
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
    }

    @media (max-width: 550px) {
      .top {
        height: 60%;

        .tariff-info {
          padding-top: 2rem;
          flex-direction: column;
          gap: 1.5rem;
        }
      }
    }

    @media (max-height: 750px) {
      height: 75%;
    }
  }
</style>
