const template = document.createElement('template')

template.innerHTML = `

    <style> 
    .ticker-box {
        width: 400px;
        height: 40px;

        margin: 50px 100px;

        display: flex;
        justify-content: center;
        align-items: center;
  
        background-color: rgb(237, 242, 241);
        overflow: hidden;

    }

    .ticker-text {
        animation: leftAndRight 4s infinite linear

    }

    @keyframes leftAndRight {
        0% { transform: translate(-300px, 0px) }
        50% { transform: translate(0px, 0px)}
        100% { transform: translate(320px, 0px)}
    }

    </style>



    <div class="ticker-box">
        <h3 class="ticker-text" id="test">...Color.com is awesome...</h3>
    </div>

`

class TicketTape extends HTMLElement {
    constructor() {
        super();

        const tempHTML = template.content.cloneNode(true)
        this._shadowRoot = this.attachShadow({ mode: 'open'});
        this._el = document.createElement
        // Don't know why this selector is null
        this._tickerText = this._shadowRoot.querySelector('.ticker-text')

        this._text = this.innerHTML
        //// Was going to apply the innerHTML to the h3 in the Shadow but dont know why this._tickeText is null
        // this._tickerText.innerHTML = this._text

        console.log(this._tickerText)
        this._shadowRoot.appendChild(tempHTML)
    }

}


customElements.define('ticker-tape', TicketTape);