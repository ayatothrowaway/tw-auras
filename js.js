let mainDiv;


let categoriesHtml = 
`
<div id="container-categories">
            <button class="card neon neon-green" id="refor-btn" onclick="navigateDivs('refor-btn','container-categories','container-abilites')">
                <h1>強</h1>
                <h2>Reforço</h2>
            </button>
            <button class="card neon neon-purple" id="manip-btn" onclick="navigateDivs('manip-btn','container-categories','container-abilites')">
                <h1>操</h1>
                <h2>Manipulação</h2>
            </button>
            <button class="card neon neon-red" id="conju-btn" onclick="navigateDivs('conju-btn','container-categories','container-abilites')">
                <h1>具</h1>
                <h2>Conjuração</h2>
            </button>
            <button class="card neon neon-yellow" id="emiss-btn" onclick="navigateDivs('emiss-btn','container-categories','container-abilites')">
                <h1>射</h1>
                <h2>Emissão</h2>
            </button>
            <button class="card neon neon-orange" id="trans-btn" onclick="navigateDivs('trans-btn','container-categories','container-abilites')">
                <h1>換</h1>
                <h2 style="font-size: 13px;">Transmutação</h2>
            </button>
            <button class="card neon neon-blue" id="espac-btn" onclick="navigateDivs('espac-btn','container-categories','container-abilites')">
                <h1>宇</h1>
                <h2>Espacial</h2>
            </button>
        </div>
`;

let abilitiesHtml_refor = 
`
<div id="container-abilites">
    <div class="ability-header">
        <button class="card neon neon-green" id="back-card" onclick="navigateDivs('back-card','container-abilites','container-categories')">
            <h1>強</h1>
        </button>
        <h1>Reforço</h1>
        <p>Categoria de suporte que envolve o fortalecimento e aprimoramento de si mesmo, de pessoas ou de objetos.</p>
    </div>
    <div class="ability-list">
        <div class="container-fluxo">
            <button class="abi-item neon-green-border" data-line="line11" data-title="強 - Fortalecer" data-desc="Você fortalece a força da sua aura com esse poder.">強</button>
        </div>
        <div class="container-fluxo">
            <button class="abi-item neon-green-border" data-line="line11o" data-title="生 - Regeneração" data-desc="Habilidades de regeneração que permitem curar-se">生</button>
            <div style="overflow: visible;">
                <div class="line" style="height: 70px;"></div>
                <div class="line" style="height: 50px; transform: rotate(90deg);"></div>
            </div>
            <button class="abi-item neon-green-border" data-line="line11o" data-title="硬 - Endurecer" data-desc="Aumenta a resistência a danos ou a robustez da sua Aura.">硬</button>
        </div>
        <div class="container-fluxo">
            <button class="abi-item neon-green-border" data-line="line13" data-title="拡 - Ampliar" data-desc="Aumenta o tamanho da aura em todos os aspectos.">拡</button>
            <div style="overflow: visible;">
                <div class="line" style="height: 50px; transform: rotate(90deg);"></div>
            </div>
            <button class="abi-item neon-green-border" data-line="line12" data-title="善 - Aprimorar" data-desc="Melhora habilidades ou atributos específicos.">善</button>
            <div style="overflow: visible;">
                <div class="line" style="height: 50px; transform: rotate(90deg);"></div>
            </div>
            <button class="abi-item neon-green-border" data-line="line13" data-title="速 - Acelerar" data-desc="Aumenta a velocidade da sua energia.">速</button>
        </div>
    </div>
    <div id="ability-desc">
        <p id="ab-title"></p>
        <p id="ab-desc"></p>
    </div>
</div>
`;

