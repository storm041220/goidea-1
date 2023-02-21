window.onload = function () {
    if (localStorage.getItem('token') == null) {
        window.location.href = "/auth/login";
    }
    else {
        var token = localStorage.getItem('token');
        var decoded = jwt_decode(token);
        if (decoded.role != "admin") {
            window.location.href = "/auth/login";
        }
        else {
            var id = decoded.id;
            var username = decoded.username;
            var displayName = decoded.display_name;
            var role = decoded.role;
            var email = decoded.email;
            var created_at = decoded.created_at;
            var updated_at = decoded.updated_at;

            document.getElementById('id').innerHTML = id;
            document.getElementById('username').innerHTML = username;
            document.getElementById('displayName').innerHTML = displayName;
            document.getElementById('role').innerHTML = role;
            document.getElementById('email').innerHTML = email;
            document.getElementById('created_at').innerHTML = created_at;
            document.getElementById('updated_at').innerHTML = updated_at;

    }
}

async function deleteAccount() {
    var x = confirm("Are you sure you want to delete this account?");
    if (x) {
        try {
            var res = await fetch('/auth/api/admin_remove', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                body: JSON.stringify({
                    id: id
                })
            });
            if (res.success) {
                alert(res.message);
                window.location.href = "/admin/users";
            }
            else {
                alert(res.message);
            }
        }
        catch (err) {
            alert(err);
        }
    }
    else
        return false;
}

