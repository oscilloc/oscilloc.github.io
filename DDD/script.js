const adj = ["Daffy", "Daft", "Daily", "Dainty", "Damaged", "Damaging", "Damp", "Danceable", "Dandy", "Dangerous", "Dapper", "Daring", "Dark", "Darkened", "Dashing", "Daughterly", "Daunting", "Dawdling", "Day", "Dazed", "Dazzling", "Dead", "Deadly", "Deadpan", "Deaf", "Deafening", "Dear", "Debatable", "Debonair", "Decadent", "Decayed", "Decaying", "Deceitful", "Deceivable", "Deceiving", "Decent", "Decentralized", "Deceptive", "Decimated", "Decipherable", "Decisive", "Declining", "Decorative", "Decorous", "Decreasing", "Decrepit", "Dedicated", "Deep", "Deepening", "Defeated", "Defective", "Defendable", "Defenseless", "Defensible", "Defensive", "Defiant", "Deficient", "Definable", "Definitive", "Deformed", "Degenerative", "Degraded", "Dehydrated", "Dejected", "Delectable", "Deliberate", "Deliberative", "Delicate", "Delicious", "Delighted", "Delightful", "Delinquent", "Delirious", "Deliverable", "Deluded", "Demanding", "Demented", "Democratic", "Demonic", "Demonstrative", "Demure", "Deniable", "Dense", "Dependable", "Dependent", "Deplorable", "Deploring", "Depraved", "Depressed", "Depressing", "Depressive", "Deprived", "Deranged", "Derivative", "Derogative", "Derogatory", "Descriptive", "Deserted", "Designer", "Desirable", "Desirous", "Desolate", "Despairing", "Desperate", "Despicable", "Despised", "Despondent", "Destroyed", "Destructive", "Detachable", "Detached", "Detailed", "Detectable", "Determined", "Detestable", "Detrimental", "Devastated", "Devastating", "Devious", "Devoted", "Devout", "Dexterous", "Diabolical", "Diagonal", "Didactic", "Different", "Difficult", "Diffuse", "Digestive", "Digital", "Dignified", "Digressive", "Dilapidated", "Diligent", "Dim", "Diminishing", "Diminutive", "Dingy", "Diplomatic", "Dire", "Direct", "Direful", "Dirty", "Disabled", "Disadvantaged", "Disadvantageous", "Disaffected", "Disagreeable", "Disappearing", "Disappointed", "Disappointing", "Disapproving", "Disarming", "Disastrous", "Discarded", "Discernable", "Disciplined", "Disconnected", "Discontented", "Discordant", "Discouraged", "Discouraging", "Discourteous", "Discredited", "Discreet", "Discriminating", "Discriminatory", "Discussable", "Disdainful", "Diseased", "Disenchanted", "Disgraceful", "Disgruntled", "Disgusted", "Disgusting", "Disheartened", "Disheartening", "Dishonest", "Dishonorable", "Disillusioned", "Disinclined", "Disingenuous", "Disinterested", "Disjointed", "Dislikeable", "Disliked", "Disloyal", "Dismal", "Dismissive", "Disobedient", "Disorderly", "Disorganized", "Disparaging", "Disparate", "Dispassionate", "Dispensable", "Displaced", "Displeased", "Displeasing", "Disposable", "Disproportionate", "Disproved", "Disputable", "Disputatious", "Disputed", "Disreputable", "Disrespectful", "Disruptive", "Dissatisfied", "Dissimilar", "Dissolvable", "Dissolving", "Dissonant", "Dissuasive", "Distant", "Distasteful", "Distinct", "Distinctive", "Distinguished", "Distracted", "Distracting", "Distraught", "Distressed", "Distressing", "Distrustful", "Disturbed", "Disturbing", "Divergent", "Diverging", "Diverse", "Diversified", "Divided", "Divine", "Divisive", "Dizzy", "Dizzying", "Doable", "Documentary", "Dogged", "Doggish", "Dogmatic", "Doleful", "Dollish", "Domed", "Domestic", "Dominant", "Domineering", "Dorsal", "Doting", "Double", "Doubtful", "Doubting", "Dovish", "Dowdy", "Down", "Downhearted", "Downloadable", "Downtown", "Downward", "Dozing", "Drab", "Drained", "Dramatic", "Drastic", "Dreaded", "Dreadful", "Dreaming", "Dreamy", "Dreary", "Drenched", "Dress", "Dressy", "Dried", "Dripping", "Drivable", "Driven", "Droll", "Drooping", "Droopy", "Drowsy", "Drunk", "Dry", "Dual", "Dubious", "Due", "Dulcet", "Dull", "Duplicitous", "Durable", "Dusty", "Dutch", "Dutiful", "Dwarfish", "Dwindling", "Dynamic", "Dysfunctional"];

const nouns=["Dabblers", "Dancers", "Darlings", "Darts", "Daydreamers", "Dazzlers", "Dealers", "Debtors", "Deceivers", "Decepticons", "Decorations", "Decree", "Defenders", "Degenerates", "Dehydrators", "Delayers", "Delectables", "Delegates", "Delegation", "Deliberation", "Delights", "Demolishers", "Deniers", "Dentists", "Department", "Dependables", "Deposits", "Deputation", "Desserts", "Destiny", "Devices", "Devotees", "Dialers", "Diamonds", "Diaries", "Dictators", "Diffusion", "Digits", "Dignity", "Dilemmas", "Diluters", "Dimples", "Diners", "Dinosaurs", "Diplomats", "Directive", "Disappointments", "Disaster", "Disbelievers", "Disciples", "Disclaimers", "Discouragers", "Discoverers", "Dispute", "Disregard", "Dissenters", "Dockers", "Doctors", "Doers", "Dogs", "Dolls", "Dolphin", "Donkeys", "Donors", "Doors", "Dots", "Dragons", "Drawers", "Dreamers", "Drums", "Ducks", "Dumbbells"];

var acc = document.getElementsByClassName("subjectHeader");
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

var iid = setInterval(function(){
    /* D.D.D. has no official meaning, some variations might occur
    more frequently than others, but 3 word combination of:
    adjective, adjective, noun is fine as long as at least one of the
    two adjectives is 'Dandy' */
    var ddd = [
        adj[Math.floor(Math.random()*adj.length)],
        adj[Math.floor(Math.random()*adj.length)],
        nouns[Math.floor(Math.random()*nouns.length)]
    ];

    /* Gotta Dandy it up somewhere*/
    ddd[Math.round(Math.random())] = "Dandy";
    dddab = ddd.join(" ") + " Administration Bureau";
    
    document.getElementById("pageTitle").innerHTML = dddab;
    document.title = "- "+dddab+" -";

},2500); 

var charts = document.getElementsByClassName('subjectChart');
for(var i=0; i < charts.length; i++){
    var ratings = charts[i].id.replace('chart','ratings');
    new Chart(charts[i].id, {
      type: "line",
    options: {
        maintainAspectRatio: false,
        legend: {display: false},
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false
          }],
        }
},
      data: {
            labels: window[ratings],
        datasets: [{
            label: 'Risk Rating',
            pointRadius:3,
            pointBackgroundColor: '#990000',
          fill: false,
          lineTension: 0,
          borderColor: '#990000',
            data: window[ratings]
        },]
      }
    });
    
}

