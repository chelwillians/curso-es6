import api from './api';

class App {
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.inputEl = document.querySelector('input[name=repository]');
        this.listEl = document.getElementById('repo-list');

        this.registerHandlers();
    }

    //Registra evento
    registerHandlers() {

        //ouve quando teve submit
        this.formEl.onsubmit = (event) => this.addRepository(event);
    }

    setLoading(loading = true){
        if(loading === true){
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando...'));
            loadingEl.setAttribute('id', 'loading');

            this.formEl.appendChild(loadingEl);
        } else{
            document.getElementById('loading').remove();
        }
    }

    async addRepository(event) {
        // previne que recarrega
        event.preventDefault();

        const repoInput = this.inputEl.value;

        if (repoInput.length === 0)
            return;

        this.setLoading();

        try {
            const response = await api.get(`/users/${repoInput}`);

            // console.log(response);

            const { name, bio, html_url, avatar_url } = response.data;

            // objeto do elemento
            this.repositories.push({
                name,
                bio,
                avatar_url,
                html_url
            });

            this.inputEl.value = "";

            this.render();
        } catch (error) {
            alert('Usuário não existe.');
        }

        this.setLoading(false);
    }

    render() {
        this.listEl.innerHTML = '';

        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let strongEl = document.createElement('strong');
            strongEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.bio));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');

            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(strongEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        })
    }
}

new App();
