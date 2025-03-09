import { serve } from "bun";
import index from "./index.html";

const PORT = process.env.PORT || 3002;

const server = serve({
  port: PORT,
  routes: {
    // Serve index.html for all unmatched routes.
    "/*": index,

    "/api/hello": {
      async GET(_req) {
        return Response.json({ message: "Hello, world!" });
      },
    },
  },
  development: process.env.NODE_ENV !== "production",
});

console.log(`🚀 Server running at ${server.url}`);
