(function() {
  var Blip, blips, c, ch, clear, ctx, cw, divider, globalTick, initialBlips, pi2, rand, run;

  c = document.getElementById('c');

  ctx = c.getContext('2d');

  divider = 4;

  cw = c.width = window.innerWidth / divider;

  ch = c.height = window.innerHeight / divider;

  pi2 = Math.PI * 2;

  blips = [];

  initialBlips = 30;

  globalTick = 0;

  rand = function(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
  };

  Blip = function(x, y) {
    this.x = x;
    this.y = y;
    this.r = .1;
    this.rGrowthBase = 1;
    this.rGrowth = this.rGrowthBase;
    this.rMax = (cw + ch) / 7;
    return this.alpha = 1;
  };

  Blip.prototype.update = function(i) {
    var percent;
    percent = (this.rMax - this.r) / this.rMax;
    this.rGrowth = .1 + this.rGrowthBase * percent;
    this.r += this.rGrowth;
    this.alpha = percent;
    if (this.r > this.rMax) {
      return blips.splice(i, 1);
    }
  };

  Blip.prototype.render = function(i) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, pi2, false);
    ctx.fillStyle = 'hsla(' + rand(globalTick - 80, globalTick + 80) + ', 50%, 1%, ' + this.alpha + ')';
    return ctx.fill();
  };

  clear = function() {
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = 'hsla(0, 0%, 0%, .05)';
    ctx.fillRect(0, 0, cw, ch);
    return ctx.globalCompositeOperation = 'lighter';
  };

  run = function() {
    var i;
    window.requestAnimationFrame(run, c);
    clear();
    i = blips.length;
    while (i--) {
      blips[i].update(i);
    }
    i = blips.length;
    while (i--) {
      blips[i].render(i);
    }
    blips.push(new Blip(rand(0, cw), rand(0, ch)));
    return globalTick++;
  };

  $(window).on('resize', function() {
    cw = c.width = window.innerWidth / divider;
    return ch = c.height = window.innerHeight / divider;
  });

  window.requestAnimationFrame || (window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback, element) {
    return window.setTimeout(function() {
      return callback(+new Date());
    }, 1000 / 60);
  });

  run();

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsQ0FBQSxFQUFBLEVBQUEsRUFBQSxLQUFBLEVBQUEsR0FBQSxFQUFBLEVBQUEsRUFBQSxPQUFBLEVBQUEsVUFBQSxFQUFBLFlBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBOztFQUFBLENBQUEsR0FBSSxRQUFRLENBQUMsY0FBVCxDQUF3QixHQUF4Qjs7RUFDSixHQUFBLEdBQU0sQ0FBQyxDQUFDLFVBQUYsQ0FBYSxJQUFiOztFQUNOLE9BQUEsR0FBVTs7RUFDVixFQUFBLEdBQUssQ0FBQyxDQUFDLEtBQUYsR0FBVSxNQUFNLENBQUMsVUFBUCxHQUFrQjs7RUFDakMsRUFBQSxHQUFLLENBQUMsQ0FBQyxNQUFGLEdBQVcsTUFBTSxDQUFDLFdBQVAsR0FBbUI7O0VBQ25DLEdBQUEsR0FBTSxJQUFJLENBQUMsRUFBTCxHQUFVOztFQUNoQixLQUFBLEdBQVE7O0VBQ1IsWUFBQSxHQUFlOztFQUNmLFVBQUEsR0FBYTs7RUFDYixJQUFBLEdBQU8sUUFBQSxDQUFDLEdBQUQsRUFBTSxHQUFOLENBQUE7V0FDTCxJQUFJLENBQUMsS0FBTCxDQUFZLENBQUMsSUFBSSxDQUFDLE1BQUwsQ0FBQSxDQUFBLEdBQWdCLENBQUMsR0FBQSxHQUFNLEdBQU4sR0FBWSxDQUFiLENBQWpCLENBQUEsR0FBcUMsR0FBakQ7RUFESzs7RUFHUCxJQUFBLEdBQU8sUUFBQSxDQUFDLENBQUQsRUFBSSxDQUFKLENBQUE7SUFDTCxJQUFJLENBQUMsQ0FBTCxHQUFTO0lBQ1QsSUFBSSxDQUFDLENBQUwsR0FBUztJQUNULElBQUksQ0FBQyxDQUFMLEdBQVM7SUFDVCxJQUFJLENBQUMsV0FBTCxHQUFtQjtJQUNuQixJQUFJLENBQUMsT0FBTCxHQUFlLElBQUksQ0FBQztJQUNwQixJQUFJLENBQUMsSUFBTCxHQUFZLENB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UyxDQUFDLElBQUksSUFBSixDQUFBLENBQVY7SUFEaUIsQ0FBbkIsRUFFRSxJQUFBLEdBQU8sRUFGVDtFQURGOztFQUtGLEdBQUEsQ0FBQTtBQW5FQSIsInNvdXJjZXNDb250ZW50IjpbImMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCAnYydcbmN0eCA9IGMuZ2V0Q29udGV4dCAnMmQnXG5kaXZpZGVyID0gNFxuY3cgPSBjLndpZHRoID0gd2luZG93LmlubmVyV2lkdGgvZGl2aWRlclxuY2ggPSBjLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodC9kaXZpZGVyXG5waTIgPSBNYXRoLlBJICogMlxuYmxpcHMgPSBbXVxuaW5pdGlhbEJsaXBzID0gMzBcbmdsb2JhbFRpY2sgPSAwXG5yYW5kID0gKG1pbiwgbWF4KSAtPlxuICBNYXRoLmZsb29yKCAoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSApICsgbWluKVxuICBcbkJsaXAgPSAoeCwgeSkgLT5cbiAgdGhpcy54ID0geFxuICB0aGlzLnkgPSB5XG4gIHRoaXMuciA9IC4xXG4gIHRoaXMuckdyb3d0aEJhc2UgPSAxXG4gIHRoaXMuckdyb3d0aCA9IHRoaXMuckdyb3d0aEJhc2VcbiAgdGhpcy5yTWF4ID0gKGN3ICsgY2gpLzdcbiAgdGhpcy5hbHBoYSA9IDFcbiAgICBcbkJsaXAucHJvdG90eXBlLnVwZGF0ZSA9IChpKSAtPlxuICBwZXJjZW50ID0gKHRoaXMuck1heCAtIHRoaXMucikgLyB0aGlzLnJNYXhcbiAgdGhpcy5yR3Jvd3RoID0gLjEgKyB0aGlzLnJHcm93dGhCYXNlICogcGVyY2VudFxuICB0aGlzLnIgKz0gdGhpcy5yR3Jvd3RoXG4gIHRoaXMuYWxwaGEgPSBwZXJjZW50XG4gIGlmIHRoaXMuciA+IHRoaXMuck1heFxuICAgIGJsaXBzLnNwbGljZShpLCAxKVxuICAgICAgXG5CbGlwLnByb3RvdHlwZS5yZW5kZXIgPSAoaSkgLT5cbiAgY3R4LmJlZ2luUGF0aCgpXG4gIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMuciwgMCwgcGkyLCBmYWxzZSkgIFxuICBjdHguZmlsbFN0eWxlID0gJ2hzbGEoJytyYW5kKGdsb2JhbFRpY2sgLSA4MCwgZ2xvYmFsVGljayArIDgwKSsnLCA1MCUsIDElLCAnK3RoaXMuYWxwaGErJyknXG4gIGN0eC5maWxsKClcbiAgXG5cbmNsZWFyID0gLT5cbiAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1vdXQnXG4gIGN0eC5maWxsU3R5bGUgPSAnaHNsYSgwLCAwJSwgMCUsIC4wNSknXG4gIGN0eC5maWxsUmVjdCgwLCAwLCBjdywgY2gpXG4gIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbGlnaHRlcidcbiAgICBcbnJ1biA9IC0+XG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocnVuLCBjKVxuICBjbGVhcigpXG4gIGkgPSBibGlwcy5sZW5ndGhcbiAgYmxpcHNbaV0udXBkYXRlKGkpIHdoaWxlIGktLVxuICBpID0gYmxpcHMubGVuZ3RoXG4gIGJsaXBzW2ldLnJlbmRlcihpKSB3aGlsZSBpLS1cbiAgYmxpcHMucHVzaChuZXcgQmxpcChyYW5kKDAsIGN3KSwgcmFuZCgwLCBjaCkpKVxuICBnbG9iYWxUaWNrKytcblxuJCh3aW5kb3cpLm9uKCdyZXNpemUnLCAtPlxuICBjdyA9IGMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aC9kaXZpZGVyXG4gIGNoID0gYy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQvZGl2aWRlclxuKVxuICAgICAgICAgICAgIFxud2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fD0gXG4gIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgXG4gIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgfHwgXG4gIHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgICAgfHwgXG4gIHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSAgICAgfHwgXG4gIChjYWxsYmFjaywgZWxlbWVudCkgLT5cbiAgICB3aW5kb3cuc2V0VGltZW91dCggLT5cbiAgICAgIGNhbGxiYWNrKCtuZXcgRGF0ZSgpKVxuICAgICwgMTAwMCAvIDYwKVxuICAgICAgICAgIFxucnVuKCkgICAgICAgICAgIl19
//# sourceURL=coffeescript
