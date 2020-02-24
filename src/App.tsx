import * as tsx from "vue-tsx-support"
import { VNode } from "vue"
import { Adder } from "./components/Adder"

import { Sign } from "./types/sign"
import { State } from "./store"

// creating a typescrip component
const App = tsx.component({
  name: 'App',

  computed: {
    left(): number {
      // typechecking on store modules and setting values
      return (this.$store.state as State).calculation.left
    }, 
    right(): number {
      return (this.$store.state as State).calculation.right
    }, 
    sign(): Sign {
      return (this.$store.state as State).calculation.sign
    },
    // assigning the value on result based on which sign is clicked by the user
    result(): number {
      switch (this.sign) {
        case Sign['+']:
          return this.left + this.right
        case Sign['-']:
          return this.left - this.right
        case Sign['x']:
          return this.left * this.right
        case Sign['/']:
          return this.left / this.right
      }
    }

  },


  methods: {
    changeSign(sign: Sign) {
      // commit the newly assigned value of sign to the SET_SIGN variable in calculation.ts in the store folder
      // calculation is the name of the module within which to commit the new value
      this.$store.commit("calculation/SET_SIGN", sign)

    }
  },

  // values can be passed from parent to child via slots (result)
  render(): VNode {
    return (
      // passing props to the Adder component including a slot which contains the value of result
      // so that it can be easily updated as the result changes 
      <Adder
      left={this.left}
      right={this.right}
      selectedSign={this.sign}
      onChangeSign={this.changeSign}
      >
        <div slot="result">
          {this.result}
        </div>
      </Adder>
    )
  }
})

export { App }
