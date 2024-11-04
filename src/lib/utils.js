import { LAST_CHECKED_DATE } from "./constants";

export function daysBetweenLastChecked() {
  return Math.floor((Date.now() - LAST_CHECKED_DATE) / (1000 * 60 * 60 * 24));
}
