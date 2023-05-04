
console.log(document);
console.log(document.querySelector('button'));

document.querySelector('button').onclick = myfunc;

function myfunc(){
    console.log('test');
    // console.log(document);
    console.log(document.getElementsByName('xyz'));
    console.log(document.getElementsByName('xyz')[0].value);

    //array distruction
    var [txt1,txt2,txt3] = document.getElementsByName('xyz');
    // console.log(txt1, txt1.value);
    // console.log(txt1, typeof txt1);

//convert string to number using + operator or parseInt....
    var amount = +txt1.value;
    var tenure = +txt2.value;
    var roi = +txt3.value;

    // console.log(amount,tenure,Interest);
    var P = amount;
    var N = tenure * 12;
    var R = roi/12/100;

    var EMI = P * R * (1+R)**N / ( (1+R)**N-1);
    EMI = Math.round(EMI);
    // console.log(EMI);

    var total = EMI * N;
    console.log(total);
    
    var InterestValue = total - P;
    console.log(InterestValue);

    var [span1,span2,span3,span4] = document.getElementsByTagName('span');
    console.log(span1);

    span1.innerHTML = EMI;
    span2.innerHTML = P;
    span3.innerHTML = InterestValue;
    span4.innerHTML = total;

    // Data retrieved from https://netmarketshare.com
Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Loan Calculator',
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
        name: 'Loan',
        colorByPoint: true,
        data: [{
            name: 'Loan Amount',
            y: P,
        }, {
            name: 'Interest',
            y: InterestValue,
        },]
    }]
});


}


// document.getElementsByName('xyz')
