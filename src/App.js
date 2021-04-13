import jsPDF from 'jspdf';
import { useState } from 'react';
import Pdf from './Pdf';

export default function App() {
	const [name, setName] = useState('');

	async function Print() {
		console.log(name);
		const pdf = new jsPDF('l', 'pt', 'A4');
		await pdf.html(document.querySelector('#pdf'), {
			callback: (pdf) => {
				pdf.save('download.pdf');
			},
		});
	}

	return (
		<div>
			<div className="myForm">
				<div className="input-group flex-nowrap">
					<input value={name} onChange={(val) => setName(val.target.value)} type="text" className="form-control" placeholder="Aluna(o)" />
				</div>

				<button onClick={() => Print()} className="btn btn-primary gerar" type="button">
					Gerar Certificado
				</button>
			</div>

			<div style={{ display: 'none' }}>
				<div id="pdf">
					<Pdf name={name} />
				</div>
			</div>
		</div>
	);
}
