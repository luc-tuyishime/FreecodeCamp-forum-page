import { post } from "../../../redux/actions/post";
import { postForum } from "../../../__mocks__/posts";

const dispatch = jest.fn((action) => action);

describe("Fetch forum posts", () => {
    test("returns fetch posts information", async () => {
        const result = post(postForum)(dispatch);
    });
});
