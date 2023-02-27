Definiamo un array che contiene le varie immagini del carosello.
Altre due variabili ci servono per indicare 1) il "punto" di partenza del nostro carosello. 2)costruzione della struttura html delle immagini.

Cicliamo il nostro array e concateniamo un tamplate literal per avere la nostra struttura html.

Due ulteriori variabili servono a identificare i due "bottoni" del carosello, i quali ci serviranno quando cliccheramo su essi.

Definiamo una variabile items la quale ci servirà per inserire la classe "show" negli elementi items in poszione active.

Infine definiamo due eventListener, che verranno attivati al click dei due bottoni "prev" e "next".
Quando clicchiamo next, rimuoviamo all'elemento indicizzato active di items la classe show, aumentiamo il valore di active e al nuovo elemente items[active++] gli aggiungiamo show. 
Tutto questo quando il valore di active è minore della lunghezza di items -1 .

Simile il caso prev, dove cambia solamente active-- e la condizione è valida se active è maggiore di 0.