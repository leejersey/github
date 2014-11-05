;(function($){

    $.fn.lee_tab=function(options){
        var defaults={
            //各种参数，各种熟悉
            activeClass:'active',
            tabNav:'.lee_ul>li',
            tabCon:'.lee_main>div',
            eventType:'click'
        }

        var options=$.extend(defaults,options);

        this.each(function(){
            //实现功能的代ma
            var _this=$(this);
            _this.find(options.tabNav).bind(options.eventType,function(){
                $(this).addClass(options.activeClass).siblings().removeClass(options.activeClass);
                var index=$(this).index();
                _this.find(options.tabCon).eq(index).show().siblings().hide();
            });

        });

        return this;
    }

})(jQuery);