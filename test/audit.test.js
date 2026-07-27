const request = require("supertest");
const app = require("../app");

describe("Audit API", () => {

    // Happy Path
    test("should return SEO report for a valid URL", async () => {

        const response = await request(app)
            .post("/audit")
            .send({
                url: "https://github.com"
            });

        expect(response.status).toBe(200);

        expect(response.body).toHaveProperty("status");
        expect(response.body).toHaveProperty("responseTime");
        expect(response.body).toHaveProperty("title");
        expect(response.body).toHaveProperty("metaDescription");
        expect(response.body).toHaveProperty("h1Count");
        expect(response.body).toHaveProperty("imagesWithoutAlt");
        expect(response.body).toHaveProperty("wordCount");

        expect(response.body.status).toBe(200);
        expect(response.body.wordCount).toBeGreaterThan(0);
    });

    // Failure Case 1
    test("should return 400 when URL is missing", async () => {

        const response = await request(app)
            .post("/audit")
            .send({});

        expect(response.status).toBe(400);

        expect(response.body.success).toBe(false);
        expect(response.body.message).toBe("URL is required");
    });

    // Failure Case 2
    test("should return 500 for an invalid URL", async () => {

        const response = await request(app)
            .post("/audit")
            .send({
                url: "invalid-url"
            });

        expect(response.status).toBe(500);

        expect(response.body.success).toBe(false);
        expect(response.body.message).toBe("Failed to fetch the webpage.");
    });

});