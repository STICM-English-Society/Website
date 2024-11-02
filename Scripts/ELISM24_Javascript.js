var Particle_Count = 0;

function Particle_Create(Container_Target, Source, Class, State_Start, State_End){
    var Particle = document.createElement('img');
    Particle.setAttribute("class", "Particle " + Class);
    Particle.setAttribute("src", Source);
    Particle.setAttribute("style", State_Start);
    Particle.setAttribute("draggable", "false");
    Particle.setAttribute("loading", "lazy");
    Particle_Count++;
    Particle.setAttribute("id", "Particle_" + Particle_Count);
    document.getElementById(Container_Target).appendChild(Particle);
    // setTimeout(function(){
    //     document.getElementById("Particle_" + Particle_Count).setAttribute("style", State_End);
    // }, 500);
    // setTimeout(function(){
    //     document.getElementById(Container_Target).removeChild("Particle_" + Particle_Count);
    // }, 10000);
    setTimeout(() => {
        Particle.style = State_End;
    }, 10);

    // setTimeout(() => {
    //     document.getElementById(Container_Target).removeChild(Particle);
    // }, 20000);
}

function ELISM_Start(){
    ELISM_Decoration_Particle_Generate();
    // setInterval(ELISM_Decoration_Particle_Generate, 20000);
}

function ELISM_Banner_Particle_Idle_Generate(){
    for(a = 0; a <= 20; a++){
        var OffsetX = Math.round(Randomize() * 10);
        var OffsetY = Math.round(Randomize() * 10);
        // var State_Start = `transform: scale(0.0) translate(0px, 0px);`;
        var State_End = `transform: scale(${Math.random()}) translate(${OffsetX}%, ${OffsetY}%);`;
        Particle_Create("ELISM_Banner", "Assets/Images/ELISM24/Particle_1.png", "ELISM_Sparkle", `${State_End}`, `${State_End}`);
    }
    for(a = 0; a <= 50; a++){
        var OffsetX = Math.round(Randomize() * 10);
        var OffsetY = Math.round(Randomize() * 10);
        // var State_Start = `transform: scale(0.0) translate(0px, 0px);`;
        var State_End = `transform: scale(${Math.random()}) translate(${OffsetX}%, ${OffsetY}%);`;
        Particle_Create("ELISM_Banner", "Assets/Images/ELISM24/Particle_2.png", "ELISM_Sparkle", `${State_End}`, `${State_End}`);
    }
}

function ELISM_Banner_Particle_Generate(){
    for(a = 0; a <= 20; a++){
        var OffsetX = Math.round(Randomize() * 10);
        var OffsetY = Math.round(Randomize() * 10);
        var State_Start = `transform: scale(0.0) translate(0px, 0px);`;
        var State_End = `transform: scale(0.80) translate(${OffsetX + 200}%, ${OffsetY + 200}%);`;
        Particle_Create("ELISM_Banner", "Assets/Images/ELISM24/Particle_1.png", "ELISM_Sparkle", `${State_Start}`, `${State_End}`);
    }
    for(a = 0; a <= 50; a++){
        var OffsetX = Math.round(Randomize() * 10);
        var OffsetY = Math.round(Randomize() * 10);
        var State_Start = `transform: scale(0.0) translate(0px, 0px);`;
        var State_End = `transform: scale(0.8) translate(${OffsetX + 200}%, ${OffsetY + 200}%);`;
        Particle_Create("ELISM_Banner", "Assets/Images/ELISM24/Particle_2.png", "ELISM_Sparkle", `${State_Start}`, `${State_End}`);
    }
}

function Randomize(){
    var Number = Math.ceil((Math.random() * 100));
    if (Math.random() >= 0.50){
        Number *= -1
    } else {
        Number *= 1
    }
    return Number;
}

function ELISM_Decoration_Particle_Generate(){
    var Container = document.getElementById("Page_Main_Content");
    var Container_Client_Height = Container.clientHeight;
    var Container_Client_Width = Container.clientWidth;
    for(a = 0; a <= 50; a++){
        var OffsetX = Math.round((Randomize() * 10));
        var OffsetY = Math.abs(Math.round((Randomize() * 12) + (Container_Client_Height + Randomize() + 450)));
        var State_Start = `left: ${OffsetX}px; top: ${OffsetY}px; animation-delay: ${Math.abs(Randomize() / 100) * 2}s`;
        Particle_Create("ELISM_Decorations", "Assets/Images/ELISM24/Particle_1.png", "ELISM_Sparkle_Decoration_Twinkling", `${State_Start}`, `${State_Start}`);
    }
    for(a = 0; a <= 20; a++){
        var OffsetX = Math.round((Randomize() * 10));
        var OffsetY = Math.abs(Math.round((Randomize() * 12) + (Container_Client_Height + Randomize() + 450)));
        var State_Start = `transform: scale(0.05); left: ${OffsetX}px; top: ${OffsetY}px; animation-delay: ${Math.abs(Randomize() / 100) * 2}s`;
        Particle_Create("ELISM_Decorations", "Assets/Images/ELISM24/Particle_2.png", "ELISM_Sparkle_Decoration_Twinkling", `${State_Start}`, `${State_Start}`);
    }
    for(a = 0; a <= 20; a++){
        var OffsetX = Math.round((Randomize() * 10));
        var OffsetY = Math.abs(Math.round((Randomize() * 12) + (Container_Client_Height + Randomize() + 450)));
        var State_Start = `transform: scale(0.07); left: ${OffsetX}px; top: ${OffsetY}px`;
        Particle_Create("ELISM_Decorations", "Assets/Images/ELISM24/Particle_3.png", "ELISM_Sparkle_Decoration", `${State_Start}`, `${State_Start}`);
    }
    for(a = 0; a <= 20; a++){
        var OffsetX = Math.round((Randomize() * 10));
        var OffsetY = Math.abs(Math.round((Randomize() * 12) + (Container_Client_Height + Randomize() + 450)));
        var State_Start = `transform: scale(0.07); left: ${OffsetX}px; top: ${OffsetY}px`;
        Particle_Create("ELISM_Decorations", "Assets/Images/ELISM24/Particle_4.png", "ELISM_Sparkle_Decoration", `${State_Start}`, `${State_Start}`);
    }
    // for(a = 0; a <= 50; a++){
    //     var OffsetX = Math.round(Randomize() * 10);
    //     var OffsetY = Math.round(Randomize() * 10);
    //     var State_Start = `transform: scale(0.0) translate(0px, 0px);`;
    //     var State_End = `transform: scale(0.8) translate(${OffsetX + 200}%, ${OffsetY + 200}%);`;
    //     Particle_Create("ELISM_Banner", "Assets/Images/ELISM24/Particle_2.png", "ELISM_Sparkle", `${State_Start}`, `${State_End}`);
    // }
}