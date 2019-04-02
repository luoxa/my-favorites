/*
* @Author: luox
* @Date:   2018-12-27 14:45:32
* @Last Modified by:   luox
* @Last Modified time: 2018-12-28 17:04:00
*/

'use strict';

var _charts=initEcharts("ec1","ec2","ec_pie1","ec_pie2","ec_pie3");
var _charts2=initEcharts("ec_map1","ec_map2","ec_map3","ec_map4","ec_map5","ec_map6","ec_map7");

function rand(max){
    return Math.floor(Math.random()*(max||100));
}


function loadEcAll(){
    loadEc1();
    loadEc2();
    loadEc3();

    loadEcMap1();
    loadEcMap2();
    loadEcMap3();
    loadEcMap4();
    loadEcMap5();
    loadEcMap6();
    loadEcMap7();
}

function loadEc1(){
    var option = {
        tooltip: {trigger: 'axis', axisPointer: {type: 'shadow', label: {show: true, backgroundColor: '#333'} } },
        grid:{x:60,x2:10,y:40,y2:30},
        legend: {data: ['严重', '危急', '一般'], textStyle: {color: '#ccc'} },
        xAxis: {data: ['上海','北京','浙江','青海','宁夏','江西'], axisLine: {lineStyle: {color: '#ccc'} } },
        yAxis: {splitLine: {show: false }, axisLine: {lineStyle: {color: '#ccc'} } },
        series: [
            {
                name: '严重',
                type: 'pictorialBar',
                symbol: 'rect',
                itemStyle: {normal: {color: '#e92101'} },
                symbolRepeat: true,
                symbolSize: [12, 4],
                symbolMargin: 1,
                data: [rand(),rand(),rand(),rand(),rand(),rand()]
            },
            {
                name: '危急',
                type: 'pictorialBar',
                symbol: 'rect',
                itemStyle: {normal: {color: '#FEC201'} },
                symbolRepeat: true,
                symbolSize: [12, 4],
                symbolMargin: 1,
                data: [rand(),rand(),rand(),rand(),rand(),rand()]
            },
            {
                name: '一般',
                type: 'pictorialBar',
                symbol: 'rect',
                itemStyle: {normal: {color: '#03E0F2'} },
                symbolRepeat: true,
                symbolSize: [12, 4],
                symbolMargin: 1,
                data: [rand(),rand(),rand(),rand(),rand(),rand()]
            }
        ]
    };

    _charts[0].setOption(option);
}

function loadEc2(){
    var data = [2220, 1682, 2791, 3000, 4090, 3230, 2910];
    var xdata = ['2012', '2013', '2014', '2015', '2016', '2017', '2018'];
    var option = {
        grid: {x: 50, x2: 10, y: 30, y2: 20},
        xAxis: {
            type: 'category',
            data: xdata,
            triggerEvent: true,
            splitLine: {show: false },
            axisLine: {show: true, lineStyle: {width: 2, color: 'rgba(255,255,255,.6)'} },
            axisTick: {show: false },
            axisLabel: {color: '#fff', fontSize: 10, textShadowColor: '#000', textShadowOffsetY: 2 }
        },
        yAxis: {
            name: '单位（千）',
            nameTextStyle: {color: '#fff', fontSize: 9, textShadowColor: '#000', textShadowOffsetY: 2 },
            type: 'value',
            splitLine: {show: true, lineStyle: {color: 'rgba(255,255,255,.2)'} },
            axisLine: {show: true, lineStyle: {width: 2, color: 'rgba(255,255,255,.6)'} },
            axisTick: {show: true },
            axisLabel: {color: '#fff', fontSize: 10, textShadowColor: '#000', textShadowOffsetY: 2 }
        },
        series: [{
            data: data,
            type: 'line',
            symbol: 'circle',
            symbolSize: 12,
            color: '#FEC201',
            lineStyle: {color: "#03E0F2"},
            label: {show: true, position: 'top', textStyle: {color: '#FEC201', fontSize: 9} },
            areaStyle: {color: 'rgba(1,98,133,0.6)'}
        },
        {
            type: 'bar',
            animation: false,
            barWidth: 3,
            hoverAnimation: false,
            data: data,
            tooltip: {show: false },
            itemStyle: {normal: {color: {type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{offset: 0, color: '#91EAF2'  }, {offset: 1, color: '#074863'  }], globalCoord: false  }, label: {show: false } } }
        }]
    };

    _charts[1].setOption(option);
}


