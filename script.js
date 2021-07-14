async function getData() {
    const response = await fetch("./questions.json");
    const questions = await response.json();
    createFAQ(questions);
}
try{
    getData();
} catch (e) {
    alert(e)
}

let open = true;
function createFAQ(questions) {
    const mainContainer = document.querySelector('.allQuestions');

    questions.forEach(question => {
        const boxContainer = document.createElement("div");
        boxContainer.classList.add("boxContainer");
        const contentsContainer = document.createElement("div");
        contentsContainer.classList.add("questionBox");
    
        const h2 = document.createElement("h2");
        const content = document.createTextNode(question.question);
        h2.appendChild(content);
    
        const button = document.createElement("div");
        button.classList.add("button");
    
        const h3 = document.createElement("h3");
        const bContent = document.createTextNode('+');
        h3.appendChild(bContent);
        button.append(h3);
        contentsContainer.append(h2, button);

        const anwser = document.createElement("div");
        anwser.classList.add("anwser");
        anwser.classList.add("alwaysAnwser");
        
        const p = document.createElement("p");
        const pContent = document.createTextNode(question.anwser);
        p.appendChild(pContent);
        anwser.appendChild(p);

        let open = true;
        button.addEventListener("click", (e) => {
                boxContainer.classList.toggle('boxContainerOpen');
                if(open) {
                   setTimeout(() => {
                    anwser.classList.toggle('anwser');
                   }, 500);
                   open = false; 
                } else {
                    anwser.classList.toggle('anwser');
                    open = true;
                }
                
        })
        boxContainer.append(contentsContainer,  anwser);
        mainContainer.append(boxContainer);
    })

}

