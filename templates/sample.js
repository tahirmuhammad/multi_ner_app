
        async function query(data) {
		const response = await fetch(
			"https://api-inference.huggingface.co/models/tahirmuhammadcs/multi-ner-final",
			{
				headers: { Authorization: "Bearer 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" },
				method: "POST",
				body: JSON.stringify(data),
			}
		);
		const result = await response.json();
		return result;
	}
	async function mycall(){
	const text = document.getElementById('inputText').value;
	const response = await query({"inputs": text});

            const tableBody = document.getElementById('entityTable').getElementsByTagName('tbody')[0];

            // Clear existing rows in the table body
            tableBody.innerHTML = '';

            response.forEach(item => {
                let row = tableBody.insertRow();

                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                let cell3 = row.insertCell(2);
                let cell4 = row.insertCell(3);
                let cell5 = row.insertCell(4);

                cell1.textContent = item.entity_group;
                cell2.textContent = item.score.toFixed(4); // Format score to 4 decimal places
                cell3.textContent = item.word;
                cell4.textContent = item.start;
                cell5.textContent = item.end;
            });
	
/*	 query({"inputs": text}).then((response) => {
		//console.log(JSON.stringify(response));
		document.getElementById('resultText').textContent = JSON.stringify(response);
	}); */
	}
		
function urdutextf() {
    // Get the text from the h1 tag
    const textToCopy = document.getElementById('urdutext').innerText;

    // Get the textarea element
    const textarea = document.getElementById('inputText');

    // Set the textarea's value to the copied text
    textarea.value = textToCopy;

    // Optionally, you can focus on the textarea after copying the text
    textarea.focus();
}

function punjabitextf() {
    // Get the text from the h1 tag
    const textToCopy = document.getElementById('punjabitext').innerText;

    // Get the textarea element
    const textarea = document.getElementById('inputText');

    // Set the textarea's value to the copied text
    textarea.value = textToCopy;

    // Optionally, you can focus on the textarea after copying the text
    textarea.focus();
}

function hinditextf() {
    // Get the text from the h1 tag
    const textToCopy = document.getElementById('hinditext').innerText;

    // Get the textarea element
    const textarea = document.getElementById('inputText');

    // Set the textarea's value to the copied text
    textarea.value = textToCopy;

    // Optionally, you can focus on the textarea after copying the text
    textarea.focus();
}

		
		/*
		async function classifyText() {
            const text = document.getElementById('inputText').value;
            const response = await fetch('https://cuddly-space-doodle-rpqw95jqp7pcwprx-5000.app.github.dev/classify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ text })
            });
            const result = await response.json();
            document.getElementById('resultText').textContent = JSON.stringify(result, null, 2);
        } */