let abilitiesHtml_manip = 
`
<div id="container-abilites">
    <div class="ability-header">
        <button class="card neon neon-purple" id="back-card" onclick="navigateDivs('back-card','container-abilites','container-categories')">
            <h1>操</h1>
        </button>
        <h1>Manipulação</h1>
        <p>Envolve a capacidade de manipular objetos, seres ou energias de forma controlada.</p>
    </div>
    <div class="ability-list">
        <div class="container-fluxo">
            <button class="abi-item neon-purple-border" data-line="line11" data-title="変 - Moldar" data-desc="Alterar a forma da sua energia para objetos simples.">変</button>
        </div>
        <div class="container-fluxo" style="height: 30px">
            <div style="overflow: visible;">
                <div class="line" style="height: 50px;"></div>
            </div>
        </div>
        <div class="container-fluxo">
            <button class="abi-item neon-purple-border" data-line="line12" data-title="制 - Controlar" data-desc="Capacidade de controlar diretamente a sua energia.">制</button>
        </div>
        <div class="container-fluxo">
            <button class="abi-item neon-purple-border" data-line="line13" data-title="憑 - Possessão" data-desc="Capacidade de tomar o corpo de alguém com a sua energia.">憑</button>
            <div style="overflow: visible;">
                <div class="line" style="height: 70px;"></div>
                <div class="line" style="height: 50px; transform: rotate(90deg);"></div>
            </div>
            <button class="abi-item neon-purple-border" data-line="line13" data-title="提 - Sugestão" data-desc="Implantar ideias na mente de outros através da sua energia.">提</button>
        </div>
        <div class="container-fluxo">
            <button class="abi-item neon-purple-border" data-line="line13" data-title="形 - Marionete" data-desc="Habilidade de controlar movimentos de objetos como se fossem marionetes.">形</button>
        </div>
    </div>
    <div id="ability-desc">
        <p id="ab-title"></p>
        <p id="ab-desc"></p>
    </div>
</div>
`;

let abilitiesHtml_conju = 
`
<div id="container-abilites">
            <div class="ability-header">
                <button class="card neon neon-red" id="back-card" onclick="navigateDivs('back-card','container-abilites','container-categories')">
                    <h1>具</h1>
                </button>
                <h1>Conjuração</h1>
                <p>Criação de itens, armas ou objetos a partir de energia.</p>
            </div>
            <div class="ability-list">
                <div class="container-fluxo">
                    <button class="abi-item neon-red-border" data-line="line11" data-title="呼 - Evocar" data-desc="Conjurar armas específicas para uso, elas concedem um ponto extra de ataque para a Aura.">呼</button>
                </div>
                <div class="container-fluxo">
                    <button class="abi-item neon-red-border" data-line="line12" data-title="剣 - Espada" data-desc="Conjurar uma espada para combate ou defesa.">剣</button>
                    <div style="overflow: visible;">
                        <div class="line" style="height: 70px;"></div>
                        <div class="line" style="height: 50px; transform: rotate(90deg);"></div>
                    </div>
                    <button class="abi-item neon-red-border" data-line="line12" data-title="斧 - Machado" data-desc="Conjurar um machado para cortar ou derrubar.">斧</button>
                </div>
                <div class="container-fluxo">
                    <button class="abi-item neon-red-border" data-line="line12" data-title="槍 - Lança" data-desc="Conjurar uma lança para atacar ou manter distância no combate.">槍</button>
                    <div style="overflow: visible;">
                        <div class="line" style="height: 70px;"></div>
                        <div class="line" style="height: 50px; transform: rotate(90deg);"></div>
                    </div>
                    <button class="abi-item neon-red-border" data-line="line12" data-title="鎌 - Foice" data-desc="Conjurar uma foice para ceifar ou cortar com precisão.">鎌</button>
                </div>
                <div class="container-fluxo">
                    <button class="abi-item neon-red-border" data-line="line12" data-title="弓 - Arco" data-desc="Conjurar um arco para atirar flechas com habilidade e precisão.">弓</button>
                </div>
            </div>
            <div id="ability-desc">
                <p id="ab-title"></p>
                <p id="ab-desc"></p>
            </div>
        </div>
`;

