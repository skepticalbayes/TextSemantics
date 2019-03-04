$(document).ready(function(){

    function GetUnique(inputArray){
        var outputArray = [];

        for (var i = 0; i < inputArray.length; i++)
        {
            if ((jQuery.inArray(inputArray[i], outputArray)) == -1)
            {
                outputArray.push(inputArray[i]);
            }
        }
        return outputArray;
    }
    $(document).ajaxStart($.blockUI).ajaxStop($.unblockUI);
    var pid=null;
    var count=null;
    var csKwds=null;
    var method=null;
    var grp=null;
    var make_req_json = function() {
        pid=null;
        count=null;
        csKwds=null;
        method=null;
        grp=null;
        if($("#selPid").val()){
            pid = $("#selPid").val();
        }
        if($("#selCount").val()){
            count = $("#selCount").val();
        }
        if($("#selKwds").val()){
            csKwds = $("#selKwds").val();
        }
        if($("#method").val()){
            method = $("#method").val();
        }
        if($("#grp").val()){
            grp = $("#grp").val();
        }
    }

    var create_alex_req_data = function(){
        reqData = {pid:pid,
                   count:count,
                   csKwds:csKwds,
                   recomm:method,
                   grp:grp}
        console.log(reqData);
    }
    var debug_attr = function(){
        $('body').css({'cursor' : 'wait'});
        $.post('/admin/get_user_recomm/',JSON.stringify(reqData),function(data){
            $('#your-modal').modal('toggle');
            $('.df').html(data.data);
            $('body').css({'cursor' : 'default'});
        });
    }
    $('.getData').click(function(event) {
        make_req_json();
        if (pid){
            create_alex_req_data();
            debug_attr();
         }else{
            alert("Please insert a Person Id")
         }
    });
});