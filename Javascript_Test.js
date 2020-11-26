var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.status == 200) {
       console.log(xhttp.responseText);
    }
};
xhttp.open("GET", "https://www.aia.com.my/content/dam/my-vitality/clientlibs/testjson/memberRewardsConfig-my.json", true);
xhttp.send();