const form = document.getElementById('form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
        text:document.getElementById('text').value
    } 
    try {
        const res = await fetch('http://localhost:3000/text', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        const result = await res.json();
        console.log(result); 
    
    } catch {
        
    }
});


const resultsDiv = document.getElementById('results'); 

const get = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}
get('http://localhost:3000/text').then(res => {
    resultsDiv.innerHTML = ''; 
    res.forEach(e => {
        const resultItem = document.createElement('div'); 
        resultItem.textContent = e.value || e.text;  // Егер 'value' жоқ болса, 'text'-ті қолдану
        resultsDiv.appendChild(resultItem); 
    });
});
