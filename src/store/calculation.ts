import { Module } from "vuex";

import { Sign } from "../types/sign";

interface CalculationState {
  left: number;
  right: number;
  sign: Sign;
}

const SET_SIGN = "SET_SIGN";

const calculation: Module<CalculationState, {}> = {
  // namespaced clarifies the syntax of how modules actions are invoked in App
  namespaced: true,
  state: {
    left: 5,
    right: 2,
    sign: Sign["+"]
  },
  mutations: {
    // uses Sign to assign the new value(payload) to sign
    [SET_SIGN](state, payload: Sign) {
      state.sign = payload;
    }
  }
};

export { calculation, CalculationState };
