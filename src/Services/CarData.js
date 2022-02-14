import { GET_CAR_DATA } from "../Constants/APIConstant";


export function getCarData() {
    return fetch(GET_CAR_DATA);
  }