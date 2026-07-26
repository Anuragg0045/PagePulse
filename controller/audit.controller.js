const auditService = require("../services/audit.service");

async function auditController(req, res) {

    const { url } = req.body;

    if (!url) {
        return res.status(400).json({
            success: false,
            message: "URL is required"
        });
    }

   try {
    const report = await auditService.auditService(url);

    return res.status(200).json(report);

} catch (error) {
    return res.status(500).json({
        success: false,
        message: error.message
    });
}

}

module.exports = {
    auditController
};