/*
* @Author: luox
* @Date:   2018-12-22 10:35:47
* @Last Modified by:   luox
* @Last Modified time: 2019-01-07 17:03:14
*/

'use strict';


$(function(){
    bindEvent();
    loadEcAll();

    $('#event_list_container').kxbdSuperMarquee({
        isMarquee:true,
        isEqual:false,
        loop: 0,//循环滚动次数，0时无限
        scrollDelay:36,
        controlBtn:{up:'#goUM',down:'#goDM'},
        direction:'up'
    });
});

function bindEvent(){

    $(".v-tabs").on("click",".v-tab-nav-list>li",function(){
        var $this=$(this);
        $this.addClass("select").siblings("li").removeClass("select");
        $this.parent().siblings('.v-tab-list').children("dd").eq($this.index()).addClass("active").siblings("dd").removeClass("active");
    });


    $(".v-btn-group").on("click","button.v-btn",function(){
        var $this=$(this), $parent=$this.parent();
        $this.addClass("v-btn-select").siblings().removeClass("v-btn-select");
        if($parent.attr("onSelect")){
            eval($parent.attr("onSelect")).apply(this,[$this.text(),$this.index()]);
        }
    });

    $("#card-list1").on("click","li",function(){
        var $this=$(this);
        var title=$.trim($this.children(".card-title").text());
        var $list=$("#v-show-list1");
        var index=$list.children('li[data-title="'+title+'"]').index();
        $list.stop().animate({"left":-index*100+"%"});
    });

    $(".v-card-list-cl").click(function(){
        var $parent=$(this).parent();
        var $cardList= $(this).siblings('.v-card-list');
        if( $cardList.position().left<0 ){
            var aimLeft=$cardList.position().left+$parent.innerWidth();
            $cardList.stop().animate({"left":(aimLeft>0?0:aimLeft)+'px'});
        }
    });
    $(".v-card-list-cr").click(function(){
        var $parent=$(this).parent();
        var $cardList= $(this).siblings('.v-card-list');
        if( $cardList.position().left+$cardList.width() > $parent.innerWidth() ){
            $cardList.stop().animate({"left":$cardList.position().left-$parent.innerWidth()+'px'});
        }
    });


    $(window).on("resize",function(){
        $(".v-card-list").css({"left":"0px"})
    });
}


function getParams(){
    return {};
}


function onSelect1(value){
    console.log(value);
}
