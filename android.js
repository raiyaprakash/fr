function runscript() {
    setTimeout(function () {
        document.querySelector('#pane-side span[data-testid="default-group"][data-icon="default-group"]') ? startTimer() : document.getElementById("gconsole").value = "\nCongratulations Work Is Complete" + document.getElementById("gconsole").value
    }, 100)
}

function startTimer() {
    var e, t = document.querySelector('#pane-side span[data-testid="default-group"][data-icon="default-group"]');

    function o() {
        var e = document.querySelector('header._1-qgF span[dir="auto"]'),
            t = document.querySelector('header._1-qgF span[dir="auto"]').getAttribute("title"),
            a = document.getElementById("smessagematch").value.trim(),
            n = document.getElementById("smessagematch").value.trim(),
            a = document.querySelector("#pane-side ._2Z4DV._2GVnY span._1DB2K").getAttribute("title").split(a).join(" matchmessagekk "),
            n = document.querySelector("div._11liR").innerText.split(n).join(" matchmessagekk ");
        new RegExp("\\bmatchmessagekk\\b").test(a) || new RegExp("\\bmatchmessagekk\\b").test(n) ? (document.getElementById("gconsole").value = "\nAlready: " + e.getAttribute("title") + document.getElementById("gconsole").value, document.getElementById("talready").innerHTML = Number(document.getElementById("talready").innerHTML) + 1, runscript()) : document.querySelectorAll("footer._3uxr9 [contenteditable='true']")[0] ? (o = document.querySelectorAll("[contenteditable='true']")[1], event = document.createEvent("UIEvents"), o.innerHTML = document.getElementById("smessage").value, event.initUIEvent("input", !0, !0, window, 1), o.dispatchEvent(event), s(document.querySelector('span[data-icon="send"]'), "click"), document.getElementById("gconsole").value = "\nSend: " + e.getAttribute("title") + document.getElementById("gconsole").value, document.getElementById("tsend").innerHTML = Number(document.getElementById("tsend").innerHTML) + 1, document.querySelectorAll("footer._3uxr9")[0].removeAttribute("class"), document.getElementById("Sendmessagedatabase").value += "\n" + t, updatedatabase()) : (document.getElementById("gconsole").value = "\nOnly Admin: " + e.getAttribute("title") + document.getElementById("gconsole").value, document.getElementById("tadmin").innerHTML = Number(document.getElementById("tadmin").innerHTML) + 1, runscript())
    }(e = document.createEvent("MouseEvents")).initEvent("mousedown", !0, !0), t.dispatchEvent(e), document.querySelector('#pane-side span[data-testid="default-group"][data-icon="default-group"]').removeAttribute("data-icon"), setTimeout(function () {
        var e = document.querySelector('header._1-qgF span[dir="auto"]').getAttribute("title"),
            t = document.querySelector('header._1-qgF span[dir="auto"]').getAttribute("title"),
            e = document.querySelector("#Sendmessagedatabase").value.split(e).join(" Sendmessagedatabasematch ");
        !disabledtabase.checked && new RegExp("\\bSendmessagedatabasematch\\b").test(e) ? (document.getElementById("gconsole").value = "\nDatabase: " + t + document.getElementById("gconsole").value, document.getElementById("tdatabase").innerHTML = Number(document.getElementById("tdatabase").innerHTML) + 1, runscript()) : o()
    }, 0);
    var s = (e, t) => {
        var a = document.createEvent("MouseEvents");
        a.initMouseEvent(t, !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), e.dispatchEvent(a), autodelay.checked ? sendfun() : setTimeout(runscript, document.getElementById("sdelay").value)
    }
}

function sendfun() {
    document.querySelector('._2nWgr span[data-testid="msg-time"][aria-label=" Pending "][data-icon="msg-time"]') ? setTimeout(sendfun, 100) : runscript()
}

function startfun() {
    document.getElementById("startsend").style.display = "none", alert("Tool Activated.");
    var e = document.createElement("style");
    e.innerText = "@-webkit-keyframes slidein{0%{opacity:0}20%,50%,80%{opacity:1;bottom:62px}to{opacity:0;bottom:-200px;visibility:hidden}}@keyframes slidein{0%{opacity:0}20%,50%,80%{opacity:1;bottom:62px}to{opacity:0;bottom:-200px;vibility:hidden}}*{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}#app, body, html {overflow: auto!important;height:auto!important}#levelmaxblock .right{text-align:right}#levelmaxblock p{margin:8px 0;font-size:12px}#levelmaxblock p span{color:red;margin-right:10px}#levelmaxblock p i{font-style:italic}textarea{width:100%;height:60px;padding:5px;display:block;margin:0}input{width:100%;text-align:center}#levelmaxblock{width:386px;height:auto;max-height:612px;position:fixed;right:0;top:0;z-index:9999;background:#f7f7f7;border-left:1px solid rgb(6,215,85);border-bottom:1px solid rgb(6,215,85);padding:14px;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;overflow:auto}.buttonx{display:block;color:#fff;font-weight:500;width:100%;text-align:center;font-size:16px;background:purple;padding:10px;border-radius:5px;margin:10px 0 0}.buttonx.small{width:auto;display:inline-block;font-size:12px;margin:0;padding:5px 15px;background:#005cbb}.btnfull{width:100%;display:block;text-align:center;font-size:22px;color:white;background:purple;padding:10px;border-radius:5px}.cnoti{display:flex;position:fixed;right:10px;bottom:0;z-index:9999;}.cnoti span{display:block;position:relative;bottom:-200px;width:240px;margin:0 auto;padding:10px;border-radius:4px;background-color:#222;color:#fefefe;line-height:22px;text-align:center;opacity:0;transition:all .3s ease-in-out;-webkit-transition:all .3s ease-in-out;-webkit-animation:slidein 2s ease forwards;animation:slidein 2s ease forwards}#levelmaxblock p span#tspace{color:#000}", document.body.appendChild(e), null != localStorage.getItem("groupnamecontent") && (document.getElementById("removedatabase").style.display = "block", document.getElementById("Sendmessagedatabase").value = localStorage.getItem("groupnamecontent"))
}