function loadEc3(){
    var option = {
        series: [{
            name: '外圆1',
            type: 'pie',
            clockWise: false,
            center:['50%','50%'],
            radius: ['80%', '90%'],
            itemStyle: {normal: {label: {show: false }, labelLine: {show: false } } },
            hoverAnimation: false,
            avoidLabelOverlap: false,
            label:{normal:{show:true, position:'center', formatter:'80%\n平均上报率', textStyle:{color:'#ffffff', fontSize: 10 } } },
            data: [
                {value: 80, name: '01', itemStyle:{normal:{color:"#e92101"} } },
                {value: 20, name: 'invisible', itemStyle: {normal: {color: '#18346d', label: {show: false }, labelLine: {show: false } } } }
            ]
        }, {
            name: '内圆1',
            type: 'pie',
            animation: false,
            clockWise: false,
            center:['50%','50%'],
            radius: ['70%', '75%'],
            itemStyle: {normal: {label: {show: false }, labelLine: {show: false }} },
            hoverAnimation: false,
            data: [
                {value: 100, name: '02', itemStyle: {normal: {color: '#18346d'} } },
                {value: 0, name: 'invisible', itemStyle: {normal: {color: '#18346d', label: {show: false }, labelLine: {show: false } } } }
            ]
        }]
    };

    _charts[2].setOption(option);
    _charts[3].setOption(option);
    _charts[4].setOption(option);
}


