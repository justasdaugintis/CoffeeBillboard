import { combineReducers, Reducer } from "redux";
import { coffeeReducer, ICoffeeBlockState } from "../components/coffeeBillboard/reduxSlice";

export interface IRootState {
  /**
   * coffeeData - This data will be used to render coffees
   */
   coffeeData: ICoffeeBlockState;
}

/**
 * Returns the list of reducers
 */
const createRootReducer: () => Reducer<IRootState> = (): Reducer<IRootState> =>
  combineReducers<IRootState>({
    coffeeData: coffeeReducer
  });

export default createRootReducer;
