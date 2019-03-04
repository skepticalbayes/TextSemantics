$(document).ready(function(){
    $(document).ajaxStart($.blockUI).ajaxStop($.unblockUI);
    var csKwds=null;
    var make_req_json = function() {
        csKwds=null;
        if($("#selKwds").val()){
            csKwds = $("#selKwds").val();
        }
    }
    var create_alex_req_data = function(){
        reqData = {kwd:csKwds,
                   }
        console.log(reqData);
    }
    var debug_attr = function(){
        $('body').css({'cursor' : 'wait'});
        $.post('/admin/get_semantic_similar/',JSON.stringify(reqData),function(data){
            if(data.data){
                $('#your-modal').modal('toggle');
                $('.df').html(data.data);
                $('.resetForm').show();
                $('body').css({'cursor' : 'default'});
            }else{
                alert("Couldn't encode the given text into a tensor. Please ensure the spelling is correct.")
            }
        });
    }
    $('.getData').click(function(event) {
        make_req_json();
        if (csKwds){
            create_alex_req_data();
            debug_attr();
         }else{
            alert("Please insert a Keyword Id")
         }
    });
});