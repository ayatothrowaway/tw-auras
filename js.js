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
            <button class="abi-item neon-green-border" data-line="line11" data-title="強 - Fortalecer" data-desc="Aumenta a força física e a durabilidade além do convencional.">強</button>
        </div>
        <div class="container-fluxo">
            <button class="abi-item neon-green-border" data-line="line11o" data-title="生 - Regeneração" data-desc="Habilidades de regeneração que permitem curar-se ou curar os outros.">生</button>
            <div style="overflow: visible;">
                <div class="line" style="height: 70px;"></div>
                <div class="line" style="height: 50px; transform: rotate(90deg);"></div>
            </div>
            <button class="abi-item neon-green-border" data-line="line11o" data-title="硬 - Endurecer" data-desc="Aumenta a resistência a danos ou a robustez.">硬</button>
        </div>
        <div class="container-fluxo">
            <button class="abi-item neon-green-border" data-line="line13" data-title="拡 - Ampliar" data-desc="Aumenta o tamanho ou o alcance da energia.">拡</button>
            <div style="overflow: visible;">
                <div class="line" style="height: 50px; transform: rotate(90deg);"></div>
            </div>
            <button class="abi-item neon-green-border" data-line="line12" data-title="善 - Aprimorar" data-desc="Melhora habilidades ou atributos específicos.">善</button>
            <div style="overflow: visible;">
                <div class="line" style="height: 50px; transform: rotate(90deg);"></div>
            </div>
            <button class="abi-item neon-green-border" data-line="line13" data-title="速 - Acelerar" data-desc="Aumenta a velocidade.">速</button>
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
            <button class="abi-item neon-purple-border" data-line="line11" data-title="変 - Moldar" data-desc="Alterar a forma ou a natureza de sua energia.">変</button>
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
            <button class="abi-item neon-purple-border" data-line="line13" data-title="憑 - Possessão" data-desc="Capacidade de tomar o corpo de alguém.">憑</button>
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
            <button class="abi-item neon-red-border" data-line="line11" data-title="呼 - Evocar" data-desc="Conjurar armas específicas para uso.">呼</button>
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
            <button class="abi-item neon-yellow-border" data-line="line21" data-title="呼 - Imbuir" data-desc="Imbuir objetos com energia.">呼</button>
            <button class="abi-item neon-yellow-border" data-line="line11" style="margin-left: 10px; margin-right: 10px;" data-title="放 - Lançar" data-desc="Projéteis de energia lançados de forma controlada.">放</button>
            <button class="abi-item neon-yellow-border" data-line="line31" data-title="伝 - Transmitir" data-desc="Transferir energia para outro ser.">伝</button>
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
                <div class="line" style="height: 52px; position: relative;"></div>
            </div>
            <div style="overflow: visible; visibility: hidden;">
                <div class="line" style="height: 40px; position: relative;"></div>
            </div>
        </div>
        <div class="container-fluxo">
            <button class="abi-item neon-yellow-border" data-line="line12" data-title="貫 - Atravessar" data-desc="Energia que atravessa obstáculos.">貫</button>
            <div style="overflow: visible; margin-left: 10px; margin-right: 10px;">
                <div class="line" style="height: 70px;"></div>
                <div class="line" style="height: 70px; transform: rotate(90deg);"></div>
            </div>
            <button class="abi-item neon-yellow-border" data-line="line12" data-title="分 - Dividir" data-desc="Energia que se divide em múltiplas partes.">分</button>
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




document.addEventListener("DOMContentLoaded",(event) => {
    mainDiv = document.getElementById('main-container');


    configAbiItems()



})
function navigateDivs(buttonClicked, currentdiv, nextdiv){
    var cbtn = document.getElementById(buttonClicked)

    switch (nextdiv){
        case "container-categories":
            transitionDiv(cbtn, categoriesHtml)
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
                    break
            }
            break;
    }

}

function transitionDiv(btn, div){
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
        if (line === 'line11' || line === 'line21' || line === 'line31') {
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
        'line11': ['line11o', 'line12', 'line13'],
        'line12': ['line13'],
        'line21': ['line22'],
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
