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

//
// v0.2
//

router.get('/v0_2/page2', function (req, res) {

  res.render('v0_2/page2', {
    'withdrawal' : req.query.withdrawal
  });

});


router.get('/v0_2/page3', function (req, res) {

  res.render('v0_2/page3', {
    'withdrawal' : req.query.withdrawal,
    'year1' : req.query.year1,
    'year2' : req.query.year2,
    'year3' : req.query.year3,
    'year4' : req.query.year4,
    'year5' : req.query.year5,
    'year6' : req.query.year6,
    'year7' : req.query.year7,
    'year8_1' : req.query.year8_1,
    'year8_left1' : req.query.year8_left1,
    'year8_2' : req.query.year8_2,
    'year8_left2' : req.query.year8_left2
  });

});

router.get('/v0_2/page4', function (req, res) {

  res.render('v0_2/page4', {
    'withdrawal' : req.query.withdrawal,
    'year1' : req.query.year1,
    'year2' : req.query.year2,
    'year3' : req.query.year3,
    'year4' : req.query.year4,
    'year5' : req.query.year5,
    'year6' : req.query.year6,
    'year7' : req.query.year7,
    'year8_1' : req.query.year8_1,
    'year8_left1' : req.query.year8_left1,
    'year8_2' : req.query.year8_2,
    'year8_left2' : req.query.year8_left2,
    'year8_1_total' : req.query.year8_1 - req.query.year8_left1,
    'year8_2_total' : req.query.year8_2 - req.query.year8_left2,
    'year9' : req.query.year9,
    'year10' : req.query.year10,
    'years_total' : parseInt(req.query.year1)
                  + parseInt(req.query.year2)
                  + parseInt(req.query.year3)
                  + parseInt(req.query.year4)
                  + parseInt(req.query.year5)
                  + parseInt(req.query.year6)
                  + parseInt(req.query.year7)
                  + (parseInt(req.query.year8_1) - parseInt(req.query.year8_left1))
                  + (parseInt(req.query.year8_2) - parseInt(req.query.year8_left2))
                  + parseInt(req.query.year9)
                  + parseInt(req.query.year10)

  });

});


//
// v0.1
//

router.get('/v0_1/page2', function (req, res) {

  res.render('v0_1/page2', {
    'withdrawal' : req.query.withdrawal,
    'year1' : req.query.year1,
    'year2' : req.query.year2,
    'year3' : req.query.year3,
    'year4' : req.query.year4,
    'year5' : req.query.year5,
    'year6' : req.query.year6,
    'year7' : req.query.year7


  });

});


router.get('/v0_1/page3', function (req, res) {

  res.render('v0_1/page3', {
    'withdrawal' : req.query.withdrawal,
    'year1' : req.query.year1,
    'year2' : req.query.year2,
    'year3' : req.query.year3,
    'year4' : req.query.year4,
    'year5' : req.query.year5,
    'year6' : req.query.year6,
    'year7' : req.query.year7,
    'year8_1' : req.query.year8_1,
    'year8_left1' : req.query.year8_left1,
    'year8_2' : req.query.year8_2,
    'year8_left2' : req.query.year8_left2

  });

});


router.get('/v0_1/page4', function (req, res) {

  res.render('v0_1/page4', {
    'withdrawal' : req.query.withdrawal,
    'year1' : req.query.year1,
    'year2' : req.query.year2,
    'year3' : req.query.year3,
    'year4' : req.query.year4,
    'year5' : req.query.year5,
    'year6' : req.query.year6,
    'year7' : req.query.year7,
    'year8_1' : req.query.year8_1,
    'year8_left1' : req.query.year8_left1,
    'year8_2' : req.query.year8_2,
    'year8_left2' : req.query.year8_left2,
    'year9' : req.query.year9,
    'year10' : req.query.year10

  });

});



router.get('/v0_1/page5', function (req, res) {

  res.render('v0_1/page5', {
    'withdrawal' : req.query.withdrawal,
    'year1' : req.query.year1,
    'year2' : req.query.year2,
    'year3' : req.query.year3,
    'year4' : req.query.year4,
    'year5' : req.query.year5,
    'year6' : req.query.year6,
    'year7' : req.query.year7,
    'year8_1' : req.query.year8_1,
    'year8_left1' : req.query.year8_left1,
    'year8_2' : req.query.year8_2,
    'year8_left2' : req.query.year8_left2,
    'year9' : req.query.year9,
    'year10' : req.query.year10,
    'passURL' : 'year1=' + parseInt(req.query.year1) + '&'
      + 'year2=' + parseInt(req.query.year2) + '&'
      + 'year3=' + parseInt(req.query.year3) + '&'
      + 'year4=' + parseInt(req.query.year4) + '&'
      + 'year5=' + parseInt(req.query.year5) + '&'
      + 'year6=' + parseInt(req.query.year6) + '&'
      + 'year7=' + parseInt(req.query.year7) + '&'
      + 'year8_1=' + parseInt(req.query.year8_1) + '&'
      + 'year8_left1=' + parseInt(req.query.year8_left1) + '&'
      + 'year8_2=' + parseInt(req.query.year8_2) + '&'
      + 'year8_left2=' + parseInt(req.query.year8_left2) + '&'
      + 'year9=' + parseInt(req.query.year9) + '&'
      + 'year10=' + parseInt(req.query.year10)

  });

});


router.get('/v0_1/page6', function (req, res) {

  res.render('v0_1/page6', {
    'withdrawal' : req.query.withdrawal,
    'year1' : req.query.year1,
    'year2' : req.query.year2,
    'year3' : req.query.year3,
    'year4' : req.query.year4,
    'year5' : req.query.year5,
    'year6' : req.query.year6,
    'year7' : req.query.year7,
    'year8_1' : req.query.year8_1,
    'year8_left1' : req.query.year8_left1,
    'year8_2' : req.query.year8_2,
    'year8_left2' : req.query.year8_left2,
    'year8_1_total' : req.query.year8_1 - req.query.year8_left1,
    'year8_2_total' : req.query.year8_2 - req.query.year8_left2,
    'year9' : req.query.year9,
    'year10' : req.query.year10,
    'years_total' : parseInt(req.query.year1)
                  + parseInt(req.query.year2)
                  + parseInt(req.query.year3)
                  + parseInt(req.query.year4)
                  + parseInt(req.query.year5)
                  + parseInt(req.query.year6)
                  + parseInt(req.query.year7)
                  + (parseInt(req.query.year8_1) - parseInt(req.query.year8_left1))
                  + (parseInt(req.query.year8_2) - parseInt(req.query.year8_left2))
                  + parseInt(req.query.year9)
                  + parseInt(req.query.year10)

  });

});


module.exports = router;
