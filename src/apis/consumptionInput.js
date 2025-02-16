import axios from "axios";

export const postConsInput = async (
  consCategoryClicked,
  challengeClicked,
  myConsumption
) => {
  try {
    const response = await axios.post(
      "https://moamoa.store/consumption-challenge/my-consumption",
      {
        consumptionCategory: consCategoryClicked,
        challengeCategory: challengeClicked,
        amount: myConsumption,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczODQ4NjQ0OSwiZXhwIjoxNzQxMDc4NDQ5fQ.tccAfZ4LfshBl5S8n1lgj5pfrU9VybbNyulS7aZGXyc",
        },
      }
    );
    console.log(response.data.result);
  } catch (error) {
    console.error("Error fetching postConsInput data", error);
    console.log({
      consumption_category: consCategoryClicked,
      challenge_category: challengeClicked,
      amount: myConsumption,
    });
  }
};

export const getConsInput = async (setTargetAmount) => {
  try {
    const response = await axios.get(
      "https://moamoa.store/consumption-challenge/my-consumption",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczODQ4NjQ0OSwiZXhwIjoxNzQxMDc4NDQ5fQ.tccAfZ4LfshBl5S8n1lgj5pfrU9VybbNyulS7aZGXyc",
        },
      }
    );
    console.log(response.data.result.amountLeft);
    setTargetAmount(response.data.result.amountLeft);
  } catch (error) {
    console.error("Error fetching getConsInput data", error);
  }
};
