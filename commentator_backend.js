var agents = {
    "Breach": "https://static.wikia.nocookie.net/valorant/images/5/53/Breach_icon.png/revision/latest/scale-to-width-down/256?cb=20201128234328",
    "Brimstone": "https://cdn.mobalytics.gg/assets/valorant/images/agents/icons/brimstone.png",
    "Cypher": "https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/displayicon.png",
    "Jett": "https://static.wikia.nocookie.net/valorant/images/3/35/Jett_icon.png/revision/latest/scale-to-width-down/185?cb=20201128234156",
    "Killjoy": "https://cdn.mobalytics.gg/assets/valorant/images/agents/icons/killjoy.png",
    "Omen": "https://static.wikia.nocookie.net/valorant/images/9/98/F7ef8a9cd9df397ae7cfb44f843d64f2af0b983d.png/revision/latest/scale-to-width-down/100?cb=20200910061034",
    "Phoenix": "https://cdn.mobalytics.gg/assets/valorant/images/agents/icons/phoenix.png",
    "Raze": "https://cdn.mobalytics.gg/assets/valorant/images/agents/icons/raze.png",
    "Reyna": "https://cdn.mobalytics.gg/assets/valorant/images/agents/icons/reyna.png",
    "Sage": "https://static.wikia.nocookie.net/valorant/images/7/74/Sage_icon.png/revision/latest/scale-to-width-down/256?cb=20201128234057",
    "Skye": "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/displayicon.png",
    "Sova": "https://cdn.mobalytics.gg/assets/valorant/images/agents/icons/sova.png",
    "Viper": "https://static.wikia.nocookie.net/valorant/images/5/5f/Viper_icon.png/revision/latest/scale-to-width-down/256?cb=20201128234408",
    "Yoru": "https://static.wikia.nocookie.net/valorant/images/d/d4/Yoru_icon.png/revision/latest/scale-to-width-down/99?cb=20210112211830",
};

var attackers_save = {}
var defenders_save = {}

