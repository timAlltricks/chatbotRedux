import {INPUT_SUCCESS, INPUT_FAIL, MESSAGE_SUCCESS, MESSAGE_FAIL} from "./types";
import {BotMatt} from "../bot/Bot";

export const userMessage = (message) => async (dispatch) => {
  try {
    dispatch({ type: INPUT_SUCCESS, payload: message});
  } catch (err) {
    dispatchEvent({ type: INPUT_FAIL});
  }
}

export const botMessage = (messageToAnswer) => async (dispatch) => {
  console.log(messageToAnswer);
  try {
    dispatch({ type: MESSAGE_SUCCESS, payload: BotMatt(messageToAnswer)});
  } catch (err) {
    dispatchEvent({ type: MESSAGE_FAIL});
  }
}