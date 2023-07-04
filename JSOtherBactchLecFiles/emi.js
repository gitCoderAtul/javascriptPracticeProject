//DOM Method - getElementById('btn'),getElementsByClassName
//DOM Property - onclick
// DOM Event Handler
// First Class Function
// Number Method - parseFloat,parseInt,toFixed
document.getElementById('btn').onclick = function(){
    // console.log('test');

    // console.log(document.getElementById('record'));
    // console.log(document.querySelector('#record'));
    console.log(document.querySelectorAll('#record'));

    //Array Destruction
    // var[a,b,c] = [10,20,30];
    // console.log(a);
    // console.log(b);
    // console.log(c);

    var[txt1,txt2,txt3] = document.querySelectorAll('#record');
    // console.log(txt1);
    // console.log(txt2);
    // console.log(txt3);

    var amount = parseFloat(txt1.value);
    var tenure = parseInt(txt2.value);
    var roi = parseFloat(txt3.value);

    console.log(amount , tenure , roi);

    console.log(typeof amount);

    var P = amount;
    var N = tenure*12;
    var R = roi/12/100;

    //P x R x (1+R)^N / [(1+R)^N-1] 

    var EMI = P * R * (1+R)**N / ( (1+R)**N - 1 );
    console.log(EMI);

    // console.log(document.getElementsByClassName('result'));
    var[r1,r2,r3,r4] = document.getElementsByClassName('result');
    // console.log(r1);
    r1.innerHTML = Math.round(EMI);
    // r1.innerHTML = EMI.toFixed(2);

    r2.innerHTML = P;
    r3.innerHTML = Math.round(N * EMI - P);
    r4.innerHTML = Math.round( N * EMI );

    //////////////////////////////////////////

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
            data: [
                {
                    name:"Amount",
                    y:P
                },
                {
                    name:"Interest",
                    y:   Math.round(N * EMI - P)
                }
            ]
        }]
    });




    //////////////////////////////////////////
}