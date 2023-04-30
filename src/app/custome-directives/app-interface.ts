export interface ICarousel {
  $implicit: string;
  controller: {
    next: () => void;
    prev: () => void;
  };
}
