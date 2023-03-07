

$where("#add_people").submit(function(event){
    alert("Data inserted Successfully");
})

$("#update_people").submit(function(event){
    event.preventDefault();

    var unindexed_array=$(this).serializeArray();
    var data={}

    $.map(unindexed_array, function(n,i){
        data[n['name']]=n['value']
    })

    var request={
        "url":`http://localhost:5000/api/users/${data.id}`,
        "method":"PUT",
        "data":data
    }
    $.ajax(request).done(function(response){
        alert("Data Updated Successfully");
    })
})