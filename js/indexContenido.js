function ajax(donde,que,hacer){
    $.ajax({
       
        url : donde,
    
       
            data : que,
    
      
        type : 'POST',
    
       
        dataType : 'html',
    
       
        success : function(data) {
            hacer(data);
        },
    
      
        error : function(xhr, status) {
            alert('Disculpe, existió un problema');
        }
    
        
        
    });
    }




function obtenerInicio(){
    let donde="vistas/Inicio.php";
    let que="";
    let hacer= function (data){
        $("#aquivatodo").html(data);
    };
    ajax(donde,que,hacer);
}