/*
* @Author: luox
* @Date:   2018-05-03 15:24:13
* @Last Modified by:   luox
* @Last Modified time: 2018-12-25 10:21:38
*/

'use strict';

/**
 * 提取根目录
 */
var path=(function getRootPath(){
    var pathName=window.document.location.pathname;
    var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);
    return projectName;
})();

/**
 * echarts初始化实例及统一自适应
 * @returns echarts实例数组
 */
var ECHARTS_THEME="macarons";//echarts主题
function initEcharts(){
    var chartIds=[].slice.call(arguments);
    var charts=$.map(chartIds,function(chartId){
        var dom=document.getElementById(chartId);
        return dom ? echarts.init(dom,ECHARTS_THEME) : {setOption:function(){console.error("Error：invalid element of echarts, id = " +chartId);}};

    });
    $(window).on("resize",function(){
        $.each(charts,function(){
            this.resize && this.resize();
        });
    });
    return charts;
}

/**
 * miniui表格查询，支持指定表单或自定义参数过滤表格数据
 */
function loadGrid(grid_id,forms_id,params){
    var grid=mini.get(grid_id);
    var formParams=forms_id ? (new mini.Form("#"+forms_id)).getData() : {};
    grid.load($.extend(true,{},formParams,params));
}

/**
 * 扩展jQuery提取url参数方法
 */
;(function($){
    $.getUrlParam = function(name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r!=null){
            return unescape(r[2]);
        }
        return null;
    };
})(jQuery);