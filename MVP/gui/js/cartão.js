
document.querySelector('.card-number-input').oninput = () => {
    document.querySelector('.card-number-box').innerText = document.querySelector('.card-number-input').value;
}

document.querySelector('.card-holder-input').oninput = () => {
    document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value;
}

document.querySelector('.month-input').oninput = () => {
    document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
}

document.querySelector('.year-input').oninput = () => {
    document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
}

document.querySelector('.cvv-input').onmouseenter = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

document.querySelector('.cvv-input').onmouseleave = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}

document.querySelector('.cvv-input').oninput = () => {
    document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
}


document.addEventListener('DOMContentLoaded', () => {
    const cepInput = document.getElementById('cep-input');
    cepInput.addEventListener('input', async () => {
        if (cepInput.value.length >= 8) { // Verifica se o CEP tem 8 dígitos
            try {
                const response = await fetch(`https://viacep.com.br/ws/${cepInput.value}/json/?lang=pt`);
                if (!response.ok) throw new Error('Erro na requisição');
                const data = await response.json();
                if (data.erro) {
                    alert('CEP não encontrado.');
                    return;
                }
                document.getElementById('address-input').value = data.logradouro;
                document.getElementById('street-number-input').value = '';
                document.getElementById('complement-input').value = data.complemento || '';
                document.getElementById('neighborhood-input').value = data.bairro;
                document.getElementById('state-input').value = data.uf;
                document.getElementById('city-input').value = data.localidade;
            } catch (error) {
                console.error(error);
                alert('Erro ao buscar informações do CEP.');
            }
        }
    });
});