function loadEcMap1(){
    var option = {
        tooltip: {trigger: 'item', formatter: '{b}<br/>{c}'},
        geo: {
            map: 'china',
            label: {normal:{show: false, textStyle:{color:'rgba(255,255,255,0.65)'} }, emphasis: {show: true, textStyle:{color:'rgba(255,255,255,0.65)', fontSize:16 } } },
            regions: [{name: '南海诸岛', value: 0, itemStyle: {normal: {opacity: 0}}, label:{emphasis:{show:false}} } ],
            roam: false,
            itemStyle: {normal: {areaColor: '#000B17', borderColor: '#3effeb', borderWidth:1, shadowColor: '#005E68', shadowBlur:5, shadowOffsetX:-2, shadowOffsetY:3, opacity:1 }, emphasis: {borderColor: '#FFF',label:{show:false}} } },
        series: [
            {
                name: '点',
                type: 'scatter',
                coordinateSystem: 'geo',
                symbol: 'pin', //气泡
                symbolSize: 24,
                label: {normal: {show: true, position:'bottom', formatter:"{b}", textStyle: {color: '#fff', fontSize: 10} } },
                zlevel: 6,
                data: [
                    {name: "青海", value: [101.778916,36.623178,1],symbol:"image://./assets/images/icon_coord1.png"},
                    {name: "江西", value: [115.892151,28.676493,1],symbol:"image://./assets/images/icon_coord2.png"},
                    {name: "上海", value: [121.472644,31.231706,1],symbol:"image://./assets/images/icon_coord3.png"}
                ] }
        ]
    };
    _charts2[0].setOption(option);

}
function loadEcMap2(){
    var option = {
        tooltip: {trigger: 'item', formatter: '{b}<br/>{c}'},
        geo: {
            map: 'china',
            label: {normal:{show: false, textStyle:{color:'rgba(255,255,255,0.65)'} }, emphasis: {show: true, textStyle:{color:'rgba(255,255,255,0.65)', fontSize:16 } } },
            regions: [{name: '南海诸岛', value: 0, itemStyle: {normal: {opacity: 0}}, label:{emphasis:{show:false}} } ],
            roam: false,
            itemStyle: {normal: {areaColor: '#000B17', borderColor: '#3effeb', borderWidth:1, shadowColor: '#005E68', shadowBlur:5, shadowOffsetX:-2, shadowOffsetY:3, opacity:1 }, emphasis: {borderColor: '#FFF',label:{show:false}} } },
        series: [
            {
                name: '点',
                type: 'scatter',
                coordinateSystem: 'geo',
                symbol: 'pin', //气泡
                symbolSize: 24,
                label: {normal: {show: true, position:'bottom', formatter:"{b}", textStyle: {color: '#fff', fontSize: 10} } },
                zlevel: 6,
                data: [
                    {name: "青海", value: [101.778916,36.623178,1],symbol:"image://./assets/images/icon_coord1.png"},
                    {name: "江西", value: [115.892151,28.676493,1],symbol:"image://./assets/images/icon_coord3.png"},
                    {name: "上海", value: [121.472644,31.231706,1],symbol:"image://./assets/images/icon_coord3.png"}
                ] }
        ]
    };
    _charts2[1].setOption(option);
}
function loadEcMap3(){
    var option = {
        tooltip: {trigger: 'item', formatter: '{b}<br/>{c}'},
        geo: {
            map: 'china',
            label: {normal:{show: false, textStyle:{color:'rgba(255,255,255,0.65)'} }, emphasis: {show: true, textStyle:{color:'rgba(255,255,255,0.65)', fontSize:16 } } },
            regions: [{name: '南海诸岛', value: 0, itemStyle: {normal: {opacity: 0}}, label:{emphasis:{show:false}} } ],
            roam: false,
            itemStyle: {normal: {areaColor: '#000B17', borderColor: '#3effeb', borderWidth:1, shadowColor: '#005E68', shadowBlur:5, shadowOffsetX:-2, shadowOffsetY:3, opacity:1 }, emphasis: {borderColor: '#FFF',label:{show:false}} } },
        series: [
            {
                name: '点',
                type: 'scatter',
                coordinateSystem: 'geo',
                symbol: 'pin', //气泡
                symbolSize: 24,
                label: {normal: {show: true, position:'bottom', formatter:"{b}", textStyle: {color: '#fff', fontSize: 10} } },
                zlevel: 6,
                data: [
                    {name: "青海", value: [101.778916,36.623178,1],symbol:"image://./assets/images/icon_coord1.png"},
                    {name: "江西", value: [115.892151,28.676493,1],symbol:"image://./assets/images/icon_coord3.png"},
                    {name: "上海", value: [121.472644,31.231706,1],symbol:"image://./assets/images/icon_coord3.png"}
                ] }
        ]
    };
    _charts2[2].setOption(option);
}
function loadEcMap4(){
    var option = {
        tooltip: {trigger: 'item', formatter: '{b}<br/>{c}'},
        geo: {
            map: 'china',
            label: {normal:{show: false, textStyle:{color:'rgba(255,255,255,0.65)'} }, emphasis: {show: true, textStyle:{color:'rgba(255,255,255,0.65)', fontSize:16 } } },
            regions: [{name: '南海诸岛', value: 0, itemStyle: {normal: {opacity: 0}}, label:{emphasis:{show:false}} } ],
            roam: false,
            itemStyle: {normal: {areaColor: '#000B17', borderColor: '#3effeb', borderWidth:1, shadowColor: '#005E68', shadowBlur:5, shadowOffsetX:-2, shadowOffsetY:3, opacity:1 }, emphasis: {borderColor: '#FFF',label:{show:false}} } },
        series: [
            {
                name: '点',
                type: 'scatter',
                coordinateSystem: 'geo',
                symbol: 'pin', //气泡
                symbolSize: 24,
                label: {normal: {show: true, position:'bottom', formatter:"{b}", textStyle: {color: '#fff', fontSize: 10} } },
                zlevel: 6,
                data: [
                    {name: "青海", value: [101.778916,36.623178,1],symbol:"image://./assets/images/icon_coord1.png"},
                    {name: "江西", value: [115.892151,28.676493,1],symbol:"image://./assets/images/icon_coord3.png"},
                    {name: "上海", value: [121.472644,31.231706,1],symbol:"image://./assets/images/icon_coord3.png"}
                ] }
        ]
    };
    _charts2[3].setOption(option);
}
function loadEcMap5(){
    var option = {
        tooltip: {trigger: 'item', formatter: '{b}<br/>{c}'},
        geo: {
            map: 'china',
            label: {normal:{show: false, textStyle:{color:'rgba(255,255,255,0.65)'} }, emphasis: {show: true, textStyle:{color:'rgba(255,255,255,0.65)', fontSize:16 } } },
            regions: [{name: '南海诸岛', value: 0, itemStyle: {normal: {opacity: 0}}, label:{emphasis:{show:false}} } ],
            roam: false,
            itemStyle: {normal: {areaColor: '#000B17', borderColor: '#3effeb', borderWidth:1, shadowColor: '#005E68', shadowBlur:5, shadowOffsetX:-2, shadowOffsetY:3, opacity:1 }, emphasis: {borderColor: '#FFF',label:{show:false}} } },
        series: [
            {
                name: '点',
                type: 'scatter',
                coordinateSystem: 'geo',
                symbol: 'pin', //气泡
                symbolSize: 24,
                label: {normal: {show: true, position:'bottom', formatter:"{b}", textStyle: {color: '#fff', fontSize: 10} } },
                zlevel: 6,
                data: [
                    {name: "青海", value: [101.778916,36.623178,1],symbol:"image://./assets/images/icon_coord1.png"},
                    {name: "江西", value: [115.892151,28.676493,1],symbol:"image://./assets/images/icon_coord4.png"},
                    {name: "上海", value: [121.472644,31.231706,1],symbol:"image://./assets/images/icon_coord5.png"}
                ] }
        ]
    };
    _charts2[4].setOption(option);
}
function loadEcMap6(){
    var option = {
        tooltip: {trigger: 'item', formatter: '{b}<br/>{c}'},
        geo: {
            map: 'china',
            label: {normal:{show: false, textStyle:{color:'rgba(255,255,255,0.65)'} }, emphasis: {show: true, textStyle:{color:'rgba(255,255,255,0.65)', fontSize:16 } } },
            regions: [{name: '南海诸岛', value: 0, itemStyle: {normal: {opacity: 0}}, label:{emphasis:{show:false}} } ],
            roam: false,
            itemStyle: {normal: {areaColor: '#000B17', borderColor: '#3effeb', borderWidth:1, shadowColor: '#005E68', shadowBlur:5, shadowOffsetX:-2, shadowOffsetY:3, opacity:1 }, emphasis: {borderColor: '#FFF',label:{show:false}} } },
        series: [
            {
                name: '点',
                type: 'scatter',
                coordinateSystem: 'geo',
                symbol: 'pin', //气泡
                symbolSize: 24,
                label: {normal: {show: true, position:'bottom', formatter:"{b}", textStyle: {color: '#fff', fontSize: 10} } },
                zlevel: 6,
                data: [
                    {name: "青海", value: [101.778916,36.623178,1],symbol:"image://./assets/images/icon_coord1.png"},
                    {name: "江西", value: [115.892151,28.676493,1],symbol:"image://./assets/images/icon_coord4.png"},
                    {name: "上海", value: [121.472644,31.231706,1],symbol:"image://./assets/images/icon_coord5.png"}
                ] }
        ]
    };
    _charts2[5].setOption(option);
}
function loadEcMap7(){
    var option = {
        tooltip: {trigger: 'item', formatter: '{b}<br/>{c}'},
        geo: {
            map: 'china',
            label: {normal:{show: false, textStyle:{color:'rgba(255,255,255,0.65)'} }, emphasis: {show: true, textStyle:{color:'rgba(255,255,255,0.65)', fontSize:16 } } },
            regions: [{name: '南海诸岛', value: 0, itemStyle: {normal: {opacity: 0}}, label:{emphasis:{show:false}} } ],
            roam: false,
            itemStyle: {normal: {areaColor: '#000B17', borderColor: '#3effeb', borderWidth:1, shadowColor: '#005E68', shadowBlur:5, shadowOffsetX:-2, shadowOffsetY:3, opacity:1 }, emphasis: {borderColor: '#FFF',label:{show:false}} } },
        series: [
            {
                name: '点',
                type: 'scatter',
                coordinateSystem: 'geo',
                symbol: 'pin', //气泡
                symbolSize: 24,
                label: {normal: {show: true, position:'bottom', formatter:"{b}", textStyle: {color: '#fff', fontSize: 10} } },
                zlevel: 6,
                data: [
                    {name: "青海", value: [101.778916,36.623178,1],symbol:"image://./assets/images/icon_coord1.png"},
                    {name: "江西", value: [115.892151,28.676493,1],symbol:"image://./assets/images/icon_coord4.png"},
                    {name: "上海", value: [121.472644,31.231706,1],symbol:"image://./assets/images/icon_coord5.png"}
                ] }
        ]
    };
    _charts2[6].setOption(option);
}
