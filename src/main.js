class App{
    constructor(){
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.listEl = document.getElementById('repo-list');

        this.registerHandlers();
    }

    //Registra evento
    registerHandlers(){

        //ouve quando teve submit
        this.formEl.onsubmit = (event) => this.addRepository(event);
    }

    addRepository(event) {
        // previne que recarrega
        event.preventDefault();

        this.repositories.push({
            name: 'Teste',
            descript: 'Lorem Lorem Lorem Lorem',
            avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
            html_url: '#'
        });

        this.render();
    }

    render(){
        this.listEl.innerHTML = '';

        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let strongEl = document.createElement('strong');
            strongEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.descript));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
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
