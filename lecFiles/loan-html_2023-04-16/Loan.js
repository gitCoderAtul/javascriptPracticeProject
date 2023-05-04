//DOM Event Handler
// console.log(document.querySelector('button'));
document.querySelector('button').onclick = myfunc;

function myfunc(){
    // console.log('test');
    // console.log(document);
    // console.log(document.getElementsByName('xyz'));
    // console.log(document.getElementsByName('xyz')[0]);
    // console.log(document.getElementsByName('xyz')[0].value);

    // var[a,b,c] = [100,200,300];
    // console.log(a);

    var[txt1,txt2,txt3] = document.getElementsByName('xyz');
    // console.log(txt1 , txt1.value);
    // console.log(txt2);
    // console.log(txt3);

    // console.log(txt1.value , typeof txt1.value);

    var amount = +txt1.value;
    // console.log(amount , typeof amount);
    var tenure = +txt2.value;
    var roi = +txt3.value;
    // console.log(tenure , roi);

    var P = amount;
    var N = tenure*12;
    var R = roi/12/100;

    var EMI = P * R * (1+R)**N / ( (1+R)**N-1 );
    EMI = Math.round(EMI);
    // console.log(EMI);

    var total = EMI * N;
    // console.log(total);

    var InterestValue = total - P;
    // console.log(InterestValue);

    // var spanTag = document.getElementsByTagName('span');
    // console.log(spanTag);
    var[span1,span2,span3,span4] = document.getElementsByTagName('span');
    span1.innerText = EMI;
    span2.innerText = P;
    span3.innerText = InterestValue;
    span4.innerText = total;
    

    ////charts
    Highcharts.chart('container', {
          chart: {
              plotBackgroundColor: null,
              plotBorderWidth: null,
              plotShadow: false,
              type: 'pie'
          },
          title: {
              text: 'Browser market shares in May, 2020',
              align: 'left'
          },
          tooltip: {
              pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          accessibility: {
              point: {
                  valueSuffix: '%'
              }
          },
          plotOptions: {
              pie: {
                  allowPointSelect: true,
                  cursor: 'pointer',
                  dataLabels: {
                      enabled: true,
                      format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                  }
              }
          },
          series: [{
              name: 'Brands',
              colorByPoint: true,
              data: [{
                  name: 'Loan Amount',
                  y: P,
                  color:'red'
                 
              }, {
                  name: 'Interest ',
                  y: InterestValue,
                  color:'blue'
              }]
          }]
      });
    ///charts
}