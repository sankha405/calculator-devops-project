const request = require("supertest");
const app = require("../server");

describe("Calculator App API", () => {

    test("GET /health should return Healthy", async () => {

        const response = await request(app).get("/health");

        expect(response.statusCode).toBe(200);
        expect(response.text).toBe("Healthy");

    });

});

test("GET /api/config should return application name", async () => {

    const response = await request(app).get("/api/config");

    expect(response.statusCode).toBe(200);

    expect(response.body.appName).toBe("Calculator App");

});