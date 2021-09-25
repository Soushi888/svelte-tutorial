import { readable } from "svelte/store";

let count = 0;

export const timer = readable(0, (set) => {
  if (count > 0) count = -1;

  const interval = setInterval(() => {
    count++;
    set(count);
  }, 1000);

  return () => clearInterval(interval);
});
