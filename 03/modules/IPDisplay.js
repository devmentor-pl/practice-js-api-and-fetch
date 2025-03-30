class IPDisplay {
    constructor(api, sectionElement) {
        this.api = api;
        this.sectionElement = sectionElement;
    }

    init() {
        this.sectionElement.addEventListener('click', e => {
            const targetEl = e.target;

            if (targetEl.tagName === 'BUTTON') {
                this.load();
            }
        })
    }

    load() {
        this._showStatus();

        this.api.loadData()
            .then(data => {
                this._showStatus(data);

                return data;
            })
            .then(data => {
                this._insert(data);
            })
            .catch(err => this._insert(err.message))
    }

    _insert(ip) {
        this._renderTextInfo(this._findSpanElement(), ip);
    }

    _showStatus(data) {
        if (data) {
            this._renderTextInfo(this._findSpanElement(), '0.0.0.0');
        }
        else {
            this._renderTextInfo(this._findSpanElement(), 'wait...');
        }
    }

    _renderTextInfo(element, content) {
        element.innerText = content;
    }

    _findSpanElement() {
        const [, span] = this.sectionElement.children;

        return span;
    }

}

export default IPDisplay;