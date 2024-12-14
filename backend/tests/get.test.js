const fs = require("fs");
const { setupStrapi, cleanupStrapi } = require("./helpers/strapi");
const request = require("supertest");
beforeAll(async () => {
  await setupStrapi();
});
afterAll(() => {
  return new Promise((resolve) => {
    strapi.server.httpServer.close(() => {
      resolve();
    });
  });
});
it("should return hello world", async () => {
  const response = await request(strapi.server.httpServer)
    .get("/api/media-items")
    .expect(200) // Expect response http code 200
    .then((data) => {
      expect(data.text).toContain("TEKKEN 8");
    });
});
