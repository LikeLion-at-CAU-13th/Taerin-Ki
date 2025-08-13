let foods = [];

export const getFoods = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([...foods]);
    }, 300);
  });

export const addFood = (food) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!food || !food.trim()) {
        reject("음식 이름을 입력하세요");
        return;
      }
      foods.push(food.trim());
      resolve({ success: true });
    }, 300);
  });