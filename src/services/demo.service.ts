"use server";

import { createServerAction, ServerActionError } from "@/utils/action";
import { delay } from "@/utils/delay";

export const successFunc = createServerAction(async () => {
  try {
    //* You can change the "resolve" to "reject"
    //* to see what happens when there is an error
    await delay("resolve");

    return {
      data: [
        { id: "AFDasdfQWERASDf3423", name: "Mir" },
        { id: "ADSFasdVBXVfaa65745", name: "Mezba" },
      ],
    };
  } catch (error) {
    console.error(error);
    throw new ServerActionError("Something went wrong");
  }
});

export const errorFunc = createServerAction(async () => {
  try {
    //* You can change the "reject" to "resolve"
    //* to see what happens when there is no error
    await delay("reject");

    return {
      data: [
        { id: "AFDasdfQWERASDf3423", name: "Mir" },
        { id: "ADSFasdVBXVfaa65745", name: "Mezba" },
      ],
    };
  } catch (error) {
    console.error(error);
    throw new ServerActionError("Something went wrong");
  }
});
