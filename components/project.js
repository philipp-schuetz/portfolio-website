class Project extends HTMLElement {
	constructor() {
		super();
		var languages_arr = this.getAttribute('languages').split(',');
		var languages_str = '';
		for (let i = 0; i < languages_arr.length; i++) {
			// last element in list has no comma
			if (i == languages_arr.length - 1) {
				languages_str += `<span class="str">'${languages_arr[i]}'</span>`;
			} else {
				languages_str += `<span class="str">'${languages_arr[i]}'</span>, `;
			}
		}

		this.innerHTML = `
            <div class="cbl2"><span class="bl2">{</span></div>

                <div class="cbl3"><span class="key">name</span>: <span class="str">
                    <a id="str-url"
                    href="${this.getAttribute('url')}"
                    title="Visit Project on GitHub">'${this.getAttribute('name')}'</a></span>,
				</div>

                <div class="cbl3"><span class="key">languages</span>: 
                    <span class="bl3">[</span>${languages_str}<span class="bl3">]</span>
                </div>
                    
            <div class="cbl2"><span class="bl2">}</span>,</div>
        `;
	}
}

window.customElements.define('component-project', Project);
