// A mock function to mimic making an async request for data
import { db } from '../../firebase'
export function fetchCount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

export function fetchMessages() {

}