function post(){
    var agent1_1 = $("#agent1-1 option:selected").text()
    var name1_1 = document.getElementById("agentname1-1").value
    document.getElementById("first_agent").innerHTML = "";
    var img1_1 = document.createElement("img")
    img1_1.src = agents[agent1_1]
    img1_1.id = 'agent1-1'
    img1_1.style.width = "100px"
    img1_1.style.height = "100px"
    var defenders = document.getElementById("first_agent")
    defenders.appendChild(img1_1)
    defenders.innerHTML += "&nbsp;&nbsp;&nbsp; <span id='agent1_1' style='font-weight:bold; font-size:30px'>" + name1_1 + "</span>"
    defenders_save[name1_1] = agent1_1

    var agent1_2 = $("#agent1-2 option:selected").text()
    var name1_2 = document.getElementById("agentname1-2").value
    document.getElementById("second_agent").innerHTML = "";
    var img1_2 = document.createElement("img")
    img1_2.src = agents[agent1_2]
    img1_2.id = 'agent1-2'
    img1_2.style.width = "100px"
    img1_2.style.height = "100px"
    var defenders = document.getElementById("second_agent")
    defenders.appendChild(img1_2)
    defenders.innerHTML += "&nbsp;&nbsp;&nbsp; <span id='agent1_2' style='font-weight:bold; font-size:30px'>" + name1_2 + "</span>"
    defenders_save[name1_2] = agent1_2

    var agent1_3 = $("#agent1-3 option:selected").text()
    var name1_3 = document.getElementById("agentname1-3").value
    document.getElementById("third_agent").innerHTML = "";
    var img1_3 = document.createElement("img")
    img1_3.src = agents[agent1_3]
    img1_3.id = 'agent1-3'
    img1_3.style.width = "100px"
    img1_3.style.height = "100px"
    var defenders = document.getElementById("third_agent")
    defenders.appendChild(img1_3)
    defenders.innerHTML += "&nbsp;&nbsp;&nbsp; <span id='agent1_3' style='font-weight:bold; font-size:30px'>" + name1_3 + "</span>"
    defenders_save[name1_3] = agent1_3

    var agent1_4 = $("#agent1-4 option:selected").text()
    var name1_4 = document.getElementById("agentname1-4").value
    document.getElementById("fourth_agent").innerHTML = "";
    var img1_4 = document.createElement("img")
    img1_4.src = agents[agent1_4]
    img1_4.id = 'agent1-4'
    img1_4.style.width = "100px"
    img1_4.style.height = "100px"
    var defenders = document.getElementById("fourth_agent")
    defenders.appendChild(img1_4)
    defenders.innerHTML += "&nbsp;&nbsp;&nbsp; <span id='agent1_4' style='font-weight:bold; font-size:30px'>" + name1_4 + "</span>"
    defenders_save[name1_4] = agent1_4

    var agent1_5 = $("#agent1-5 option:selected").text()
    var name1_5 = document.getElementById("agentname1-5").value
    document.getElementById("fifth_agent").innerHTML = "";
    var img1_5 = document.createElement("img")
    img1_5.src = agents[agent1_5]
    img1_5.id = 'agent1-5'
    img1_5.style.width = "100px"
    img1_5.style.height = "100px"
    var defenders = document.getElementById("fifth_agent")
    defenders.appendChild(img1_5)
    defenders.innerHTML += "&nbsp;&nbsp;&nbsp; <span id='agent1_5' style='font-weight:bold; font-size:30px'>" + name1_5 + "</span>"
    defenders_save[name1_5] = agent1_5

    var agent2_1 = $("#agent2-1 option:selected").text()
    var name2_1 = document.getElementById("agentname2-1").value
    document.getElementById("sixth_agent").innerHTML = "";
    var img2_1 = document.createElement("img")
    img2_1.src = agents[agent2_1]
    img2_1.id = 'agent2-1'
    img2_1.style.width = "100px"
    img2_1.style.height = "100px"
    var attackers = document.getElementById("sixth_agent")
    attackers.appendChild(img2_1)
    attackers.innerHTML += "&nbsp;&nbsp;&nbsp; <span id='agent2_1' style='font-weight:bold; font-size:30px'>" + name2_1 + "</span>"
    attackers_save[name2_1] = agent2_1

    var agent2_2 = $("#agent2-2 option:selected").text()
    var name2_2 = document.getElementById("agentname2-2").value
    document.getElementById("seventh_agent").innerHTML = "";
    var img2_2 = document.createElement("img")
    img2_2.src = agents[agent2_2]
    img2_2.id = 'agent2-2'
    img2_2.style.width = "100px"
    img2_2.style.height = "100px"
    var attackers = document.getElementById("seventh_agent")
    attackers.appendChild(img2_2)
    attackers.innerHTML += "&nbsp;&nbsp;&nbsp; <span id='agent2_2' style='font-weight:bold; font-size:30px'>" + name2_2 + "</span>"
    attackers_save[name2_2] = agent2_2

    var agent2_3 = $("#agent2-3 option:selected").text()
    var name2_3 = document.getElementById("agentname2-3").value
    document.getElementById("eighth_agent").innerHTML = "";
    var img2_3 = document.createElement("img")
    img2_3.src = agents[agent2_3]
    img2_3.id = 'agent2-3'
    img2_3.style.width = "100px"
    img2_3.style.height = "100px"
    var attackers = document.getElementById("eighth_agent")
    attackers.appendChild(img2_3)
    attackers.innerHTML += "&nbsp;&nbsp;&nbsp; <span id='agent2_3' style='font-weight:bold; font-size:30px'>" + name2_3 + "</span>"
    attackers_save[name2_3] = agent2_3

    var agent2_4 = $("#agent2-4 option:selected").text()
    var name2_4 = document.getElementById("agentname2-4").value
    document.getElementById("ninth_agent").innerHTML = "";
    var img2_4 = document.createElement("img")
    img2_4.src = agents[agent2_4]
    img2_4.id = 'agent2-4'
    img2_4.style.width = "100px"
    img2_4.style.height = "100px"
    var attackers = document.getElementById("ninth_agent")
    attackers.appendChild(img2_4)
    attackers.innerHTML += "&nbsp;&nbsp;&nbsp; <span id='agent2_4' style='font-weight:bold; font-size:30px'>" + name2_4 + "</span>"
    attackers_save[name2_4] = agent2_4

    var agent2_5 = $("#agent2-5 option:selected").text()
    var name2_5 = document.getElementById("agentname2-5").value
    document.getElementById("tenth_agent").innerHTML = "";
    var img2_5 = document.createElement("img")
    img2_5.src = agents[agent2_5]
    img2_5.id = 'agent2-5'
    img2_5.style.width = "100px"
    img2_5.style.height = "100px"
    var attackers = document.getElementById("tenth_agent")
    attackers.appendChild(img2_5)
    attackers.innerHTML += "&nbsp;&nbsp;&nbsp; <span id='agent2_5' style='font-weight:bold; font-size:30px'>" + name2_5 + "</span>"
    attackers_save[name2_5] = agent2_5

    var attackers = document.getElementById("attackers1")
    var attackers_name = document.getElementById("attackers").value
    document.getElementById("attackers1").innerHTML = "";
    attackers.innerHTML += "<span id='attacker-name' style='font-weight:bold; font-size:40px'>" + attackers_name + "</span>"

    var defenders = document.getElementById("defenders1")
    var defenders_name = document.getElementById("defenders").value
    document.getElementById("defenders1").innerHTML = "";
    defenders.innerHTML += "<span id='defender-name' style='font-weight:bold; font-size:40px'>" + defenders_name + "</span>"

    attackers_save["team_name"] = attackers_name
    defenders_save["team_name"] = defenders_name

    document.getElementById("submit").innerHTML = "Switch";

    console.log(attackers_save)
    console.log(defenders_save)

}

function swap(){

    var temp = $("#attackers_name").css("background-color")
    document.getElementById("attackers_name").style.backgroundColor = $("#defenders_name").css("background-color")
    document.getElementById("defenders_name").style.backgroundColor = temp

    var temp = document.getElementById("a_name").innerHTML
    document.getElementById("a_name").innerHTML = document.getElementById("d_name").innerHTML
    document.getElementById("d_name").innerHTML = temp
}

$(document).ready(function(){

    // when the user presses submit or enter
    $("#submit").click(function(){
        if (document.getElementById("submit").innerHTML == "Submit"){
            post()
        }
        else{
            swap()
        }
    })
})