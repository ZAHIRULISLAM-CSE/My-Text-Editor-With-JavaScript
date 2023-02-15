let selectTextArea=document.getElementById("text-area");
document.getElementById("bold").addEventListener("click",function(){
    if( selectTextArea.style.fontWeight=="bold"){
        selectTextArea.style.fontWeight="normal"
    }
    else{
        selectTextArea.style.fontWeight="bold";
    }  
})
document.getElementById("italic").addEventListener("click",function(){
    if(selectTextArea.style.fontStyle=="italic"){
        selectTextArea.style.fontStyle="normal";
    }
    else{
        selectTextArea.style.fontStyle="italic";
    }  
})
document.getElementById("underline").addEventListener("click",function(){
    if(selectTextArea.style.textDecoration=="underline"){
        selectTextArea.style.textDecoration="";
    }
    else{
        selectTextArea.style.textDecoration="underline";
    }  
})
document.getElementById("align-left").addEventListener("click",function(){
    if(selectTextArea.style.textAlign=="left"){
        selectTextArea.style.textAlign="none";
    }
    else{
        selectTextArea.style.textAlign="left";
    }  
})
document.getElementById("align-center").addEventListener("click",function(){
    if(selectTextArea.style.textAlign=="center"){
        selectTextArea.style.textAlign="";
    }
    else{
        selectTextArea.style.textAlign="center";
    }  
})
document.getElementById("align-right").addEventListener("click",function(){
    if(selectTextArea.style.textAlign=="right"){
        selectTextArea.style.textAlign="";
    }
    else{
        selectTextArea.style.textAlign="right";
    }  
})

document.getElementById("pixel-value").addEventListener("keyup",function(event){
     let pixelValue= event.target.value;
     pixelValue=parseInt(pixelValue);
     console.log(pixelValue);
     selectTextArea.style.fontSize=pixelValue+"px";
})
document.getElementById("pixel-value").addEventListener("click",function(event){
    let pixelValue1= document.getElementById("pixel-value").value;
    pixelValue1=parseInt(pixelValue1);
    console.log(pixelValue1);
    selectTextArea.style.fontSize=pixelValue1+"px";
})

document.getElementById("favcolor").addEventListener("input",function(event){
    const value=document.getElementById("favcolor").value;
    selectTextArea.style.color=value;
})

