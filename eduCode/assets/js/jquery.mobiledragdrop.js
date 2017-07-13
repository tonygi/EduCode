(function($)
{
  var currentDrag="";
  var ruleChecked=false;
  var dragCounter=0;
  var mouseX=0;
  var mouseY=0;
  var liftX=0;
  var liftY=0;
  var inloop=0;
  var distanceFromCursor = 5;
  $(document).bind('mousemove touchmove',function(e){
    mouseX=e.pageX;
    mouseY=e.pageY;
    $("#ghost").css({top:(mouseY-liftY + distanceFromCursor)+"px",left:(mouseX-liftX + distanceFromCursor)+"px"});
  });
  function IsValidDrop(id){
    var returnValue=false;
    var currentDragParent="#"+ $(currentDrag).parent().attr("id");
    
    if(currentDragParent==id  || (id == "#drop3" && currentDrag == "#drag1")){
      if(ruleChecked){
        returnValue=true;
      }else{
        returnValue=false;
      }
    }else{
      returnValue=true;
    }
    ruleChecked=true;
	if (returnValue && id == "#drop3"){
		inloop = inloop + 1;
	}
	if (returnValue && currentDragParent == "drop3"){
		inloop = inloop -1;
	}
	if(inloop != 0){
		var height = inloop * 75;
		document.getElementById('drop3').style.backgroundSize = "27px "+height+"px";
	}
	
	return returnValue;
  }
  function ProcessDragEvent(id,dragSelector,dropSelector,statusSelector,selectedClass,activeClass){
    currentDrag=id;
    ruleChecked=false;
    $(dragSelector).removeClass(selectedClass);
    $(currentDrag).addClass(selectedClass);
    $("#ghost").remove();
    $(currentDrag).clone().attr("id","ghost").css({position:"absolute"}).appendTo("body").fadeTo(0,0.5);
    if(statusSelector.length>0){
      $(statusSelector).find("#dragging").html(currentDrag);
    }
    if(currentDrag.length>1){
      $(dropSelector).addClass(activeClass);
    }
  }
  function ProcessDropEvent(id,dragSelector,dropSelector,statusSelector,selectedClass,activeClass){
    if(IsValidDrop(id)&&$(id).hasClass(activeClass)){
      if(currentDrag.length>1){
        $("#ghost").remove();
        $(currentDrag).removeClass(selectedClass);
        $(currentDrag).remove().prependTo(id);
        ProcessDragEvent("",dragSelector,dropSelector,statusSelector,selectedClass,activeClass);
        if(statusSelector.length>0){
          $(statusSelector).find("#dropping").html(id);
        }
      }
      $(dropSelector).removeClass(activeClass);
    }
  }
  $.fn.mobiledraganddrop=function(settings){
    var config={
      classmodifier:"mobiledraganddrop",
      targets:".drop",
      status:"",
      selectedclass:"selected",
      activeclass:"active"
    };
    dragCounter++;
    var selectorForDropZones="";
    var selectorForDraggables="";
    var selectorForStatus="";
    var selectedClass="";
    var activeClass="";
    if(settings){
      $.extend(config,settings);
    }
    return this.each(function(){
      selectedClass=config.selectedclass;
      activeClass=config.activeclass;
      selectorForDropZones="."+ config.classmodifier+ dragCounter+"drop";
      $(config.targets).addClass(config.classmodifier+ dragCounter+"drop");
      selectorForDraggables="."+ config.classmodifier+ dragCounter+"drag";
      $(this).addClass(config.classmodifier+ dragCounter+"drag");
      selectorForStatus=config.status;
      if(selectorForStatus.length>0){
        $(selectorForStatus).html('<p>Dragging: <span id="dragging">&nbsp;</span><br>Dropping: <span id="dropping">&nbsp;</span></p>');
      }
      $(selectorForDraggables).unbind("mousedown");
      $(selectorForDraggables).unbind("touchstart");
      $(selectorForDraggables).live("mousedown touchstart",function(){
        var id="#"+ $(this).attr("id");
        ProcessDragEvent(id,selectorForDraggables,selectorForDropZones,selectorForStatus,selectedClass,activeClass);
        return false;
      });
      $(selectorForDropZones).live("mouseup touchend",function(){
        var id="#"+ $(this).attr("id");
        ProcessDropEvent(id,selectorForDraggables,selectorForDropZones,selectorForStatus,selectedClass,activeClass);
        return false;
      });
    });
  };
})(jQuery);
