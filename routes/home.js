const router = require('express').Router();
const httpErrors = require('../utils/httpErrors');
const sampleData = require("../constants/sampleData");

router.get("/", (req, res) => {
    res.status(httpErrors.OK.status).send({ result: sampleData.data, status: httpErrors.OK.status });
});

router.get("/food/indian", (req, res) => {
    res.status(httpErrors.OK.status).send({ result: sampleData.accordionOptions, status: httpErrors.OK.status });
});

router.get("/food/bbq", (req, res) => {
    res.status(httpErrors.OK.status).send({ result: sampleData.accordionOptionsBBQ, status: httpErrors.OK.status });
});

router.get("/food/biryani", (req, res) => {
    res.status(httpErrors.OK.status).send({ result: sampleData.accordionOptionsBiryani, status: httpErrors.OK.status });
});

router.get("/food/quickbites", (req, res) => {
    res.status(httpErrors.OK.status).send({ result: sampleData.accordionOptionsQuickBite, status: httpErrors.OK.status });
});

module.exports = router;