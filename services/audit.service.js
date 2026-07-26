const axios = require("axios");
const cheerio = require("cheerio");

async function auditService(url) {
    try {
        // Start timer
        const startTime = Date.now();

        // Fetch webpage
        const response = await axios.get(url);

        // Stop timer
        const endTime = Date.now();
        const responseTime = endTime - startTime;

        // Load HTML into Cheerio
        const $ = cheerio.load(response.data);

        // HTTP Status
        const status = response.status;

        // Page Title
        const title = $("title")
            .text()
            .replace(/\s+/g, " ")
            .trim();

        // Meta Description
        const metaDescription =
            $('meta[name="description"]')
                .attr("content")
                ?.replace(/\s+/g, " ")
                .trim() ||
            "No meta description found";

        // Count H1 tags
        const h1Count = $("h1").length;

        // Count images without alt attribute
        const imagesWithoutAlt = $("img")
            .filter((i, img) => !$(img).attr("alt"))
            .length;

        // Count words in body
        const bodyText = $("body").text().trim();

        const wordCount = bodyText
            ? bodyText.split(/\s+/).length
            : 0;

        return {
            status,
            responseTime: `${responseTime} ms`,
            title,
            metaDescription,
            h1Count,
            imagesWithoutAlt,
            wordCount
        };

    } catch (error) {
        throw new Error("Failed to fetch the webpage.");
    }
}

module.exports = {
    auditService
};