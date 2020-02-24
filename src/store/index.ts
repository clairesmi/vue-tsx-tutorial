import Vue from "vue";
import Vuex from "vuex";

import { calculation, CalculationState } from "./calculation";

// Registering Vuex to be used in within the app
Vue.use(Vuex);

// creating a Typescript interface to 
interface State {
  calculation: CalculationState;
}

// registering the calculation module to be used when the calculation state is updated
const store = new Vuex.Store<State>({
  modules: {
    calculation
  }
});

export { store, State };
