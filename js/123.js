$(function(){
	var magnify = {
		init:function(){
			this.smallWrapper=$(".small-wrapper");
			this.smallImg=this.smallWrapper.find('img');
			this.filter=this.smallWrapper.find('.filter');
			this.bigWrapper=$('.large-wrapper')
			this.bigImg=this.bigWrapper.find("img")

			this.X=0;
			this.Y=0;
			this.mouseenter();
			this.mousemove();
		},
		mouseenter:function(){
			var that=this;
			this.smallWrapper.hover(function(e){
				that.gos(e);
				that.filter.css({
					left:that.X-75,
					top:that.Y-75
				})

				that.filter.show();
				that.bigWrapper.show();
			},function(){
				that.filter.hide();
				that.bigWrapper.hide();
			})

		},

		mousemove:function(){
			var that=this;
			this.smallWrapper.mousemove(function(e){
				that.gos(e);
				that.filter.css({
					left:that.X-75,
					top:that.Y-75
				});

				that.bigImg.css({
					left:-(that.X-75)*2,
					top:-(that.Y-75)*2
				})

			})
		},
		gos:function(e){

			this.X= e.pageX-this.smallWrapper.offset().left;
			this.Y= e.pageY-this.smallWrapper.offset().top;
			this.X = (this.X < 75 ) ? 75 : ( this.X > 225 ? 225 : this.X );
			this.Y = (this.Y < 75 ) ? 75 : (this.Y > 225 ? 225 : this.Y);
		}

	};

	magnify.init();

});