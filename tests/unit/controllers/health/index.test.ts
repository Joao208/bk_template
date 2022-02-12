import { Health } from "../../../../src/controllers";
import { express } from "../../../mocks/express";

const { req, res } = express;

describe("[Health] Test case", () => {
  it("Should return status 200", async () => {
    // @ts-ignore
    await Health(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      status: "success",
      message: "Server is up and running",
    });
  });
});