let abilitiesHtml_emiss = 
`
<div id="container-abilites">
    <div class="ability-header">
        <button class="card neon neon-yellow" id="back-card" onclick="navigateDivs('back-card','container-abilites','container-categories')">
            <h1>射</h1>
        </button>
        <h1>Emissão</h1>
        <p>Capacidade de criar e projetar energia para fora do corpo.</p>
    </div>
    <div class="ability-list">
        <div class="container-fluxo">
            <button class="abi-item neon-yellow-border" data-line="line21" data-title="呼 - Imbuir" data-desc="Imbuir objetos com energia enquanto em contato com o seu corpo.">呼</button>
            <button class="abi-item neon-yellow-border" data-line="line11" style="margin-left: 10px; margin-right: 10px;" data-title="放 - Lançar" data-desc="Projetar energia para fora do seu corpo diretamente.">放</button>
            <button class="abi-item neon-yellow-border" data-line="line31" data-title="伝 - Transmitir" data-desc="Transferir energia para outro ser vivo.">伝</button>
        </div>
        <div class="container-fluxo" style="height: 30px">
            <div style="overflow: visible;">
                <div class="line" style="height: 50px; position: relative;"></div>
            </div>
            <div style="overflow: visible; margin-left: 10px; margin-right: 10px;">
                <div class="line" style="height: 50px; position: relative;"></div>
            </div>
            <div style="overflow: visible; visibility: hidden;">
                <div class="line" style="height: 40px; position: relative;"></div>
            </div>
        </div>
        <div class="container-fluxo">
            <button class="abi-item neon-yellow-border" data-line="line22" data-title="充 - Carregar" data-desc="Deixar um objeto carregado com a sua energia para ativação posterior.">充</button>
            <div style="overflow: visible; margin-left: 10px; margin-right: 10px;">
                <div class="line" style="height: 70px;"></div>
                <div class="line" style="height: 35px; transform: rotate(90deg); margin-left:35px"></div>
            </div>
            <button class="abi-item neon-yellow-border" data-line="line12" data-title="念 - Conceitos" data-desc="Emissão de conceitos e sensações, como emoções ou estados.">念</button>
        </div>
        <div class="container-fluxo">
            <button class="abi-item neon-yellow-border" data-line="line12" data-title="貫 - Atravessar" data-desc="Energia que atravessa obstáculos.">貫</button>
            <div style="overflow: visible; margin-left: 10px; margin-right: 10px;">
                <div class="line" style="height: 70px;"></div>
                <div class="line" style="height: 70px; transform: rotate(90deg);"></div>
            </div>
            <button class="abi-item neon-yellow-border" data-line="line12" data-title="分 - Dividir" data-desc="Energia que se divide em duas partes, sem perder sua força.">分</button>
        </div>
        <div class="container-fluxo">
            <button class="abi-item neon-yellow-border" data-line="line12" data-title="波 - Ondular" data-desc="Energia que se move em padrões ondulantes.">波</button>
        </div>
    </div>
    <div id="ability-desc">
        <p id="ab-title"></p>
        <p id="ab-desc"></p>
    </div>
</div>
`;

