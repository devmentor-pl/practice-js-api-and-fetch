class IPDisplay {
    constructor(api, sectionElements) {
        this.api = api;
        this.sectionElements = sectionElements;
    }

    load() {
        this.showStatus();

        this.api.loadData()
            .then(data => {
                this.showStatus(data);

                return data;
            })
            .then(data => {
                this.insert(data);
            })
            .catch(err => this.insert(err.message))
    }

    showStatus(data) {
        const [, span] = this.sectionElements;

        if (data) {
            this.renderTextInfo(span, '0.0.0.0');
        }
        else {
            this.renderTextInfo(span, 'wait...');
        }
    }

    insert(ip) {
        const [button, span] = this.sectionElements;

        button.addEventListener('click', e => {
            const targetEl = e.target;

            if (targetEl.tagName === 'BUTTON') {
                this.renderTextInfo(span, ip);
            }
        })
    }

    renderTextInfo(element, content) {
        element.innerText = content;
    }

}

export default IPDisplay;