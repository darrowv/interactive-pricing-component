<script lang="ts">
  import { tariffs } from "./tariffs";
  let rangeValue = 3;
  let tariff = tariffs[rangeValue - 1];
  let {price, views} = tariff;
  let yearly = false;
  $: discount = ((price * 12) / 100 * 25)
  $: yearlyPrice = (price * 12) - discount;


  const handleRange = (event) => {
    rangeValue = event.target.value;
    tariff = tariffs[rangeValue - 1];
    price = tariff.price;
    views = tariff.views;
  }

</script>

<section>
  <div class="upper">
    <section class="tariff-info">
      <p class="views">{views} pageviews</p>
      <p class="price"><span>${yearly ? yearlyPrice : price}.00</span> / {yearly ? "year" : "month"}</p>
    </section>
    <section class="slider">
      <input type="range" name="range" id="range" bind:value={rangeValue} min="1" max="5" on:input={handleRange}/>
    </section>
    <section class="toggle">
      <p>Monthly Billing</p>
      <label class="toggle-button">
        <input type="checkbox" name="toggle" bind:checked={yearly} />
        <span class="toggle-button-slider" />
      </label>
      <p>Yearly Billing <span>25% discount</span></p>
    </section>
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
    border-radius: 10px;
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
        flex-direction: row;
        justify-content: space-between;
      }

      // .slider {
      // }

      .toggle {
        flex-direction: row;
        justify-content: flex-end;

        .toggle-button {
          position: relative;
          display: inline-block;
          width: 60px;
          height: 34px;
          border-radius: 20px;
          background: rgba(204, 204, 204, 0.821);
          cursor: pointer;
          transition: all 0.2s ease-in-out;
        }

        .toggle-button input[type="checkbox"] {
          display: none;
        }

        .toggle-button-slider {
          position: absolute;
          top: 2px;
          left: 2px;
          width: 30px;
          height: 30px;
          background: #fff;
          border-radius: 50%;
          transition: all 0.2s ease-in-out;
        }

        .toggle-button input[type="checkbox"]:checked + .toggle-button-slider {
          left: calc(50% - 2px);
        }
      }
    }

    .bottom {
      height: 35%;
      padding: 2rem 3rem;

      display: flex;
      justify-content: space-between;

      ul {
        list-style-type: none;
        padding: 0;

        li::before {
          content: url("../assets/icon-check.svg");
          margin-right: 1rem;
        }
      }
    }
  }
</style>