let abilitiesHtml_trans = 
`
<div id="container-abilites" style="height: fit-content; margin-top: 110px">
            <div class="ability-header">
                <button class="card neon neon-orange" id="back-card" onclick="navigateDivs('back-card','container-abilites','container-categories')">
                    <h1>換</h1>
                </button>
                <h1>Transmutação</h1>
                <p> Lhe dá a capacidade de modificar as propriedades da sua energia, dando novas formas e usos para ela. As transformação da Aura duram no máximo uma hora, dependendo da transformação pode durar muito menos.</p>
            </div>
            <div class="ability-list">
                <div class="container-fluxo">
                    <button class="abi-item neon-orange-border" data-line="line11o1" style="margin-top: 35px;" data-title="電 - Eletricidade" data-desc="A capacidade de criar eletricidade por meio da sua aura, transformando a aura em eletricidade, não lhe torna imune a ela.">電</button>
                    <button class="abi-item neon-orange-border" data-line="line11o1" style="margin-top: -25px; margin-left: 10px; margin-right: 9px;" data-title="風 - Ar" data-desc="A capacidade de tornar a sua aura em ar, ganhando todas as propriedades dele.">風</button>
                    <button class="abi-item neon-orange-border" data-line="line11o1" style="margin-top: -25px; margin-right: 10px;" data-title="音 - Som" data-desc="A capacidade de tornar a sua aura em puro som, tornando ela em ondas sonoras.">音</button>
                    <button class="abi-item neon-orange-border" data-line="line11o1" style="margin-top: 35px;" data-title="弾 - Elasticidade" data-desc="A capacidade de dar a propriedade de borracha para a sua aura e dar elasticidade para ela.">弾</button>
                </div>
                <div class="container-fluxo" style="margin-top: -6px;">
                    <button class="abi-item neon-orange-border" data-line="line12o2" data-title="光 - Luz" data-desc="A capacidade de tornar a sua aura em luz, mas não se tornando imune a ela.">光</button>
                    
                    <div style="overflow: visible; margin-left: 76px; margin-right: 76px;">
                        <div class="line" style="height: 110px; margin-bottom: 65px;"></div>
                        <div class="line" style="height: 130px; transform: rotate(90deg); margin-bottom: 105px;"></div>
                        <div class="line" style="height: 10px; transform: rotate(90deg); margin-bottom: 172px;"></div>
                    </div>
                    
                    <button class="abi-item neon-orange-border" data-line="line14o2"  data-title="冷 - Frio" data-desc="A capacidade de fazer a sua aura retirar o calor do ambiente, não lhe tornando imune ao frio.">冷</button>
                </div>
                <div class="container-fluxo" style="margin-top: -3px;margin-bottom: -3px;">
                    <div style="overflow: visible; position: absolute;">
                        <div class="line" style="height: 15px; margin-left: 262px;margin-bottom: 56px; transform: rotate(-5deg);"></div>
                    </div>
                    <div style="overflow: visible; position: absolute;">
                        <div class="line" style="height: 15px; margin-left: 249px;margin-top: 68px; transform: rotate(20deg);"></div>
                    </div>
                    <button class="abi-item neon-orange-border" style="margin-top: 7px;" data-line="line12o1" data-title="火 - Fogo" data-desc="A capacidade de tornar a sua aura em puro fogo, mas não se tornar imune ao fogo.">火</button>
                    <div style="overflow: visible;">
                        <div class="line" style="height: 85px; transform: rotate(-99deg); margin-left: 35px; margin-bottom: 10px;"></div>
                    </div>
                    
                    <button class="abi-item neon-orange-border" style="margin-left: 35px; margin-right: 35px; margin-top: -25px;" data-line="line11" data-title="理 - Compreensão" data-desc="A compressão da mudança de conceito da aura, permitindo abrir um caminho novo a ser seguido.">理</button>
                    
                    <div style="overflow: visible;">
                        <div class="line" style="height: 85px; transform: rotate(99deg); margin-right: 35px; margin-bottom: 10px;"></div>
                    </div>
                    <div style="overflow: visible; position: absolute;">
                        <div class="line" style="height: 15px; margin-right: 262px;margin-bottom: 56px; transform: rotate(5deg);"></div>
                    </div>
                    <div style="overflow: visible; position: absolute;">
                        <div class="line" style="height: 15px; margin-right: 249px;margin-top: 68px; transform: rotate(-20deg);"></div>
                    </div>
                    <button class="abi-item neon-orange-border" style="margin-top: 7px;" data-line="line14o1" data-title="水 - Água" data-desc="A capacidade de tornar a sua aura em água, não podendo ser bebida.">水</button>
                </div>
                <div class="container-fluxo">
                    <button class="abi-item neon-orange-border" style="margin-top: 4px" data-line="line12o2" data-title="熱 - Calor" data-desc="A capacidade de tornar a sua aura em calor, mas não lhe tornando imune a ele.">熱</button>
                    <div style="overflow: visible; margin-left: 62px; margin-right: 62px">
                        <div class="line" style="height: 85px; margin-top: -15px;"></div>
                    </div>
                    <button class="abi-item neon-orange-border" style="margin-top: 4px" data-line="line14o2"  data-title="氷 - Gelo" data-desc="A capacidade de tornar a sua aura em puro gelo, não lhe tornando imune ao frio.">氷</button>
                </div>
                <div class="container-fluxo" style="margin-top: -15px;">
                    <button class="abi-item neon-orange-border" data-line="line13o2" style="margin-bottom: 25px;" data-title="金 - Metal" data-desc="A capacidade de criar metal com a sua aura, tornando ela no metal utilizado.">金</button>
                    <div style="overflow: visible; position: absolute;">
                        <div class="line" style="height: 16px;transform: rotate(100deg);margin-right: 66px; margin-bottom: 13px;"></div>
                    </div>
                    <button class="abi-item neon-orange-border" data-line="line13o1" style="margin-left: 15px; margin-right: 15px;" data-title="土 - Terra" data-desc="A capacidade de tornar a sua aura em terra, o solo de Silty normalmente é a aparência.">土</button>
                    <div style="overflow: visible; position: absolute;">
                        <div class="line" style="height: 16px;transform: rotate(80deg);margin-left: 66px; margin-bottom: 13px;"></div>
                    </div>
                    <button class="abi-item neon-orange-border" data-line="line13o2" style="margin-bottom: 25px;" data-title="砂 - Areia" data-desc="A capacidade de tornar a sua aura em pura areia, permitindo ela ter todas as propriedades.">砂</button>
                </div>
            </div>
            <div id="ability-desc" style="margin-bottom: 15px">
                <p id="ab-title"></p>
                <p id="ab-desc"></p>
            </div>
        </div>
`