function boldmtxt() {
    for (var e = [], t = document.getElementById("smessage").value.split("\n"), a = 0; a < t.length; a++) {
        var n = t[a].split("*").join("").trim();
        final = "*" + n + "*", e.push(final)
    }
    document.getElementById("smessage").value = e.join("\n").split("**").join("")
}

function updatedatabase() {
    var e = document.getElementById("Sendmessagedatabase");
    localStorage.setItem("groupnamecontent", e.value)
}

function removedatabase() {
    document.getElementById("removedatabase").style.display = "none", document.getElementById("snotif").innerHTML = "<span>Database Removed!</span>", null != localStorage.getItem("groupsavedatabase") ? document.getElementById("Sendmessagedatabase").value = localStorage.getItem("groupsavedatabase") : document.getElementById("Sendmessagedatabase").value = "", localStorage.removeItem("groupnamecontent")
}

function savedatabase() {
    var e = document.getElementById("Sendmessagedatabase");
    localStorage.setItem("groupsavedatabase", e.value), document.getElementById("snotif").innerHTML = "<span>Database Saved!</span>"
}

function showtool() {
    document.getElementById("levelmaxblock").style.display = "block", document.getElementById("showbtn").style.display = "none"
}

function hidetool() {
    document.getElementById("levelmaxblock").style.display = "none", document.getElementById("showbtn").style.display = "block"
}
var run = document.createElement("div");
run.innerHTML = '<a id="startsend" href="javascript:startfun()" title="Tool Activate" style="border-radius: 4px;position: fixed;z-index: 99999;background: #d3eebe;color: #000;font-size: 12px;padding: 5px 10px;border: 1px solid #aaa;right: 0;top: 0;">Send</a><div id="showbtn" style="position: fixed;right: 0;top: 0;z-index: 9999;"><a class="buttonx small" href="javascript:showtool()" title="Show">Show</a></div><div id="levelmaxblock" style="display:none"><div class="right"><a class="buttonx small" href="javascript:hidetool()" title="Close">Close</a></div><p style="margin-top:0;">Type your Message <span>*</span><a href="javascript:boldmtxt()" title="Bold Message" style="font-weight: bold;color: #005094;">*bold*</a> <i>&nbsp;_italic_&nbsp;</i> ~<del>strike</del>~</p><textarea class="selectable-text2" id="smessage" title="Type your Message" placeholder="Type your Message"></textarea><p>Match Message</p><textarea class="selectable-text2" id="smessagematch" title="Match Message" placeholder="Match Message">Match-Message</textarea><p>Group Delay Time <span>*</span></p><input type="number" id="sdelay" name="number" value="1000" placeholder="Group Delay Time" required=""/><span class="buttonx" style="background: #555;"><input type="checkbox" id="autodelay" name="auto" style="width: auto;margin-right: 5px;"/>Automatic Group Delay Time</span><p>Group Database <a href="javascript:savedatabase()" title="Save Database" style="font-weight: bold;color: #005094;">(Save)</a> &#8226; <a href="javascript:removedatabase()" title="Remove Database" style="font-weight: bold;color: #005094;">(Remove)</a></p><textarea class="selectable-text2" id="Sendmessagedatabase" title="Group Database" placeholder="Group Database"></textarea><a id="removedatabase" class="buttonx" href="javascript:removedatabase()" title="Remove Database" style="display:none">Remove Database</a><span class="buttonx" style="background: #555;"><input type="checkbox" id="disabledtabase" name="auto" style="width: auto;margin-right: 5px;"/>Disable Database</span><p>Group Console</p><textarea class="selectable-text2" id="gconsole" title="Group Console" placeholder="Group Console"></textarea><a class="buttonx" href="javascript:runscript()" title="Send Now">Send Now</a><p style="font-weight: bold;color: #005094;">Send: <span id="tsend">0</span><span id="tspace">&#8226;</span>Already: <span id="talready">0</span><span id="tspace">&#8226;</span>Only Admin: <span id="tadmin">0</span><span id="tspace">&#8226;</span>Database: <span id="tdatabase">0</span></p></div><div class="cnoti" id="snotif"></div>', document.body.appendChild(run);
