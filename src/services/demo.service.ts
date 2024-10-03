"use server";

export const successFunc = async () => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return {
      success: true,
      data: [
        { id: "AFDasdfQWERASDf3423", name: "Mir" },
        { id: "ADSFasdVBXVfaa65745", name: "Mezba" },
      ],
    };
  } catch (error) {
    return {
      success: false,
      //* you can return error message from here
      message: error,
    };
  }
};

export const errorFunc = async () => {
  try {
    await new Promise((_, reject) =>
      setTimeout(() => reject("User Already exits"), 2000)
    );

    return {
      data: [
        { id: "AFDasdfQWERASDf3423", name: "Mir" },
        { id: "ADSFasdVBXVfaa65745", name: "Mezba" },
      ],
    };
  } catch (error) {
    return {
      success: false,
      //* you can return error message from here
      message: error,
    };
  }
};
