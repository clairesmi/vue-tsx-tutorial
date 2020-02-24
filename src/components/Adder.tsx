import * as tsx from "vue-tsx-support";
import { VNode } from "vue";
import { Sign } from "@/types/sign";
import "./adder.css"


// Using interfaces in typescript to define the syntax that the specified elements should adhere to
interface AdderData {
  signs: Sign[];
}

interface Events {
  onChangeSign: (sign: Sign) => void;
}

// Implementing typechecked events when the component is created 
const Adder = tsx.componentFactoryOf<Events>().create({
  name: "Adder",
  data(): AdderData {
    return {
      signs: [
        Sign["x"],Sign["/"],Sign["+"],Sign["-"]
      ]
    };
  },

  // Receiving props from the parent component (App)
  // Result is passed down from the parent using the slots tool

  props: {
    left: {
      type: Number,
      required: true as true
    },
    right: {
      type: Number,
      required: true as true
    },
    selectedSign: {
      type: String as () => Sign,
      required: true as true
    }
  },

  render(): VNode {
    const { signs, left, right, selectedSign } = this;
    return (
      <div class="wrapper">
        <div class="inner">
          <div class="number">{left}</div>

          <div class="signs">
            {signs.map(sign =>
              <span
              class={sign === selectedSign ? "selected sign" : "sign"}
              onClick={() => this.$emit("changeSign", sign)}>
                {sign}
              </span>
              )}
          </div>
          <div class="number">
            {right}
          </div>
        </div>
        <div class="result">
          <span>
            Result: {this.$slots.result}
          </span>
        </div>
      </div>
    );
  }
});

export { Adder };
