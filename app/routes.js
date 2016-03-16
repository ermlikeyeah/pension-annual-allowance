var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {

  res.render('index');

});


// Example routes - feel free to delete these

// Passing data into a page

router.get('/examples/template-data', function (req, res) {

  res.render('examples/template-data', { 'name' : 'Foo' });

});

// Branching

router.get('/examples/over-18', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  var over18 = req.query.over18;

  if (over18 == "false"){

    // redirect to the relevant page
    res.redirect("/examples/under-18");

  } else {

    // if over18 is any other value (or is missing) render the page requested
    res.render('examples/over-18');

  }

});



//
// **** My routes ****
//


// Example form result page, replay the data from previous page

router.get('/v0_1/form-results-page', function (req, res) {

  res.render('v0_1/form-results-page', {
    'fullpassstring' : req.query,
    'fullName' : req.query.fullName,
    'niNumber' : req.query.niNumber,
    'day' : req.query.day,
    'month' : req.query.month,
    'year' : req.query.year,
    'workingTaxCredits' : req.query.workingTaxCredits
  });

});


// Example of passing No from routes.js to a page
// Use this as a staring page to "build up" a starting scenario

router.get('/v0_1/intro-1', function (req, res) {

  var UserName = 'Janice Green';
  var PartnerName = 'David Green';
  var WorkingTaxCreditsValue = '325.13';
  var ChildTaxCreditsValue = '';
  var Children= [
    {   ChildNumber: 1,
        ChildName: "Hannah Green",
        ChildAge: "3"
    },

    {   ChildNumber: 2,
        ChildName: "Elliott Green",
        ChildAge: "11"
    }]


  res.render('v0_1/overview-page', {

    UserName: UserName,
    PartnerName: PartnerName,
    WorkingTaxCreditsValue: WorkingTaxCreditsValue,
    ChildTaxCreditsValue: ChildTaxCreditsValue,
    Children: Children

  });

});

router.get('/v0_1/intro-2', function (req, res) {

  var UserName = 'Janice Green';
  var PartnerName = 'David Green';


  var WorkingTaxCreditsValue = '400.25';
  var ChildTaxCreditsValue = '250.66';


  res.render('v0_1/overview-page', {

    UserName: UserName,
    PartnerName: PartnerName,
    WorkingTaxCreditsValue: WorkingTaxCreditsValue,
    ChildTaxCreditsValue: ChildTaxCreditsValue

  });

});


module.exports = router;
