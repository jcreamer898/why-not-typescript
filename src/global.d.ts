// global.d.ts

declare namespace MyLib {
  class Thing {}
}

interface Window {
  LP: {
    hosts?: { [key: string]: string }
  }
}
