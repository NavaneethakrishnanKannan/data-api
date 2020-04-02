const router = require('express').Router();
const bodyParser = require('../middlewares/bodyParser');
const httpErrors = require('../utils/httpErrors');
const sampleData = require("../constants/sampleData");

router.get("/", (req, res) => {
    res.status(httpErrors.OK.status).send({ result: sampleData.data, status: httpErrors.OK.status });
});

// router.get("/food/indian", bodyParser, function (req, res) {
//     try {
//         res.status(httpErrors.OK.status).send({ result: sampleData.accordionOptions, status: httpErrors.OK.status });
//     } catch (error) {
//         res.status(httpErrors.INTERNAL_SERVER_ERROR.status).send({ result: [], status: httpErrors.INTERNAL_SERVER_ERROR.status });
//     }
// });

// router.get("/food/bbq", bodyParser, function (req, res) {
//     try {
//         res.status(httpErrors.OK.status).send({ result: sampleData.accordionOptionsBBQ, status: httpErrors.OK.status });
//     } catch (error) {
//         res.status(httpErrors.INTERNAL_SERVER_ERROR.status).send({ result: [], status: httpErrors.INTERNAL_SERVER_ERROR.status });
//     }
// });

// router.get("/food/biryani", bodyParser, function (req, res) {
//     try {
//         res.status(httpErrors.OK.status).send({ result: sampleData.accordionOptionsBiryani, status: httpErrors.OK.status });
//     } catch (error) {
//         res.status(httpErrors.INTERNAL_SERVER_ERROR.status).send({ result: [], status: httpErrors.INTERNAL_SERVER_ERROR.status });
//     }
// });

// router.get("/food/quickbites", bodyParser, function (req, res) {
//     try {
//         res.status(httpErrors.OK.status).send({ result: sampleData.accordionOptionsQuickBite, status: httpErrors.OK.status });
//     } catch (error) {
//         res.status(httpErrors.INTERNAL_SERVER_ERROR.status).send({ result: [], status: httpErrors.INTERNAL_SERVER_ERROR.status });
//     }
// });
module.exports = router;