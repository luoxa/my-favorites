/*
* @Author: luox
* @Date:   2018-12-25 11:27:58
* @Last Modified by:   luox
* @Last Modified time: 2018-12-28 17:01:20
*/

'use strict';

var _charts=initEcharts("ec1","ec2" );
var _charts2=initEcharts("ec_map1","ec_map2","ec_map3","ec_map4","ec_map5","ec_map6","ec_map7");



function rand(max){
    return Math.floor(Math.random()*(max||100));
}


function loadEcAll(){
    loadEc1();
    loadEc2();

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
        legend: {data: ['投资收益', '扶贫企业'], textStyle: {color: '#ccc'} },
        xAxis: {data: ['事故','异常','越限','变位','告知'], axisLine: {lineStyle: {color: '#ccc'} }, axisLabel:{interval:0 } },
        yAxis: {splitLine: {show: false }, axisLine: {lineStyle: {color: '#ccc'} } },
        series: [{
            name: '信号数量', type: 'pictorialBar', symbol: 'rect', symbolRepeat: true, symbolSize: [12, 4], symbolMargin: 1,
            itemStyle: {normal: {color: '#0badb2'} },
            data: [rand(),rand(),rand(),rand(),rand()]
        }]
    };

    _charts[0].setOption(option);

}

function loadEc2(){
    var option = {
        tooltip: {trigger: 'axis', axisPointer: {type: 'shadow', label: {show: true, backgroundColor: '#333'} } },
        grid:{x:60,x2:10,y:40,y2:30},
        legend: {data: ['严重', '危急', '一般'], textStyle: {color: '#ccc'} },
        xAxis: {data: ['主变','母线','开关','刀闸','电容','电抗'], axisLine: {lineStyle: {color: '#ccc'} } },
        yAxis: {splitLine: {show: false }, axisLine: {lineStyle: {color: '#ccc'} } },
        series: [
            {
                name: '严重',
                type: 'pictorialBar',
                symbol: 'rect',
                itemStyle: {normal: {color: '#f00'} },
                symbolRepeat: true,
                symbolSize: [12, 4],
                symbolMargin: 1,
                data: [rand(),rand(),rand(),rand(),rand(),rand()]
            },
            {
                name: '危急',
                type: 'pictorialBar',
                symbol: 'rect',
                itemStyle: {normal: {color: '#ff0'} },
                symbolRepeat: true,
                symbolSize: [12, 4],
                symbolMargin: 1,
                data: [rand(),rand(),rand(),rand(),rand(),rand()]
            },
            {
                name: '一般',
                type: 'pictorialBar',
                symbol: 'rect',
                itemStyle: {normal: {color: '#32d588'} },
                symbolRepeat: true,
                symbolSize: [12, 4],
                symbolMargin: 1,
                data: [rand(),rand(),rand(),rand(),rand(),rand()]
            }
        ]
    };

    _charts[1].setOption(option);
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
