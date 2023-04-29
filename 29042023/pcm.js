console.log(document.querySelector('#btn'));
document.querySelector('#btn').onclick=function() {
    //  console.log('check');
     console.log(document.querySelectorAll('#txt'));
    var data1 = document.querySelectorAll('#txt')[0].value;
    var data2 = document.querySelectorAll('#txt')[1].value;
    var data3 = document.querySelectorAll('#txt')[2].value;
    console.log(data1,typeof data1);
    console.log(data2,data3);

    // console.log(isNaN(data1));
    // data1 = parseInt(data1);
    // data2 = parseInt(data2);
    // data3 = parseInt(data3);
    //   console.log(data1,data2,data3);

    var errMsg = '';
    if(data1=='' || data2=='' || data3==''){
        console.log(errMsg);
        errMsg ='All Values Are Required';
    }else if(data1<0 || data1>100 || data2<0 || data2>100 || data3<0 || data3>100){
        errMsg = 'Marks must be between 0 and 100';
        console.log(errMsg);
    }else if(isNaN(data1) || isNaN(data2) || isNaN(data3)){
        errMsg = 'Only Numbers Required';
    }else if(data1<35 || data2<35 || data3<35){
        errMsg = 'Fail';
    }else{

        err = '';
        data1 = parseInt(data1);
        data2 = parseInt(data2);
         data3 = parseInt(data3);

        //  console.log(data1, typeof data1);

        var total = data1 + data2 + data3;
        console.log(total);
        var totalMarks = 300;
        var percentage = total/totalMarks * 100;
        console.log(percentage);
        // document.getElementsByClassName('record')

        
        var status = '';
        if(percentage<60){
            console.log(status);
            status = ' II Class';
        }else if(percentage<75){
            console.log(status);
            status = ' I Class';
        }else{
            status ='Distinction'
        }
        console.log(status);
        var spanEle = document.getElementsByClassName('record');
        spanEle[0].innerHTML = total;
        spanEle[2].innerHTML = `${percentage} %`;
        spanEle[3].innerHTML = status; 
    }
    // console.log(document.getElementsByClassName('message'));
    document.querySelector('.message').innerHTML = errMsg;

    // Data retrieved from https://netmarketshare.com
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
            name: 'Physics',
            y: data1,
            sliced: true,
            selected: true
        }, {
            name: 'Chemistry',
            y: data2
        }, {
            name: 'Maths',
            y: data3
        }]
    }]
});
};