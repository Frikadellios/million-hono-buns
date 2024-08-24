import { createStorage } from "unstorage";
import githubDriver from "unstorage/drivers/github";

const storage = createStorage({
  driver: githubDriver({
    repo: "Frikadellios/million-hono-buns",
    token: import.meta.env.UNSTORAGE_GITHUB_TOKEN,
    branch: "master",
    dir: "./src/content",
  }),
});
