<div class="bottom">
  <ul class="benefit-list">
    <li>Unlimited websites</li>
    <li>100% data ownership</li>
    <li>Email reports</li>
  </ul>
  <button>Start my trial</button>
</div>

<style lang="scss">
  @import "../../variables.scss";

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
          content: url("../../assets/icon-check.svg");
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

      @media (max-width: 550px) {
        flex-direction: column;
        justify-content: center;
        gap: 2rem;
        text-align: center;
        height: 40%;
        padding-bottom: 3rem;
        padding-top: 1.75rem;

        button {
          width: 50%;
        }
      }
    }
</style>