let abilitiesHtml_espac = 
`
<div id="container-abilites">
            <div class="ability-header">
                <button class="card neon neon-blue" id="back-card" onclick="navigateDivs('back-card','container-abilites','container-categories')">
                    <h1>宇</h1>
                </button>
                <h1>Espacial</h1>
                <p> Capacidade de modificar o espaço ao seu redor com o uso da Aura para isso, todos os conceitos dessa categoria gastam 2x mais que os normais.</p>
            </div>
            <div class="ability-list">
                <div class="container-fluxo">
                    <button class="abi-item neon-blue-border" data-line="line31" data-title="距 - Distância" data-desc="Você é capaz de manipular a distância utilizando a sua aura como um meio para isso, diminuindo a distância ou aumentando ela em 9 metros inicialmente, mais aplicações aumentam ou diminuem isso em 3 metros apenas">距</button>
                    <button class="abi-item neon-blue-border" data-line="line21" style="margin-left: 10px; margin-right: 10px;" data-title="移 - Teleporte" data-desc="A possibilidade de usar a sua aura como ponto para você se teleportar através dela, a distância de teleporte é apenas 10 metros, podendo aumentar com mais aplicações do conceito.">移</button>
                    <button class="abi-item neon-blue-border" data-line="line11" style="margin-right: 10px;" data-title="重 - Gravidade" data-desc=" Usando a sua aura você é capaz de gerar gravidade com ela na área que ela está afetando, você não é imune a gravidade gerada.">重</button>
                    <button class="abi-item neon-blue-border" data-line="line41" data-title="向 - Direção" data-desc="A capacidade de você aplicar com a sua aura uma mudança de direção para um objeto ou ser vivo.">向</button>
                </div>
                <div class="container-fluxo">
                    <button class="abi-item neon-blue-border" data-line="line22" data-title="門 - Portal" data-desc="A capacidade de utilizar a sua Aura para criar portais.">門</button>
                    <div style="overflow: visible; margin-left: 10px; margin-right: 10px;">
                        <div class="line" style="height: 70px;"></div>
                        <div class="line" style="height: 35px; transform: rotate(90deg); margin-right:35px"></div>
                    </div>
                    <div style="overflow: visible;; margin-right: 10px;">
                        <div class="line" style="height: 70px;"></div>
                        <div class="line" style="height: 35px; transform: rotate(90deg); margin-left:35px"></div>
                    </div>
                    <button class="abi-item neon-blue-border" data-line="line12" data-title="引 - Atração" data-desc="Usando a geração de gravidade você pode atrair objetos ou pessoas com isso, aplicando a força da sua aura nessa atração.">引</button>
                </div>
                <div class="container-fluxo">
                    <button class="abi-item neon-blue-border" data-line="line22" data-title="部 - Dimensão" data-desc="A capacidade de criar uma dimensão com 9m³, com mais aplicações não se aumenta o tamanho da sala, apenas adiciona mais salas nessa dimensão, como conexões.">部</button>
                    <div style="overflow: visible; margin-left: 10px; margin-right: 10px;">
                        <div class="line" style="height: 26px; margin-bottom: 25px;"></div>
                        <div class="line" style="height: 35px; transform: rotate(90deg); margin-right:35px"></div>
                    </div>
                    <div style="overflow: visible;; margin-right: 10px;">
                        <div class="line" style="height: 26px; margin-bottom: 25px;"></div>
                        <div class="line" style="height: 35px; transform: rotate(90deg); margin-left:35px"></div>
                    </div>
                    <button class="abi-item neon-blue-border" data-line="line12" data-title="反 - Repulsão" data-desc="Usando a geração de gravidade você pode afastar objetos ou pessoas com isso, aplicando a força da sua aura nessa repulsão">反</button>
                </div>
            </div>
            <div id="ability-desc">
                <p id="ab-title"></p>
                <p id="ab-desc"></p>
            </div>
        </div>
`



document.addEventListener("DOMContentLoaded",(event) => {
    mainDiv = document.getElementById('main-container');
    document.getElementById('btn-click').volume = 0.2
    document.getElementById('bg-audio').volume = 0.2

})

function navigateDivs(buttonClicked, currentdiv, nextdiv){
    var cbtn = document.getElementById(buttonClicked)

    switch (nextdiv){
        case "container-categories":
            transitionDiv(cbtn, categoriesHtml)
            document.getElementById('bg-audio').play()
            break;
        case "container-abilites":
            switch(buttonClicked){
                case 'refor-btn':
                    transitionDiv(cbtn, abilitiesHtml_refor)
                    break;
                case 'manip-btn':
                    transitionDiv(cbtn, abilitiesHtml_manip)
                    break;
                case 'conju-btn':
                    transitionDiv(cbtn, abilitiesHtml_conju)
                    break;
                case 'emiss-btn':
                    transitionDiv(cbtn, abilitiesHtml_emiss)
                    break;
                case 'trans-btn':
                    transitionDiv(cbtn, abilitiesHtml_trans)
                    break;
                case 'espac-btn':
                    transitionDiv(cbtn, abilitiesHtml_espac)
                    break;
            }
            break;
    }

}

