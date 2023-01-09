export const getTraslate = (direction, translate, steps) => {
  switch (direction) {
    case "right":
      {
        let newTraslate = translate - 380;
        switch (steps) {
          case "down":
            if (newTraslate >= -760) {
              return newTraslate;
            } else return translate;
          case "bet":
            if (newTraslate >= -560) {
              return newTraslate;
            } else return translate;
          case "up":
            if (newTraslate >= -400) {
              return newTraslate;
            } else return translate;

          default:
            break;
        }
      }
      break;
    case "left":
      {
        let newTraslate = translate + 380;
        switch (steps) {
          case "down":
            if (newTraslate <= 940) {
              return newTraslate;
            } else return translate;

          case "bet":
            if (newTraslate <= 940) {
              return newTraslate;
            } else return translate;

          case "up":
            if (newTraslate <= 400) {
              return newTraslate;
            } else return translate;

          default:
            break;
        }
      }

      break;

    default:
      break;
  }
};
