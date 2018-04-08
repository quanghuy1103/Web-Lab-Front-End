/**
 * Created by Bui Quang Huy on 14/03/2017.
 */
function init()
{
    var tmp = window.localStorage.getItem("count");
    if (tmp == null || tmp == "undefined")
        window.localStorage.setItem("count", 0);
}

function show(x) {
    var t=document.getElementById(x);
    t.style.display="block";
}
function unshow(x){
    var t=document.getElementById(x);
    t.style.display="none";
}

function tim(ma)
{
    var c=window.localStorage.getItem("count");
    if(c!=null)
    {
        for(var i=1;i<=c;i++)
        {
            var v=window.localStorage.getItem(i);
            if(v!=null)
            {
                if(v.indexOf(ma)>=0)
                    return i;
            }
        }
    }
    return -1;
}

function add(ma, hinh, ten, gia) {
    var pos = tim(ma);
    if (pos == -1) {
        var c = window.localStorage.getItem("count");
        c++;
        window.localStorage.setItem("count", c);
        window.localStorage.setItem(c, ma + "," + hinh + "," + ten + "," + gia + ",1");
        alert("Bạn đã thêm thành công");
    }
    else {

        alert("SP đã có trong giỏ");
    }
}

function xuathien() {
    var sum = 0;
    var s = "<tr style='background-color: #f5f5f5'>";
    s += "<td>Tên sản phẩm</td>";
    s += "<td>Giá sản phẩm</td>";
    s += "<td>Số lượng</td>";
    s += "<td>Tổng</td>";
    s += "<td>Xóa</td>";
    s += "</tr>";
    var c=window.localStorage.getItem("count");
    if(c!=null)
    {
        for(var i=1;i<=c;i++)
        {
            var v=window.localStorage.getItem(i);
            if(v!=null)
            {
                var arr=v.split(",");
                s +="<tr>";
                s +="<td><img src='" + arr[1] + "' style='float: left; margin-left: 20px;'><div style='margin-left: 120px; float: left'>" + arr[2] + "</div></td>";
                s +="<td>" + arr[3] + "&nbspVNĐ</td>";
                s +="<td><input onchange='sll(this.value," + i + ")' type='number' value=" + arr[4] + " min='1' max='20'></td>";
                s +="<td>" + arr[3]*arr[4] + "&nbspVNĐ</td>";
                s +="<td><input type='button' value='Xóa' onclick='r(" + i + ")'></td>";
                s +="</tr>";
                sum=sum + arr[3]*arr[4];
            }
        }
    }
    s +="<tr>";
    s +="<td></td>"
    s +="<td colspan='4' style='text-align: center;'>Tổng tiền:&nbsp<h4 style='color: red;'>" + sum + "&nbspVNĐ</h4></td>"
    s +="</tr>";
    var thediv = document.getElementById("cart");
    thediv.innerHTML = s;

}

function sll(x,y) {
   var c = window.localStorage.getItem(y);
   var arr = c.split(",");
   window.localStorage.setItem(y, arr[0] + "," + arr[1] + "," + arr[2] + "," + arr[3] + "," + x);
   location.reload(true);
}

function r(x) {
    if(window.confirm("Bạn có chắc chắn muốn xóa?")==true){
    var c = window.localStorage.getItem("count");
    for(var i=x;i<c;i++) {
        var d = window.localStorage.getItem(i + 1);
        window.localStorage.setItem(i, d);
    }
    localStorage.removeItem(c);
    c-- ;
    window.localStorage.setItem("count", c);
    location.reload(true);}
}