function transitionDiv(btn, div){
    document.getElementById('btn-click').currentTime = 0;
    document.getElementById('btn-click').play()
    btn.classList.add('anim-expand');
    mainDiv.classList.add('anim-fade-out-in')
    setTimeout(function(){
        mainDiv.innerHTML = ''
        mainDiv.innerHTML = div
        setTimeout(configAbiItems(),100)
    }, 1000)
    setTimeout(function(){
        mainDiv.classList.remove('anim-fade-out-in')
    },2000)
}


function configAbiItems(){
    let divDescription = document.getElementById('ability-desc');
    let itemId; let aux;
    document.querySelectorAll('.abi-item').forEach(item => {
        updateButtonStates();
        item.addEventListener('click', () => {
            itemId = item.getAttribute('data-title');
            itemLine = item.getAttribute('data-line');
            if(!item.classList.contains('item-selected')){
                checkOrder(itemLine)
                item.classList.add('item-selected')
                divDescription.innerHTML +=
                `
                <p class="ab-title" id="${itemId}1">${itemId}</p>
                <p class="ab-desc" id="${itemId}2">${item.getAttribute('data-desc')}</p>
                `
            } else {
                item.classList.remove('item-selected')
                document.getElementById(`${itemId}1`).remove()
                document.getElementById(`${itemId}2`).remove()
                removeSubsequentItems(itemLine);
            }          
            updateButtonStates();
        })
        
    })
    
}

function checkOrder(line) {
    const order = {
        'line11': 'line11',
        'line11o': 'line11',
        'line12': 'line11',
        'line13': 'line12',
        'line21': 'line21',
        'line22': 'line21',
        'line31': 'line31',
        'line41': 'line41',
        'line11o1':'line11',
        'line11o2':'line11o1',
        'line12o1':'line11',
        'line12o2':'line12o1',
        'line13o1':'line11',
        'line13o2':'line13o1',
        'line14o1':'line11',
        'line14o2':'line14o1',
    };

    const requiredLine = order[line];
    if (!requiredLine) return true;

    const selectedLines = Array.from(document.querySelectorAll('.item-selected'))
        .map(item => item.getAttribute('data-line'));

    return selectedLines.includes(requiredLine);
}

function updateButtonStates() {
    const allButtons = document.querySelectorAll('.abi-item');
    allButtons.forEach(button => {
        const line = button.getAttribute('data-line');
        if (line === 'line11' || line === 'line21' || line === 'line31' || line === 'line41') {
            button.classList.remove('disabled');
            button.disabled = false;
        } else {
            const canUnlock = checkOrder(line);
            if (canUnlock || line === undefined) {
                button.classList.remove('disabled');
                button.disabled = false;
            } else {
                button.classList.add('disabled');
                button.disabled = true;
            }
        }
    });
}

function removeSubsequentItems(line) {
    const allButtons = document.querySelectorAll('.abi-item');
    const lineOrder = {
        'line11': 'line11',
        'line11o': 'line11',
        'line12': 'line11',
        'line13': 'line12',
        'line21': 'line21',
        'line22': 'line21',
        'line31': 'line31',
        'line41': 'line41',
        'line11': ['line11o', 'line12', 'line13'],
        'line12': ['line13'],
        'line21': ['line22'],
        'line11': ['line11o1', 'line12o1', 'line13o1', 'line14o1', 'line12o2', 'line13o2', 'line14o2'],
        'line12o1': ['line12o2'],
        'line13o1': ['line13o2'],
        'line14o1': ['line14o2']
    };

    const itemsToRemove = lineOrder[line] || [];

    itemsToRemove.forEach(lineToRemove => {
        document.querySelectorAll(`.abi-item[data-line="${lineToRemove}"]`).forEach(item => {
            if (item.classList.contains('item-selected')) {
                item.classList.remove('item-selected');
                const itemId = item.getAttribute('data-title');
                document.getElementById(`${itemId}1`)?.remove();
                document.getElementById(`${itemId}2`)?.remove();
            }
            item.classList.add('disabled');
            item.disabled = true;
        });
    });
}
